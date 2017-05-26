var game = game || {};
//global variables for storing the game data
game.playerName;
game.playerChosen;
game.villianChosen;
game.playerLife = 20;
game.villianLife = 20;
game.turn = true;
game.roundText;
game.round = 1;
game.score = 0;
game.highScore = localStorage.getItem('highScore') || 0;

//array of characters (in objects)
game.characters = [
  {
    name: 'Nick the Cat',
    image: 'public/assets/images/player1.gif',
    attack: 4,
    currentAttack: 4,
    warCry: 3,
    defend: 4,
    accuracy: 0.5,
    currentAccuracy: 0.5
  },
  {
    name: 'Ellen Ripley',
    image: 'public/assets/images/player2.gif',
    attack: 5,
    currentAttack: 5,
    warCry: 2,
    defend: 5,
    accuracy: 0.5,
    currentAccuracy: 0.5
  },
  {
    name: 'Catzilla',
    image: 'public/assets/images/player3.gif',
    attack: 4,
    currentAttack: 4,
    warCry: 5,
    defend: 2,
    accuracy: 0.5,
    currentAccuracy: 0.5
  }
];

//array of villians in objects
game.villians = [
  {
    name: 'Henry the Hoover',
    image: 'public/assets/images/villian1.gif',
    attack: 5,
    accuracy: 0.3,
    currentAccuracy: 0.3
  },
  {
    name: 'Xenomorph',
    image: 'public/assets/images/villian2.gif',
    attack: 5,
    accuracy: 0.3,
    currentAccuracy: 0.3
  },
  {
    name: 'Pink Medusa',
    image: 'public/assets/images/villian3.gif',
    attack: 5,
    accuracy: 0.3,
    currentAccuracy: 0.3
  }
];

//display instructions
game.hideWindow1 = function hideWindow1(){
  this.$instructions.removeClass('hidden').addClass('animated fadeIn');
  this.$welcome.addClass('hidden');
};

//go back to the main screen
game.hideWindow2 = function hideWindow2(){
  this.$instructions.addClass('hidden').removeClass('animated fadeIn');
  this.$welcome.removeClass('hidden').addClass('animated fadeIn');
};

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

//display the choices of characters screen
game.goToChoiceScreen = function goToChoiceScreen(){
  this.$welcome.addClass('hidden');
  this.$characterScreen.removeClass('hidden').addClass('animated fadeIn');
  this.createChoices();
};

//select the character by clicking on one of the divs
game.selectCharacter = function selectCharacter(e){
  $(e.currentTarget).addClass('active').siblings().removeClass('active');
  const id = $(e.currentTarget).attr('data-id');
  //if no character was clicked, user cannot proceed. Button will remain disabled
  if(id){
    this.$startBtn.attr('disabled', false).addClass('animated infinite pulse');
  }
  this.playerChosen = this.characters[id];
  //assign the villian (same data-id as character)
  this.villianChosen = this.villians[id];
  this.$playerImg.attr('src', this.playerChosen.image);
  $(this.$hexagon).css('background-image', `url(${this.playerChosen.image})`);
  this.$villianImg.attr('src', this.villianChosen.image);
  this.$villianName.text(this.villianChosen.name);
  this.$villianAttack.text(this.villianChosen.attack);
};

//confirm the choice of character and proceed to the next screen
game.toTheGame = function toTheGame(){
  this.$characterScreen.addClass('hidden');
  this.$chosenCharacter.removeClass('hidden').addClass('animated fadeIn');
};

//get the name of the player and display in the game panel
game.getTheName = function getTheName(e){
  this.playerName = $(e.currentTarget).val();
  //if name not provided - do not allow to proceed. Button will remeain disabled
  if (this.playerName.length !== 0){
    this.$kickOffBtn.attr('disabled', false).addClass('animated infinite pulse');
  }
  this.$playerName.text(this.playerName);
};

//start the game
game.startTheGame = function startTheGame(){
  this.$chosenCharacter.addClass('hidden');
  this.$gameWindow.removeClass('hidden').addClass('animated fadeIn');
  this.$highScore.text(this.highScore);
  //the below functions have interval of 0.5s in order to get updated data
  setInterval(() => {
    this.displayHealth();
    this.displayScore();
    this.displayRound();
    this.displayCurrentAttack();
    this.displayAccuracy();
  }, 500);
};

//function to update the highscore
game.updateHighScore = function updateHighScore(){
  this.highScore = this.score > this.highScore ? this.score : this.highScore;
  this.$highScore.text(this.highScore);
};

