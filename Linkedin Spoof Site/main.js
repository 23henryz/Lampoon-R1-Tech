new Vue({
  el: '#app',
  data: {
    menuList:[
      {
        url:'./images/icon-menu-1.png',
        label:'Home'
      },{
        url:'./images/icon-menu-2.png',
        label:'My-Network'
      },{
        url:'./images/icon-menu-3.png',
        label:'Jobs'
      },{
        url:'./images/icon-menu-4.png',
        label:'Messaging'
      },{
        url:'./images/icon-menu-5.png',
        label:'Notifications'
      },{
        url:'./images/icon-menu-6.png',
        label:'Me'
      }
    ],  
    menuRightBtn:[
      {
        url:'./images/icon-menu-r-1.png',
        label:'For Business'
      },{
        url:'./images/icon-menu-r-2.png',
        label:'Try Preminum for $0'
      }
    ],
    userInfo:{
      name:'Elon Musk',
      job:'Butler, Pennslyvania'
    },
    articleMore:false,
    articleList:[
      {
        userImg:'./images/user-img.png',
        name:'Mark Zuckerberg',
        subInfo:'Meta - Founder',
        icon:'3rd+',
        time:'1w',
        cover:'./images/cover-img.png',
        article:'<p style="padding-bottom:15px">I’ve always believed that the best way to settle an argument is through diplomacy.</p> <p style="padding-bottom:15px">But now I’ve gotten to the stage of life where I realized I need to learn better, I will go barbaric. I hope you know what that means, Elon.</p> <p style="padding-bottom:15px">I think its time we go primal since punching is my favorite thing to do in the world. Today, officially, Elon, I challenge you to a UFC fight.</p> <p style="padding-bottom:15px">Winner wins it all. You’ll owe me 10 billion dollars, and how bout throw a pizza from Nochs on top of that. The world has doubted me for my punching abilities, but I’ll prove it all and beat all lizard allegations. October 8th, Midnight, Harvard Square, I’ll fight yo ass. Be there, or I’ll lose respect for you.</p>'
        ,
        interactArr:{
          icon:'./images/user1-img.png',
          commentNum:16,
          like:177,
          isLike:false
        },
      },{
        userImg:'./images/user3-img.png',
        name:'Donald J. Trump',
        subInfo:'POTUS - I will soon to be',
        icon:'3rd+',
        time:'4d',
        cover:'./images/cover-img2.png',
        article:'<p style="padding-bottom:15px">Look, folks, let me tell you something. Elon, great guy, tremendous guy, joined me for a speech.</p> <p style="padding-bottom:15px">We are brothers. Okay? Brothers. We love Elon, do we? Just saw this challenge from Mark. Elon has done incredible things. Space. Cars. Rockets. You name it, he has done it. And now, a fight? Incredible.</p> <p style="padding-bottom:15px">Now, Zuckerberg... nice kid, okay? Not bad. But, let us be honest he is not a fighter. He is not. I mean, come on. Elon got the strength, the brainpower, the heigh, and let me tell you - he got the best punches, folks. I’ve seen a lot of punches, believe me, and Elon punches are just top-tier. He gonna win, big time.</p> <p style="padding-bottom:15px">And Zuckerberg, well, maybe he will do well in the Metaverse or whatever, but in the ring? Not happening, folks. Not happening. Elon, you are gonna knock him out faster than anyone has ever seen before. Believe me. And when you do, we are going to make America Great Again. </p> <p style="padding-bottom:15px">Okay, folks, I know, I know. The image quality, not great, okay? But listen, its not my fault, alright? We have the best images usually, I mean, really fantastic, top-tier quality. Everybody says it. But sometimes, the cameras, they just dont work the way they should, alright</p> <p style="padding-bottom:15px">Weve got tremendous people working on it. The best, really. And next time, its gonna be crystal clear, believe me. Better than anyones ever seen. But for now, we are gonna make it great again, folks. It will be great, just wait.</p>'
        ,
        interactArr:{
          icon:'./images/user4-img.png',
          commentNum:20,
          like:188,
          isLike:false
        },
      }
    ],
    storiesMore:false,
    storiesListShow:[],
    storiesList:[
      {
        title:'Elon and Mark: Fight of the Century',
        time:'10h ago',
        reader:'400,001',
        author:'Steph Curry', 
        text:'In what can only be described as the most bizarre Silicon Valley spat to date, Elon Musk and Mark Zuckerberg have taken their nerdy rivalry to a new, unexpected arena: UFC. Dana White, CEO and President of UFC, personally made sure this would happen, stating: “This would be revolutionary for MMA. Revolutionary”. What started as a Twitter feud over who could write up a new version of FaceMash, has now escalated into a full-blown mixed martial arts showdown, set to take place at UFC 666. Tickets are already sold out, with a highest bid of 3 million dollars for a seat ticket at the fight. Fans are ready. Fuck that, I’m ready too. Mr. Musk, notorious for his eccentric tweets and questionable dance moves, has promised to bring the energy he used to launch rockets to launch firsts. On the other hand, Mr. Reptile Zuckerberg has been spotted at jiu-jitsu gyms in between practicing his deadpan stare in the mirror. “I’ve created a virtual UFC training world in the Metaverse," Zuckerberg stated. "There, I’ve already beaten Elon 200 times. It’s perfect simulation training, except, you know, in the real world, I can’t just log out when he punches me." To add a twist to this absurd showdown, Donald Trump has come out of nowhere to endorse Musk. "Elon is a winner, folks. A tremendous guy, really great. I know winners when I see them, and Elon has the best punches. I mean, those rockets? Imagine that in the Octagon! Boom! One punch, Zuck’s done.”  Not to be outdone, Kamala Harris quickly threw her support behind Zuckerberg. “I love Facebook. Zucks fighting spirit is unparalleled," Harris said at a press conference, holding up a "Team Zuck" shirt.  Former professional boxer, Mike Tyson has declared this fight “the weirdest thing I’ve ever seen” and that he’ll absolutely destroy either one of him, hell he’d fight ‘em himself. As this fight is approaching, one thing is for sure: the world is ready. Musks fans are calling for a knockout in round one, while Zuckerbergs supporters have started a petition to broadcast the fight exclusively in VR, where Zuck gets an additional 300hp and 200dmg. Stay tuned… Only on LinkedIn.'
      },{
        title:'Harvard Crimson Claims The Lampoon Endorsed Trump at Pennsylvania Rally',
        time:'12h ago',
        reader:'10,286',
        author:'J. Sellers Hill', 
        text:'BUTLER, PHILADELPHIA — ” In an unprecedented act of self-sabotage, The Harvard Crimson, usually known for its straight-laced reporting, tried (and failed) to masquerade as its humor-oriented rival, The Harvard Lampoon, at a Donald Trump rally in Philadelphia. The results were... less than hilarious. Armed with cardboard cutouts of famous Trump memes, bright red hats reading “Make Harvard Great Again” and a script that could only be described as trying way too fucking hard, the Crimson editors rolled into the rally hoping to sprinkle some "ironic satire" on the proceedings. What they got instead was confused stares and the occasional, are you guys not supposed to be journalists? Their first mistake? Showing up in tweed jackets. "We thought we would give it a sort of New Yorker meets frat-boy-on-a-bender vibe," said Crimson editor-in-chief, J. Sellers Hill. "We figured we would blend right in with the crowd, but turns out wearing a sweater vest to a Trump rally is like bringing a kazoo to a symphony” it just does not hit right." Crimson reporters attempted to break out classic Lampoon-style gags, like interviewing rally-goers with questions such as, if Trump had to choose between Harvard and Yale, which would he bulldoze first? Can you spell covfefe? Unfortunately, their attempts at biting satire were met with responses like, shut the fuck up. We make America great again.  By the time the rally ended, the Crimson crew, battered by the realization that Trump supporters do not care, retreated to a nearby Starbucks to debrief. We really thought we could pull this off, sighed Sellers. I guess satire is harder than it looks. When Lampoon President was asked of this act, Reznik responded: “It’s just vibes.”'
      },{
        title:'Shocking Turn of Events: Biden Endorses Trump',
        time:'4d ago',
        reader:'2,023,009',
        author:'Winblad Bengt', 
        text:'In a stunning turn of events, President Joe Biden shocked the political world today by publicly endorsing former President Donald Trump for a second term. During a press conference that began with Biden attempting to explain the intricacies of his latest infrastructure plan, he suddenly veered off-script. "Look, folks, you know... there is this thing, this...this guy. You all know him. What was his name again? Oh right, Donald. Hes...hes got a lot of energy. You gotta hand it to him, no one can tweet like that guy. Just incredible. He can even carry his own bag for golf. Incredible.” Biden went on to praise Trumps commitment to waking up early. "I mean, the mans up at 4 a.m., firing off those tweets. I barely get my coffee going at that hour. Thats impressive, folks. Tremendous stamina... or something." When asked about how this endorsement fits into the future of the Democratic Party, Biden shrugged. "Listen, at this point, why not? I have had my turn. Lets mix it up. Maybe we will finally find out what that covid thing was all about." Trump, in response, tweeted, "Even Sleepy Joe knows it”NO ONE CAN BEAT TRUMP!!" followed by a GIF of himself riding a bald eagle. Both parties are reportedly deeply confused but intrigued to see where this plot twist will go.'
      },{
        title:'OP-ED: Who actually won the VP debate?',
        time:'1w ago',
        reader:'590,962',
        author:'Kim Kardashian', 
        text:'In the wake of the recent Vice Presidential debate, political analysts, pundits, and your overly opinionated relative are in full agreement: no one knows who actually won. And frankly, does it even matter? The highly anticipated face-off between Tim Walz and JD Vance was full of the typical political jargon, polite smirks, and more sidestepping than a game of Twister at a retirement home. But who actually walked away victorious? Winner: The Moderators. Patience If anyone deserves a gold medal for last night, it is the moderators, who somehow kept their cool despite being hit with more evasive maneuvers than Andy Dufresne in the Shawshank Redemption. But, what do the voters think? Polling after the debate showed a wide range of reactions: 30% of viewers said Tim Walz won because he looked like a nice and approachable grandpa when he smiled. 28% said JD Vance won because he gave the impression that he has the potential to know who actually won the 2020 election. 40% of Americans, including me, said they tuned out after 15 minutes to watch Shohei Ohtani cook in the playoffs, and somehow that won the debate. That last 1%? Don’t ask me. I don’t fucking know. Who Really Won? The answer is simple: the snack industry. No matter who you think dominated the conversation, the real victor of the evening was the person who brought the best snacks. Chips, popcorn, and that weird hummus your friend brought all won by a landslide. In the end, we can all agree on one thing: the real debate winner was the person who did not watch the post-debate analysis.'
      },{
        title:'The New Splash Brothers: Dynamic Father-Son Duo',
        time:'1h ago',
        reader:'39,239',
        author:'Noah Lyles', 
        text:'The long-awaited moment basketball fans have been waiting for finally arrived: LeBron James and his son Bronny James shared the court as teammates for the first time. The game began with LeBron, now in his 74th season in the NBA (or so it feels), insisting on running the pregame warm-up drill himself, making Bronny do push-ups for "not making enough Tacos for him last Tuesday.” Bronny, meanwhile, rolled his eyes in that universal teen way that says, Dad, please stop embarrassing me in front of the guys. Once the game tipped off, things got even more intense real quick. JJ Redick, new L.A. Lakers coach, opened with his new play: "Get Out of the Way, Daddy Got This." On his first possession, LeBron did what any dad would do: show off. He hit Bronny with a behind-the-back pass, followed by a no-look alley-oop that would have been epic had Bronny not been mid-Snapchat at the time. “My girl hit me up. I had to snap her back“ Bronny explained. Still, once Bronny got in the groove, the father-son duo began running the court like a swimming pool trampoline dunk contest. LeBron kept yelling "Lets run that play I taught you in 2001!” to which Bronny replied, "That was before I was born, Dad." When Bronny hit a three-pointer, LeBron clapped way too hard from the bench and shouted, THATS MY BOY! in a way that caused Bronny to ask if he could be traded at halftime. Still, the chemistry was undeniable. On one fast break, Bronny lobbed an alley-oop to LeBron, who dunked it with a ferocity that screamed, I can still do this, dammit. Bronnys reaction? Putting his hand over his face, embarrassed by his Dad, before going back to plotting his next Twitch stream. After the game, LeBron spoke to the press with his arm around Bronny. "Playing with my son tonight was a dream come true," he said, smiling. "Sure, I had to remind him to pass me the ball a few times, but he is learning. Next step: doing the goddamn chores when I tell him. Bronny, standing beside him, sighed, I get it, Dad. You are the GOAT. Can I go play Fortnite now with Bryce? As the final buzzer sounded, one thing was clear: the future of basketball might just be in Bronnys… dad, LeBrons hands.'
      },{
        title:'Impending Doom: Stat110',
        time:'Right fucking now',
        reader:'19,239',
        author:'Me', 
        text:'CAMBRIDGE, MA â€“ The air was thick with anxiety as Harvard students filed into their Stat 110 midterm, a test known not only for its probability questions, but also for breaking the spirits of even the most overachieving freshmen. "I thought I was ready," sighed Sponge Bob, a sophomore, who had spent weeks rewatching every lecture video at 2x speed, hoping to compress the suffering. "I even dreamed about solving probability equations. But the first question? It asked me to calculate the probability of me passing this class. The answer was zero." The exam itself was a journey. Question 1: What is the probability that you will open this exam and not instantly regret your life choices? Assume a fair coin flip. A 50/50 chance?  Question 2: Given that a student has not slept in 72 hours and consumed 13 Red Bulls, what is the probability that they will be able to correctly identify the difference between a Bernoulli trial and a burrito order at El Jefes?  Question 3 was a trick question: Calculate the probability that Joe will admit the exam was too hard. Throughout the exam hall, there were audible groans as students encountered a problem that asked them to derive the probability that you will ever use this in real life. It was followed by a bonus question asking, What is the probability that your Stat 110 midterm will be used as a cautionary tale for future generations? One brave soul, after several minutes of staring blankly at a problem about conditional probability and Bayes, began to write a heartfelt note to future generations of Stat 110 survivors. "If you are reading this in the year 2050, know that we tried, but some of us did not make it. Tell my family I love them." When the exam ended, one student confidently declared, "I feel pretty good, I just picked C for everything I did not know." His friend looked at him, wide-eyed, and said, Dude... it was all free response. Another said, somewhere in the test was Central Cee…, Central Limit Theorem I think.'
      }
    ],
    gameList:[
      {
        img:'./images/icon-right-game.png',
        title:'Balls',
        subTitle:'Fastest Licker Wins'
      },{
        img:'./images/icon-right-game.png',
        title:'Yes',
        subTitle:'Scream "Yes" the Loudest'
      },{
        img:'./images/icon-right-game.png',
        title:'?',
        subTitle:'Findout?'
      }
    ],

    detailsData:{},
    showDetails:false, 
    isMenuNum:0
  }, 
  created(){
    this.storiesListShow = this.storiesList.slice(0, 5)
  },
  computed: {  
    imageStyle() {  
      return {  
        transform: this.storiesMore ? 'rotate(180deg)' : 'rotate(0deg)',  
        transition: 'transform 0.3s ease', // 
      };  
    },  
  },  
  methods: {
    // showMoreStories
    showMoreStories(){
      this.storiesMore = !this.storiesMore
      this.storiesMore ? this.storiesListShow = this.storiesList : this.storiesListShow =this.storiesList.slice(0, 5)    
    },
    // openDetails
    openDetails(i){
      this.isMenuNum = -1
      this.detailsData = i
      this.showDetails = true
    },
    // doMenu
    doMenu(index){
      this.showDetails = false
      this.isMenuNum = index
    },
    // doGame
    openGame(){ 
      this.showDetails = false
      this.isMenuNum = index
    },
    // doLike
    doLike(index,i){ 
      this.articleList[index].interactArr['isLike'] = !i
      this.articleList[index].interactArr['isLike'] ? this.articleList[index].interactArr['like'] = (this.articleList[index].interactArr['like']+1) : this.articleList[index].interactArr['like'] = (this.articleList[index].interactArr['like']-1)
    } 

  }
})