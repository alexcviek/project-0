# project-0
🎮 A game made as part of WDI27 in London

## How to install:
* Download or clone the repo
* `npm i` or `yarn` to install dependencies
* `gulp` to compile the source code and open in browser
* the game is deployed on [Heroku](http://http://safe-ravine-55690.herokuapp.com/) too

## Description
It's a simple battle game, where instead of sophisticated weapons and tactics, you can just slap the opponent. Sounds fun, right?

The rules of the game are simple - slap the opponent and the opponent slaps you. Success is based on the accuracy (Math.random to the rescue), which is increased in every round, so are your life points. Whoever reaches 0 points first - is losing the game! Oh, before I forget - silly sounds are included!

This was my first project, basing only on Front End Technologies only. I have designed the game logic by myself and put the game in motion by jQuery and a bit of CSS Animations. This was also the first time I was using SASS and I loved the experience - everyhthing became easier!

As this was my first bigger project ever, I think this litte piece will always have a special place in my heart (_getting sentimental in 3...2...1_). I think it also shows perfectly, how powerful JavaScript is (_well_, after all I have used jQuery, but...) - I was only 2 weeks into studying JS and I have managed to build a game! Exciting times!

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
* First of all - have I mentioned what a gaming noob I am? My life so far was all about Monopoly and Settlers of Catan... It took me ages to come up with an idea, and as I like challenges - I had picked up something what I have never played before (_well done Alex, you like to complicate your life!!!_). After couple of conversations with people who helped me to understand how battle games work, I have came up with a logic of my little Mortal Kombat:

```
//function to attack the opponent

game.attackVillian = function attackVillian(){
  if(this.turn === true){

    //if math.random is less than accuracy, player hits the opponent

    if(Math.random() < this.playerChosen.currentAccuracy){

    //substract attack points from opponent's life points

      this.villianLife -= this.playerChosen.currentAttack;

      //add attack points towards the user's score

      this.score += this.playerChosen.currentAttack;
      this.roundText = 'You have hit him!';
      this.$villianImg.addClass('animated shake');
      this.$slapAudio.play();
    } else{

      //if math.random is more than accuracy, player cannot hit the opponent

      this.$swooshAudio.play();
      this.roundText = 'Whooops! A miss...';
    }

    //attack is coming back to its original amount, in case warCry was used

    this.playerChosen.currentAttack = this.playerChosen.attack;
    this.turnResultText();
    this.$playerImg.removeClass('animated shake');
    this.turn = false;
    this.whoseTurn();
    this.checkForWinner();
    this.updateHighScore();

    //once the player's round is finished, opponent attacks (looks quite similar to this function)

    setTimeout(() => {
      this.attackPlayer();
    }, 3000);
  }
};

```

* How to coordinate the choices board with the array of characters - it was too painful to change everything in JS and then in HTML file too. => Created the choice board in JS, so the characters are directly taken from there. No need check if values are corresponding!

```

//function to create divs with characters to choose from, taken from array of objects

game.createChoices = function createChoices(){
  for(let i = 0; i < this.characters.length; i++){
    const content = `
    <div class="character" data-id=${i}>
    <img src="${this.characters[i].image}">
    <p class="underlined">${this.characters[i].name}</p>
    <p>Attack: ${this.characters[i].attack}</p>
    <p>WarCry: ${this.characters[i].warCry}</p>
    <p>Defend: ${this.characters[i].defend}</p>
    <p>Accuracy: ${this.characters[i].accuracy}</p>
    </div>
    `;
    this.$choices.append(content);
  }
};

```
(_This is neat, maybe not a cutting edge tech and rocket science, but I remember this was a pretty big victory!_)

* Namespacing - as I wasn't very familiar with this concept. Thanks to people around I managed to do it though and it works!

## Improvements:
* Improve overall styling - the game was made in pure CSS, no frameworks like Bootstrap, Materlialize or Bulma were used. While some people condemn their usage, I think they are saving you quite a lot of time and nerves.
* Add extra features, apart from basic options like Attack/WarCry/Defend
