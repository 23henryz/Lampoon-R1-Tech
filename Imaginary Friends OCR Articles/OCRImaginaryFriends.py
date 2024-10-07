import pytesseract
from pdf2image import convert_from_path
import pdfplumber
import cv2
import numpy as np
from PIL import Image, ImageEnhance
import os
import re

pytesseract.pytesseract.tesseract_cmd = r'/Users/henryzhou/anaconda3/bin/tesseract'

desktop_path = os.path.join(os.path.expanduser('~'), 'Desktop')
output_folder = os.path.join(desktop_path, 'ocr_articles')

if not os.path.exists(output_folder):
    os.makedirs(output_folder)

def preprocess_image(image):
    gray = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2GRAY)
    resized_image = cv2.resize(gray, None, fx=1.5, fy=1.5, interpolation=cv2.INTER_LINEAR)
    denoised_image = cv2.fastNlMeansDenoising(resized_image, None, h=30)
    pil_image = Image.fromarray(denoised_image)
    enhancer = ImageEnhance.Contrast(pil_image)
    enhanced_image = enhancer.enhance(2)  
    return enhanced_image

def extract_text_from_image(image):
    return pytesseract.image_to_string(image)

def save_text_as_html(text, page_num):
    html_content = f"<html><body><h2>Page {page_num}</h2><p>{text}</p></body></html>"
    output_file = os.path.join(output_folder, f'page_{page_num}.html')
    with open(output_file, 'w') as f:
        f.write(html_content)

def clean_extracted_text(text):
    text = re.sub(r'[^\x00-\x7F]+', '', text)  
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def detect_skew(image):
    image_np = np.array(image)
    
    if len(image_np.shape) == 2: 
        gray = image_np
    else:
        gray = cv2.cvtColor(image_np, cv2.COLOR_RGB2GRAY)
    
    _, binary = cv2.threshold(gray, 150, 255, cv2.THRESH_BINARY_INV)

    edges = cv2.Canny(binary, 50, 150, apertureSize=3)
    lines = cv2.HoughLinesP(edges, 1, np.pi / 180, threshold=200, minLineLength=100, maxLineGap=10)
    
    angles = []
    
    if lines is not None:
        for line in lines:
            x1, y1, x2, y2 = line[0]
            angle = np.degrees(np.arctan2(y2 - y1, x2 - x1))
            angles.append(angle)
    
    if len(angles) > 0:
        median_angle = np.median(angles)
        return median_angle
    else:
        return 0

def correct_skew(image, angle):
    image_np = np.array(image)

    (h, w) = image_np.shape[:2]
    center = (w // 2, h // 2)

    M = cv2.getRotationMatrix2D(center, angle, 1.0)
    
    rotated = cv2.warpAffine(image_np, M, (w, h), flags=cv2.INTER_CUBIC, borderMode=cv2.BORDER_REPLICATE)
    
    rotated_image = Image.fromarray(rotated)

    return rotated_image

def extract_text_with_boxes(image):
    boxes = pytesseract.image_to_boxes(image)
    text = pytesseract.image_to_string(image)
    return boxes, text

def detect_article_starts_by_font(boxes):
    lines = boxes.splitlines()
    heights = []
    
    for line in lines:
        try:
            _, x1, y1, x2, y2 = line.split(' ')[:5]
            height = int(y2) - int(y1)
            heights.append(height)
        except ValueError:
            continue  

    if len(heights) == 0:
        return []  
    
    avg_height = np.mean(heights)
    threshold = avg_height * 1.5  
    
    article_starts = []
    for i, height in enumerate(heights):
        if height > threshold:
            article_starts.append(i)
    
    return article_starts

pdf_path = '/Users/henryzhou/Desktop/imagineryfriends.pdf'

with pdfplumber.open(pdf_path) as pdf:
    for i, page in enumerate(pdf.pages):
        print(f"Processing page {i + 1}/{len(pdf.pages)}")
        
        image = page.to_image(resolution=300)
        image_pil = image.original

        preprocessed_image = preprocess_image(image_pil)

        text = extract_text_from_image(preprocessed_image)

        clean_text = clean_extracted_text(text)

        save_text_as_html(clean_text, i + 1)

print("PDF processing complete. HTML files saved.")