//function to display health points
game.displayHealth = function displayHealth(){
  this.$playerLife.html(this.playerLife);
  this.$villianLife.html(this.villianLife);
};

//function to display accuracy of the players
game.displayAccuracy = function displayAccuracy(){
  this.$playerCurrAccuracy.html(this.playerChosen.currentAccuracy.toFixed(2));
  this.$villianCurrAccuracy.html(this.villianChosen.currentAccuracy.toFixed(2));
};

//function to display round of the game
game.displayRound = function displayRound(){
  this.$roundNumber.text(`${this.round}`);
};

//function to display current attack of the player
game.displayCurrentAttack = function displayCurrentAttack(){
  this.$playerCurrentAttack.text(this.playerChosen.currentAttack);
};

//function to display score for the game
game.displayScore = function displayScore(){
  this.$score.html(this.score);
};

//function to update the text shown below for the result of the turn
game.turnResultText = function turnResultText(){
  this.$turnResult.text(`${this.roundText}`);
};

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
    //once the player's round is finished, opponent attacks
    setTimeout(() => {
      this.attackPlayer();
    }, 3000);
  }
};

//function for attacking the player, triggered by attackVillian function
game.attackPlayer = function attackPlayer(){
  if(this.turn === false){
    //if math.random is less than accuracy, opponent hits the player
    if(Math.random() < this.villianChosen.currentAccuracy){
      //substract attack points from player's life points
      this.playerLife -= this.villianChosen.attack;
      this.roundText = 'He hit you!';
      this.$punchAudio.play();
      this.$playerImg.addClass('animated shake');
    } else{
      //if math.random is more than accuracy, opponent cannot hit the player
      this.$swooshAudio2.play();
      this.roundText = 'You are safe!';
    }
    this.$villianImg.removeClass('animated shake');
    this.turnResultText();
    this.checkForWinner();
    //turn goes back to the player
    this.turn = true;
    setTimeout(() => {
      this.whoseTurn();
    },1000);
  }
};

//function for defending
game.defend = function defend(){
  this.$turnResult.text('You have used defend');
  this.$playerImg.removeClass('animated shake');
  this.turn = false;
  this.whoseTurn();
  //if opponent can successfully attack player, deduct player's defend points from opponent's attack points (for one round)
  this.villianChosen.attack -= this.playerChosen.defend;
  //opponent attacks
  setTimeout(() => {
    this.attackPlayer();
    this.villianChosen.attack += this.playerChosen.defend;
  }, 2000);
};

//function for warCry
game.warCry = function warCry(){
  //depending on the player's character, play various audios
  if (this.playerChosen.name === 'Nick the Cat'){
    this.$meow.play();
  } else if (this.playerChosen.name === 'Catzilla'){
    this.$roar.play();
  } else if (this.playerChosen.name === 'Ellen Ripley'){
    this.$getAway.play();
  }
  this.$playerImg.removeClass('animated shake');
  this.$turnResult.text('You have used WarCry');
  //player is missing his/her turn, in order to have his attack points increased by warCry points for the next round only
  this.turn = false;
  this.whoseTurn();
  this.playerChosen.currentAttack += this.playerChosen.warCry;
  //opponent attacks
  setTimeout(() => {
    this.attackPlayer();
  }, 2000);
};

//check if any of users have reached 0 points of life
game.checkForWinner = function checkForWinner(){
  //if this is the player - game over screen follows
  if (this.playerLife <= 0){
    this.$gameOverAudio.play();
    this.gameOver();
  }
  //if this is the opponent - player goes to the next round
  if(this.villianLife <= 0){
    this.villianLife = 0;
    this.$roundMessage.text('You won this round!!! Ta-da!!').css({'color': '#204215', 'font-size': '28px'});
    this.$levelUpAudio.play();
    this.turn = true;
    setTimeout(() => {
      this.nextRound();
    }, 2000);
  }
};

//function to visually display whose turn it is. If this is player's turn - player's image will have a green border.
game.whoseTurn = function whoseTurn(){
  if (this.turn === false){
    this.$playerImg.removeClass('img-active');
  }
  if (this.turn === true){
    this.$playerImg.addClass('img-active');
  }
};

//function to start the next round
game.nextRound = function nextRound(){
  //accuracy for both players is increased
  this.playerChosen.currentAccuracy += 0.01;
  this.villianChosen.currentAccuracy += 0.05;
  //round number increased
  this.round += 1;
  //life points coming back to original amount, with a bonus for the player
  this.villianLife = 20;
  this.playerLife = 20  + game.round;
  this.roundText = '';
  this.$roundMessage.text('');
  this.turnResultText();
  this.whoseTurn();

};

