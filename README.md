# project-0
🎮 A game made as part of WDI27 in London

## How to install:
* Download or clone the repo
* _npm i_ to install dependencies
* _gulp_ to compile the source code and open in browser
* Note: You'll need to have _gulp-cli_ installed globally _npm i -g gulp-cli_
* the game is deployed on Heroku too (http://safe-ravine-55690.herokuapp.com/)

## Description
Fun battle game, where instead of sophisticated weapons, you can just slap the opponent. 
Your hit is depending on accuracy points - if Math.random for the round is less, you hit the opponent, if more - it's a miss. 
Who reaches 0 points of life first - looses the game!

* Choice Screen

![Choice screen](https://s8.postimg.org/x0oqt1wb9/Screen_Shot_2017-05-25_at_21.52.56.png)

* Battle Screen

![Battle screen](https://s10.postimg.org/72n78xk7d/Screen_Shot_2017-05-25_at_21.57.14.png)

## Technologies used:
* HTML 5
* CSS animations
* SCSS
* jQuery 3.10
* Gulp
* NPM
* Git & github

## Challenges faced:
* How to coordinate the choices board with the array of characters - it was too painful to change everything in JS and then in HTML file too. => Created the choice board in JS, so the characters are directly taken from there. No need check if values are corresponding!
* Namespacing - as I wasn't very familiar with this concept. Thanks to people around I managed to do it though and it works! 

## Improvements:
* Improve overall styling
* Add extra features, apart from basic options like Attack/WarCry/Defend
