var game = game || {};

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

game.hideWindow1 = function hideWindow1(){
  this.$instructions.removeClass('hidden').addClass('animated fadeIn');
  this.$welcome.addClass('hidden');
};

game.hideWindow2 = function hideWindow2(){
  this.$instructions.addClass('hidden').removeClass('animated fadeIn');
  this.$welcome.removeClass('hidden').addClass('animated fadeIn');
};

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

game.goToChoiceScreen = function goToChoiceScreen(){
  this.$welcome.addClass('hidden');
  this.$characterScreen.removeClass('hidden').addClass('animated fadeIn');
  this.createChoices();
};

game.toTheGame = function toTheGame(){
  this.$characterScreen.addClass('hidden');
  this.$chosenCharacter.removeClass('hidden').addClass('animated fadeIn');
};

game.startTheGame = function startTheGame(){
  this.$chosenCharacter.addClass('hidden');
  this.$gameWindow.removeClass('hidden').addClass('animated fadeIn');
  this.$highScore.text(this.highScore);
  setInterval(() => {
    this.displayHealth();
    this.displayScore();
    this.displayRound();
    this.displayCurrentAttack();
    this.displayAccuracy();
  }, 500);
};
game.updateHighScore = function updateHighScore(){
  this.highScore = this.score > this.highScore ? this.score : this.highScore;
  this.$highScore.text(this.highScore);
};

game.getTheName = function getTheName(e){
  this.playerName = $(e.currentTarget).val();
  if (this.playerName.length !== 0){
    this.$kickOffBtn.attr('disabled', false).addClass('animated infinite pulse');
  }
  this.$playerName.text(this.playerName);
};

game.selectCharacter = function selectCharacter(e){
  $(e.currentTarget).addClass('active').siblings().removeClass('active');
  const id = $(e.currentTarget).attr('data-id');
  if(id){
    this.$startBtn.attr('disabled', false).addClass('animated infinite pulse');
  }
  this.playerChosen = this.characters[id];
  this.villianChosen = this.villians[id];

  this.$playerImg.attr('src', this.playerChosen.image);
  $(this.$hexagon).css('background-image', `url(${this.playerChosen.image})`);
  this.$villianImg.attr('src', this.villianChosen.image);
  this.$villianName.text(this.villianChosen.name);
  this.$villianAttack.text(this.villianChosen.attack);
};

game.displayHealth = function displayHealth(){
  this.$playerLife.html(this.playerLife);
  this.$villianLife.html(this.villianLife);
};

game.displayAccuracy = function displayAccuracy(){
  this.$playerCurrAccuracy.html(this.playerChosen.currentAccuracy.toFixed(2));
  this.$villianCurrAccuracy.html(this.villianChosen.currentAccuracy.toFixed(2));
};

game.displayRound = function displayRound(){
  this.$roundNumber.text(`${this.round}`);
};

game.displayCurrentAttack = function displayCurrentAttack(){
  this.$playerCurrentAttack.text(this.playerChosen.currentAttack);
};

game.displayScore = function displayScore(){
  this.$score.html(this.score);
};

game.turnResultText = function turnResultText(){
  this.$turnResult.text(`${this.roundText}`);
};

game.attackVillian = function attackVillian(){
  if(this.turn === true){
    if(Math.random() < this.playerChosen.currentAccuracy){
      this.villianLife -= this.playerChosen.currentAttack;
      this.score += this.playerChosen.currentAttack;
      this.roundText = 'You have hit him!';
      this.$villianImg.addClass('animated shake');
      this.$slapAudio.play();
    } else{
      this.$swooshAudio.play();
      this.roundText = 'Whooops! A miss...';
    }
    this.playerChosen.currentAttack = this.playerChosen.attack;
    this.turnResultText();
    this.$playerImg.removeClass('animated shake');
    this.turn = false;
    this.whoseTurn();
    this.checkForWinner();
    this.updateHighScore();
    setTimeout(() => {
      this.attackPlayer();
    }, 3000);
  }
};

game.attackPlayer = function attackPlayer(){
  if(this.turn === false){
    if(Math.random() < this.villianChosen.currentAccuracy){
      this.playerLife -= this.villianChosen.attack;
      this.roundText = 'He hit you!';
      this.$punchAudio.play();
      this.$playerImg.addClass('animated shake');
    } else{
      this.$swooshAudio2.play();
      this.roundText = 'You are safe!';
    }
    this.$villianImg.removeClass('animated shake');
    this.turnResultText();
    this.checkForWinner();
    this.turn = true;
    setTimeout(() => {
      this.whoseTurn();
    },1000);
  }
};

game.defend = function defend(){
  this.$turnResult.text('DEFEND!!!');
  this.turn = false;
  this.whoseTurn();
  this.villianChosen.attack -= this.playerChosen.defend;
  setTimeout(() => {
    this.attackPlayer();
    this.villianChosen.attack += this.playerChosen.defend;
  }, 2000);
};

game.warCry = function warCry(){
  if (this.playerChosen.name === 'Nick the Cat'){
    this.$meow.play();
  } else if (this.playerChosen.name === 'Catzilla'){
    this.$roar.play();
  } else if (this.playerChosen.name === 'Ellen Ripley'){
    this.$getAway.play();
  }
  this.$turnResult.text('You have used WarCry');
  this.turn = false;
  this.whoseTurn();
  this.playerChosen.currentAttack += this.playerChosen.warCry;
  setTimeout(() => {
    this.attackPlayer();
  }, 2000);
};

game.checkForWinner = function checkForWinner(){
  if (this.playerLife <= 0){
    this.$gameOverAudio.play();
    this.gameOver();
  }
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

game.whoseTurn = function whoseTurn(){
  if (this.turn === false){
    this.$playerImg.removeClass('img-active');
  }
  if (this.turn === true){
    this.$playerImg.addClass('img-active');
  }
};

game.nextRound = function nextRound(){
  this.playerChosen.currentAccuracy += 0.01;
  this.villianChosen.currentAccuracy += 0.05;
  this.round += 1;
  this.villianLife = 20;
  this.playerLife = 20  + game.round;
  this.roundText = '';
  this.$roundMessage.text('');
  this.turnResultText();
  this.whoseTurn();

};

game.gameOver = function gameOver(){
  localStorage.setItem('highScore', this.highScore);
  this.$gameWindow.addClass('hidden');
  this.$gameOverScreen.removeClass('hidden').addClass('animated fadeIn');
  this.resetData();
};

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

game.newGame = function newGame(){
  this.$gameOverScreen.addClass('hidden');
  this.startTheGame();
};

game.backToMenu = function backToMenu(){
  this.$gameOverScreen.addClass('hidden');
  this.$welcome.removeClass('hidden').addClass('animated fadeIn');
};

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
