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


## Owner Buisness Story
<hr>
 The value of the buisness is simplicity and entertainment.


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
No images were used.

## Favicon
* Created via https://favicon.io/


## Features
<hr>

The website contains 3 sections within the index.html (main website). There is only 1 other html file called 404.html which is used for mistyped urls. All styling is maintained in a single CSS file. 

**Header**
- Header holds a heading for the whole page which reads 'The Meditation Club'.
- Dark coloured and has a specific modern font to make it stand out.
- The logo is linked to the home page which is the index.html page.

![Header-navbar](/readme-resources/images/Header-and-nav-bar.png)

**Navigation Bar**
- Navigation bar is in middle of page.
- When hovering over links on nav bar the specific item is underlined.
- Links to about section, timetable section and signup section. 
- Font contrasts with background which is off-white. It's in a simple but modern text.
- Fully responsive with diffrent devices. Easily done as it's in the center of page.
- The Nav bar is also on the 404 error page.

![Header-navbar](/readme-resources/images/Header-and-nav-bar.png)

**Landing Page**
- Landing page shows a picture of a women meditating which covers most of the page.
- Text is also over the image. The text is a means of claryfing what the website is about.
- Opacity set on image to make text stand out and easier to read.
- Text and image responsive to diffrent devices.

![main-image](/readme-resources/images/main-image.png)

**About Section**
- The about section covers what the club is about and what is included.
- This section breaks down the club into 4 parts. 
- Each section of the 4 has a header which breaks down the topic then a sentance to describe and a image for aesthetic.
- This section gives the viewer the essence of the meditation club.
- Again this section is responsive to tablets and mobiles too.

![about](/readme-resources/images/about.png)

**Timetable Section**
- The timetable section has a diffrent colour which stands out amongst the rest of the site to attract the viewers attention. 
- The writing is dark and the table is beige with offwhite lines breaking it up. 
- The timetable displays all days of the week with their respective events, who they are instructed by and what time. 
- The table is responsive to all devices. 

![timetable](/readme-resources/images/timetable.png)


**Sign Up Section**

- The signup section has a header with beige writing and a black background to contrast the offwhite background of the website. This makes it easy of users to identify the signup section.
- This section has a form for visitors to sign up with a submit button. 
- The signup form includes first name, last name, email and number. 
- The styling of the form is to have a dark box and beige border at bottom to keep the website consistent. 
- When the submit button is clicked or hovered over the button turns black.
- Responsive to mobile and tablet.

![signup](/readme-resources/images/signup.png)

**Footer**
- The footer has 4 social media icons. 
- Each social media icon is clickable and should go to the respective social media site. 
- All icons are stick with the same colour scheme of offwhite background and dark in color.
- Responsive to mobile and tablet.

![footer](/readme-resources/images/footer.png)

**404 Error page**
- The 404 error page is a single HTML file which includes the logo which is the same as the logo on the main website which links to the main site when clicked.
- It includes a functional nav bar which goes with the theme of the site. 
- Then an image of 4 rocks stacked ontop of eachother which is a common meditation image.

![404](/readme-resources/images/error-page.png)

## Future Implementations
<hr>

- Built in class schedule system which lets customers confirm attendance.
- Multiple pages - Go into more detail of the 4 pillars of the meditation club in a detailed about page. 
- Pictures and videos from events.


## Technology Used
<hr>

1. HTML5 - Markup language for structure.
2. CSS3 - Styling language.
3. Font Awesome - Icons
4. Google Fonts - Fonts
5. Github - Hosted platform for website.
6. Git - Version control system.
7. Gitpod - IDE
9. Google - Research platform.




## Testing
<hr>

### Functionality/Compatibility Testing

For functionality testing I tested my website in all diffrent sizes in chrome, firefox and safari. 

In chrome the site looked just fine on all devices.

- Used dev tools to check everything works with diffrent screen sizes. all seemed to be fine. 
- All areas have great contrast and seem to be easy to see.
- Form works fine and submit button works. Did find a bug with the hover function of the button being out of place. Fixed below in bugs section.

However in Safari and firefox all looked fine apart from the nav bar font which looked slightly thinner then usual. This was the same accross all device sizes.

![safari-blurry](/readme-resources/images/safari-blurry.png)

Result: After speaking with external help (tutors) We came to a conclusion as it's just the way the browsers render. Possible change of font could fix in the future. 


### Code Validator Testing

 [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
 [W3C HTML Validator](https://validator.w3.org/) 

 ### SEO Testing

 Below are screenshots taken from the chrome dev tools lighthouse function to evaluate SEO of the website.

SEO testing desktop:
![desktop-seo](/readme-resources/images/desktop-seo.png)

SEO testing mobile:
![mobile-seo](/readme-resources/images/mobile-seo.png)

## Bugs
<hr>

Hover bug:
- When hovering over the submit button it is the correct colour, just the button is out of place. 

Before hover:

![signup](/readme-resources/images/signup.png)

After Hover: 

![submit-hover-bug](/readme-resources/images/submit-hover-bug.png)

**Solved Bugs**

Hover Bug:

Removed from #submit-button:hover:
margin-top: 5%;
padding: 1% 1%;


added to #submit-button:hover:
display: block;
margin: 1% auto;

- I must have missed this when adjusting the submit button code in css. 

![hover-bug-fix](/readme-resources/images/hover-bug-fix.png)



## Deployment

To deploy Github the steps I took are below:

1. Log into your Github account.
2. Go to your repositories
3. Click on your project (e.g the-meditation-club)
4. Click settings which should be in the middle of the page.
5. on the left side under 'Code and automation', you should find a tab called pages. Click this tab.
6. Branch should say main and folder should say root. Click save. 
7. It then should say 'Your site is being published at "Here would be your url for site"

Published url: [https://pritenmakwana44.github.io/the-meditation-club/](https://pritenmakwana44.github.io/the-meditation-club/)

To run locally:
1. Log into your Github account.
2. Go to your repositories
3. Click on your project (e.g the-meditation-club)
4. Click 'code' then 'Download ZIP' Or if you use Gitpod you should see a Gitpod button next to code to deploy.
5. Once you download the zip you should then be able to run the project locally.



## Credit
**Content**
* The social media code was taken from the Code Institute Love running project, but was styled slightly diffrently.
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

**Media**
* All images were taken from Pexels




Happy coding!







help with player setup: https://www.youtube.com/watch?v=jaVNP3nIAv0
help with random number generator: https://www.w3schools.com/jsref/jsref_random.asp

help with template literals: https://wesbos.com/template-strings-html
https://www.codegrepper.com/code-examples/html/how+to+display+javascript+variable+value+in+html+page

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

event listener: https://www.w3schools.com/js/js_htmldom_eventlistener.asp
code ideas: https://sebhastian.com/rock-paper-scissors-javascript/
https://www.geeksforgeeks.org/rock-paper-and-scissor-game-using-javascript/
https://javascript.plainenglish.io/building-a-rock-paper-scissors-game-with-javascript-bce23d39509d

get scoreboard working:

https://stackoverflow.com/questions/20089473/how-to-output-a-javascript-variable-into-an-html-div

redirect to website if condition is met:
https://www.javascripttutorial.net/javascript-bom/javascript-redirect/

button help: https://www.w3schools.com/howto/howto_css_animate_buttons.asp

code ideas: https://github.com/Abhi-Develops/rock-paper-scissors/blob/main/app.js

favicon - https://favicon.io/emoji-favicons/victory-hand