//if game is finished, show the game over screen
game.gameOver = function gameOver(){
  localStorage.setItem('highScore', this.highScore);
  this.$gameWindow.addClass('hidden');
  this.$gameOverScreen.removeClass('hidden').addClass('animated fadeIn');
  this.resetData();
};

//reseting all data after end of the game
game.resetData = function resetData(){
  this.roundText = '';
  this.turnResultText();
  this.playerLife = 20;
  this.villianLife = 20;
  this.round = 1;
  this.score = 0;
  this.playerChosen.currentAttack = this.playerChosen.attack;
  this.playerChosen.currentAccuracy = this.playerChosen.accuracy;
  this.villianChosen.currentAccuracy = this.villianChosen.accuracy;
  this.turn = true;
  this.$choices.empty();
  (this.$villianImg, this.$playerImg).removeClass('animated shake');
  (this.$kickOffBtn, this.$startBtn).removeClass('animated infinite pulse');
};

//if in game over screen user decides to play again
game.newGame = function newGame(){
  this.$gameOverScreen.addClass('hidden');
  this.startTheGame();
};

//if in game over screen user decides not to play again
game.backToMenu = function backToMenu(){
  this.$gameOverScreen.addClass('hidden');
  this.$welcome.removeClass('hidden').addClass('animated fadeIn');
};

//setup function with all DOM variables and click events
game.setup = function setup() {
  this.$instructions = $('.instructions');
  this.$instructionsBtn = $('#instructions');
  this.$welcome = $('.welcome');
  this.$backBtn = $('#back');
  this.$playBtn = $('#play');
  this.$characterScreen = $('.character-screen');
  this.$choices = $('.choices');
  this.$name = $('.name');
  this.$startBtn = $('#start');
  this.$chosenCharacter = $('.chosen-character');
  this.$gameWindow = $('.game-window');
  this.$kickOffBtn = $('#kick-off');
  this.$gameOverScreen = $('.game-over');
  this.$attack = $('#attack');
  this.$warCry = $('#warcry');
  this.$defend = $('#defend');
  this.$newGame = $('#new-game');
  this.$backToMenu = $('#back-to-menu');
  this.$score = $('#player-score');
  this.$highScore = $('.high-score');
  this.$slapAudio = $('audio')[0];
  this.$punchAudio = $('audio')[1];
  this.$swooshAudio = $('audio')[2];
  this.$swooshAudio2 = $('audio')[3];
  this.$gameOverAudio = $('audio')[4];
  this.$levelUpAudio = $('audio')[5];
  this.$meow = $('audio')[6];
  this.$roar = $('audio')[7];
  this.$getAway = $('audio')[8];
  this.$playerName = $('.player-name');
  this.$playerImg = $('.player-img');
  this.$playerChosenImg = $('.chosen-character img');
  this.$hexagon = $('.hexagon');
  this.$playerLife = $('#player-life');
  this.$playerCurrentAttack = $('#player-current-attack');
  this.$playerCurrAccuracy = $('#player-current-accuracy');
  this.$villianCurrAccuracy = $('#villian-current-accuracy');
  this.$villianImg = $('.villian-img');
  this.$villianName = $('.villian-name');
  this.$villianLife = $('#villian-life');
  this.$villianAttack = $('#villian-attack');
  this.$turnResult = $('#turn-result');
  this.$roundNumber = $('#round-no');
  this.$roundMessage = $('#round-message');

  this.$instructionsBtn.on('click', this.hideWindow1.bind(this));
  this.$backBtn.on('click', this.hideWindow2.bind(this));
  this.$playBtn.on('click', this.goToChoiceScreen.bind(this));
  this.$startBtn.on('click', this.toTheGame.bind(this));
  this.$name.on('keyup', this.getTheName.bind(this));
  this.$choices.on('click', '.character', this.selectCharacter.bind(this));
  this.$kickOffBtn.on('click', this.startTheGame.bind(this));
  this.$attack.on('click', this.attackVillian.bind(this));
  this.$warCry.on('click', this.warCry.bind(this));
  this.$defend.on('click', this.defend.bind(this));
  this.$newGame.on('click', this.newGame.bind(this));
  this.$backToMenu.on('click', this.backToMenu.bind(this));
};

$(game.setup.bind(game));
