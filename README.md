# Rock,Paper,Scissors
## Javascript Essentials Project 2

![Responsive](/readme-resources/images/responsive.png)

Rock,paper,scissors is a game which is built using HTML,CSS and Javascript. The aim of the game is for the player to play against the computer in 10 rounds of intense rock,paper,scissors. If the player reaches 10 first then a html webpage is shown which indicates the player being the winner †hen asking if you would like to play again. Similar is shown if the game is tied or the computer wins.

The rules are simple: Rock beats Scissors, Scissors beats Paper, Paper beats Rock. First to 10 wins as explained above.

The website must be responsive, simple and easy to play.

[Link to my Website via Github pages](https://pritenmakwana44.github.io/rock-paper-scissors/)

# Contents
- [UX](#ux)
    - [Owner Buisness Goals](#owner-buisness-goals)
    - [Customer Goals](#customer-goals)
         - [New Customer Goals](#new-customer-goals)
         - [Returning Customer Goals](#returning-customer-goals)
    - [Owner Buisness Story](#owner-buisness-story)
    - [Customer Stories](#customer-stories)
       - [New Customer Story](#new-customer-story)
       - [Returning Customer Story](#returning-customer-story)
     - [Structure](#structure)
     - [Surface](#surface)
- [Features](#features)
- [Future Implementations](#future-implementations)
- [Technology Used](#technology-used)
- [Testing](#testing)
     - [Functionality/Compatibility Testing](#functionality-compatibility-testing)
     - [Code Validator Testing](#code-validator-testing)
     - [SEO Testing](#seo-testing)
- [Bugs](#bugs)
- [Deployment](#deployment)
- [Credit](#credit)

     
     


# UX
<hr>

## Owner Buisness Goals
The goal of this website is to entertain the visitor of the site with a series of best to 10 games of rock, paper scissors against the computer. Once they win, lose or tie they can then play again until they win!

## Player Goals
<hr>

### New Player Goals
1. New players must first be able to understand the rules of the game.
2. New players must straight away know what the game actually is. 
3. New players must easily be able to play the game on any device.


### Returning Player Goals
1. Returning players should be able to have a reminder of what the rules are.
2. Returning players must be able to play the game with no issues.


## Owner Buisness Story:
<hr>
1. The value of the buisness is simplicity and entertainment.
<hr>

## Customer Stories
<hr>

### New Player Story:
1. Rules must be clear
2. Must be simple to play
3. Must look good.


### Returning Player Story:
1. Must be easy to replay.


## Structure
<hr>

The structure of the website was to be clear and simple while still being modern. The website was to maintain this responsiveness from all devices.

## Surface
<hr>

## Fonts
* For All headings and body the font 'Indie Flower' was used with a backup of cursive.

## Colors

Colors were used in a mixture of ways. But the main colors used with in their structured way were:

* Font color: default black.
* Background color: default white.
* Button colour: beige.
* Rules area and button hover: #967969;

## Images
No images were used favicon images are below.

## Favicon
* Created via https://favicon.io/
* Exact icon is https://favicon.io/emoji-favicons/victory-hand



## Features
<hr>

The website contains 3 sections. First is the title section, second is the game section and last is the rules section. I purposely added no header or footer. But can be used in the future if needed. as it's a simple site I didn't think there was much need for either.

**Page load popup for rules**
- When the page is loaded there is an alert which tells the player what the rules. 
- The player then has to click okay to continue.


![Rules-popup](/readme-resources/images/pageloadalert.png)


**Headings section**
- Main and first heading holds the title which reads 'Rock, Paper, Scissors'.
- Next is a second heading which reads 'Can you beat me?'

![Headings](/readme-resources/images/headings.png)

**Games Area**
- There are 3 buttons which indicate Rock, paper, scissors. These are used to play the game.
- Underneath the buttons section is the player score. If the player wins the round the player score increments by 1 and turns green.
- Below the player score is the computer score. If the computer wins the round the computer score increments by 1 and turns red.
- If both computer and player scores are tied then both will turn blue. 
- Underneath the scores section is the round win indicator which shows if the round winner is player, computer or if it's tied. 
- First to win 10 rounds wins. There is a pop up on the screen and a redirection to another html page depending on win, lose or tie.

![Games-Area](/readme-resources/images/gamearea.png)

**Player/Computer win or tie page**
- When the player or computer reaches 10 wins then first an alert which says 'gameover - player/computer wins!'.
- If it's a tie the alert also activates.
- Once the alert comes up the player must click 'ok'.
- The you are redirected to a html site according to win, lose or tie. These are all seperate html files.
- Each page has a button if the player wants to play again.

![Player-win-alert](/readme-resources/images/gameoveralertplayerwins.png)
![Player-win-page](/readme-resources/images/playerwinhtml.png)
![computer-win-alert](/readme-resources/images/gameoveralertcomputerwins.png)
![computer-win-page](/readme-resources/images/computerwinshtml.png)
![Tie-game-alert](/readme-resources/images/tiegamealert.png)
![Tie-game-page](/readme-resources/images/tiehtml.png)

**Rules Section**
- This section is a reminder of the rules at the bottom of the screen which pairs with the alert on page load.

![Rules](/readme-resources/images/rulesarea.png)

**404 Error page**
- The 404 error page is an error page which includes a button to get to the correct page.

![404](/readme-resources/images/404errorpage.png)

## Future Implementations
<hr>

- Account creation with a scoreboard to keep count of the most wins players have.
- Facebook integration for players to sign in and compete with the the computer or other players. 
- More game modes like best to 3, 5 or 50.


## Technology Used
<hr>

1. HTML5 - Markup language for structure.
2. CSS3 - Styling language.
3. Google Fonts - Fonts
4. Github - Hosted platform for website.
5. Git - Version control system.
6. Gitpod - IDE
7. Google - Research platform.


## Testing
<hr>

### Functionality/Compatibility Testing

For functionality testing I tested my website in all diffrent sizes in chrome, firefox and safari. 

My project looked great on all browsers and were  responsive on mobile, tablet and desktop.


### Code Validator Testing

 [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
 
 [W3C HTML Validator](https://validator.w3.org/)
 
 [Jshint Validator](https://jshint.com/)


 ### SEO Testing

 Below are screenshots taken from the chrome dev tools lighthouse function to evaluate SEO of the website which includes all HTML sites.

SEO testing for main site desktop:
![main-desktop-seo](/readme-resources/images/indexseo.png)

SEO testing for main site mobile:
![main-mobile-seo](/readme-resources/images/indexseomobile.png)

SEO testing for Player win site desktop:
![playerwin-desktop-seo](/readme-resources/images/playerwinsseo.png)

SEO testing for Player win site mobile:
![playerwin-mobile-seo](/readme-resources/images/playerwinsseomobile.png)

SEO testing for Computer win site desktop:
![computerwin-desktop-seo](/readme-resources/images/computerwinsseo.png)

SEO testing for Computer win site mobile:
![computerwin-mobile-seo](/readme-resources/images/computerwinsseomobile.png)

SEO testing for Tie game site desktop:
![tiegame-desktop-seo](/readme-resources/images/tieseo.png)

SEO testing for Tie game site mobile:
![tiegame-mobile-seo](/readme-resources/images/tieseomobile.png)

SEO testing for 404 error site desktop:
![tiegame-desktop-seo](/readme-resources/images/404errorseo.png)

SEO testing for 404 error site mobile:
![tiegame-mobile-seo](/readme-resources/images/404errorseomobile.png)


## Bugs
<hr>

External html on Github bug:
- The bug was a case that the page redirects to the playerwin/computerwin/tie htmls not working on Github. These worked when tested on Gitpod via locations with root access e.g "location.href = "/playerwin.html";"

Here is the code in Javascript for function Gameover() before change:

function Gameover() {

    if (playerScore === 10) {
        alert('Gameover - Player Wins!');
        location.href = "/playerwin.html";
        resetScores();
    } else if (computerScore === 10) {
        alert('Gameover - Computer Wins!');
        location.href = "/computerwin.html";
        resetScores();
    } else if (computerScore === 10 && playerScore === 10) {
        alert('Gameover - Tie Game!');
        location.href = "/tie.html";
        resetScores();

    }

The error page looked like this:
![bug-error-redirect](/readme-resources/images/websiteredirectbug.png)

**Solved Bugs**

External html on Github bug:
- Fix was to specify root with with "rock-paper-scissors".

See below for code to fix.

function Gameover() {

    if (playerScore === 10) {
        alert('Gameover - Player Wins!');
        location.href = "/rock-paper-scissors/playerwin.html";
        resetScores();
    } else if (computerScore === 10) {
        alert('Gameover - Computer Wins!');
        location.href = "/rock-paper-scissors/computerwin.html";
        resetScores();
    } else if (computerScore === 10 && playerScore === 10) {
        alert('Gameover - Tie Game!');
        location.href = "/rock-paper-scissors/tie.html";
        resetScores();

    }


## Deployment

To deploy Github the steps I took are below:

1. Log into your Github account.
2. Go to your repositories
3. Click on your project (e.g rock-paper-scissors)
4. Click settings which should be in the middle of the page.
5. on the left side under 'Code and automation', you should find a tab called pages. Click this tab.
6. Branch should say main and folder should say root. Click save. 
7. It then should say 'Your site is being published at "Here would be your url for site"

Published url: [https://pritenmakwana44.github.io/rock-paper-scissors/](https://pritenmakwana44.github.io/rock-paper-scissors/)

To run locally:
1. Log into your Github account.
2. Go to your repositories
3. Click on your project (e.g rock-paper-scissors)
4. Click 'code' then 'Download ZIP' Or if you use Gitpod you should see a Gitpod button next to code to deploy.
5. Once you download the zip you should then be able to run the project locally.



## Credit
**Content**
* Sizing inspirtation was taken from the below link
[https://gist.github.com/gokulkrishh/242e68d1ee94ad05f488](https://gist.github.com/gokulkrishh/242e68d1ee94ad05f488)
* Styling code inspirtation was taken from:
[https://www.w3schools.com/howto/default.asp](https://www.w3schools.com/howto/default.asp)
* Much help was also taken from Stackoverflow when problems occured.
[https://stackoverflow.com/](https://stackoverflow.com/)
* For this readme I used the following as a template to create this readme.
[https://github.com/marcin-kli/MP1/blob/Milestone-Projects/README.md#compatibility-testing](https://github.com/marcin-kli/MP1/blob/Milestone-Projects/README.md#compatibility-testing)
* Github template was used for this project. 
[https://github.com/Code-Institute-Org/gitpod-full-template](https://github.com/Code-Institute-Org/gitpod-full-template)
* All research was done using Google. [www.google.com](www.google.com)

* For help with the player setup I used this youtube video.
[https://www.youtube.com/watch?v=jaVNP3nIAv0](https://www.youtube.com/watch?v=jaVNP3nIAv0)

* For help with the random number generator I used the following website.
[https://www.w3schools.com/jsref/jsref_random.](https://www.w3schools.com/jsref/jsref_random.)

* For help with template literals I used the following sites. This was to combine strings with variables.
[https://wesbos.com/template-strings-html](https://wesbos.com/template-strings-html)
[https://www.codegrepper.com/code-examples/html/how+to+display+javascript+variable+value+in+html+page](https://www.codegrepper.com/code-examples/html/how+to+display+javascript+variable+value+in+html+page)
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

* For help with event listeners. 
[https://www.w3schools.com/js/js_htmldom_eventlistener.asp](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)

* For help to get scoreboard working.
[https://stackoverflow.com/questions/20089473/how-to-output-a-javascript-variable-into-an-html-div](https://stackoverflow.com/questions/20089473/how-to-output-a-javascript-variable-into-an-html-div)

* For help to redirect to a website within a if statement.
[https://www.javascripttutorial.net/javascript-bom/javascript-redirect/](https://www.javascripttutorial.net/javascript-bom/javascript-redirect/)

* For button ideas.
[https://www.w3schools.com/howto/howto_css_animate_buttons.asp](https://www.w3schools.com/howto/howto_css_animate_buttons.asp)

* Fav icons were taken from the following.
[https://favicon.io/emoji-favicons/victory-hand](https://favicon.io/emoji-favicons/victory-hand).

* I used the following websits to get code ideas. None were copied but to get structure ideas of code I used these for inspirtation.
[https://sebhastian.com/rock-paper-scissors-javascript/](https://sebhastian.com/rock-paper-scissors-javascript/)
[https://www.geeksforgeeks.org/rock-paper-and-scissor-game-using-javascript/](https://www.geeksforgeeks.org/rock-paper-and-scissor-game-using-javascript/)
[https://javascript.plainenglish.io/building-a-rock-paper-scissors-game-with-javascript-bce23d39509d](https://javascript.plainenglish.io/building-a-rock-paper-scissors-game-with-javascript-bce23d39509d)
[https://github.com/Abhi-Develops/rock-paper-scissors/blob/main/app.js](https://github.com/Abhi-Develops/rock-paper-scissors/blob/main/app.js)








