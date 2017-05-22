$(() => {
  let playerName;
  let playerChosen;
  let villianChosen;
  let playerLife = 20;
  let villianLife = 20;
  let turn = true;
  let roundText;
  let round = 1;
  let score = 0;
  // const $highScore = $('.high-score');
  // let highScore = localStorage.getItem('highScore') || 0;
  // $highScore.text(highScore);

  const characters = {
    one: {
      name: 'Nick',
      image: 'public/assets/images/player1.gif',
      attack: 4,
      currentAttack: 4,
      warCry: 2,
      defend: 4,
      accuracy: 0.4
    },
    two: {
      name: 'Ellen',
      image: 'public/assets/images/player2.gif',
      attack: 10,
      currentAttack: 10,
      warCry: 5,
      defend: 5,
      accuracy: 0.7
    },
    three: {
      name: 'Mutant Nick',
      image: 'public/assets/images/player3.gif',
      attack: 6,
      currentAttack: 6,
      warCry: 1,
      defend: 2,
      accuracy: 0.5
    }
  };
  const villians = {
    one: {
      name: 'Henry',
      image: 'public/assets/images/villian3.jpg',
      attack: 5,
      accuracy: 0.5
    },
    two: {
      name: 'Xenomorph',
      image: 'public/assets/images/villian2.gif',
      attack: 3,
      accuracy: 0.3
    },
    three: {
      name: 'Medusa',
      image: 'public/assets/images/villian3.gif',
      attack: 4,
      accuracy: 0.56
    }
  };

  const $instructions = $('.instructions');
  const $instructionsBtn = $('#instructions');
  const $welcome = $('.welcome');
  const $backBtn = $('#back');
  const $playBtn = $('#play');
  const $characterScreen = $('.character-screen');
  const $character = $('.character');
  const $name = $('.name');
  const $startBtn = $('#start');
  const $chosenCharacter = $('.chosen-character');
  const $gameWindow = $('.game-window');
  const $kickOffBtn = $('#kick-off');
  const $gameOverScreen = $('.game-over');


  function hideWindow1(){
    $instructions.removeClass('hidden');
    $welcome.addClass('hidden');
  }
  function hideWindow2(){
    $instructions.addClass('hidden');
    $welcome.removeClass('hidden');
  }
  function goToChoiceScreen(){
    $welcome.addClass('hidden');
    $characterScreen.removeClass('hidden');
  }
  function toTheGame(){
    $characterScreen.addClass('hidden');
    $chosenCharacter.removeClass('hidden');
  }
  function startTheGame(){
    $chosenCharacter.addClass('hidden');
    $gameWindow.removeClass('hidden');
    displayHealth();
    displayScore();
    displayRound();
  }
  function getTheName(){
    playerName = $(this).val();
    if (playerName.length === 0){
      alert('You must provide your name');
    }
    $('#name').text(`Hello ${playerName}!`);
    $('.player1-name').text(playerName);
  }

  function selectCharacter(){
    $(this).addClass('active').siblings().removeClass('active');
    const id = $(this).attr('id');
    if(id){
      $startBtn.attr('disabled', false);
    }
    playerChosen = characters[id];
    villianChosen = villians[id];
    $('.chosen-character img, .player1').attr('src', playerChosen.image);
    $('.villian').attr('src', villianChosen.image);
    $('.villian-name').text(villianChosen.name);
  }
  function displayHealth(){
    setInterval(() => {
      $('#player-health').html(playerLife);
      $('#villian-score').html(villianLife);
    }, 500);
  }
  function displayRound(){
    setInterval(() => {
      $('#round-no').text(`Round ${round}`);
    }, 500);
  }
  function displayScore(){
    setInterval(() => {
      $('#player-score').html(score);
    }, 500);
  }

  function attackVillian(){
    if(turn === true){
      if(Math.random() < playerChosen.accuracy){
        console.log(playerChosen.currentAttack);
        villianLife -= playerChosen.currentAttack;
        playerChosen.currentAttack = playerChosen.attack;
        console.log(playerChosen.currentAttack);
        score += 5;
        roundText = 'You have hit him!';
      } else{
        roundText = 'Whooops! A miss...';
      }
      $('#battle-text').text(`${roundText}`);
      turn = false;
      whoseTurn();
      checkForWinner();
      setTimeout(() => {
        attackPlayer();
      }, 3000);
    }
  }
  function attackPlayer(){
    if(turn === false){
      if(Math.random() < villianChosen.accuracy){
        playerLife -= villianChosen.attack;
        roundText = 'He hit you!';
      } else{
        roundText = 'You are safe!';
      }
      $('#battle-text').text(`${roundText}`);
      checkForWinner();
      turn = true;
      whoseTurn();
    }
  }
  function defend(){
    turn = false;
    whoseTurn();
    villianChosen.attack -= playerChosen.defend;
    setTimeout(() => {
      attackPlayer();
      villianChosen.attack += playerChosen.defend;
    }, 2000);
  }
  function warCry(){
    turn = false;
    whoseTurn();
    playerChosen.currentAttack += playerChosen.warCry;
    setTimeout(() => {
      attackPlayer();
    }, 2000);
  }
  function checkForWinner(){
    if (playerLife <= 0){
      gameOver();
      turn = true;
    }
    if(villianLife <= 0){
      $('#winner').text('You won this round!!! Ta-da!!').css({'color': 'red', 'font-size': '30px'});
      turn = true;
      setTimeout(() => {
        nextRound();
      }, 2000);
    }
  }
  function whoseTurn(){
    if (turn === false){
      console.log('not your turn');
      $('.player-section img').removeClass('img-active');
    }
    if (turn === true){
      console.log('your turn');
      $('.player-section img').addClass('img-active');
    }
  }
  function nextRound(){
    round += 1;
    villianLife = 25 * round;
    playerLife = 20  * round;
    roundText = '';
    $('#winner').text('');
    $('#battle-text').text(`${roundText}`);
  }
  function gameOver(){
    $gameWindow.addClass('hidden');
    $gameOverScreen.removeClass('hidden');
  }
  function resetData(){
    roundText = '';
    $('#battle-text').text(`${roundText}`);
    playerLife = 20;
    villianLife = 20;
    round = 1;
    score = 0;
  }
  function newGame(){
    $gameOverScreen.addClass('hidden');
    resetData();
    startTheGame();
  }
  function backToMenu(){
    $gameOverScreen.addClass('hidden');
    $welcome.removeClass('hidden');
    resetData();
  }
  $instructionsBtn.on('click', hideWindow1);
  $backBtn.on('click', hideWindow2);
  $playBtn.on('click', goToChoiceScreen);
  $startBtn.on('click', toTheGame);
  $name.on('keyup', getTheName);
  $character.on('click', selectCharacter);
  $kickOffBtn.on('click', startTheGame);
  $('#attack').on('click', attackVillian);
  $('#warcry').on('click', warCry);
  $('#defend').on('click', defend);
  $('#yes').on('click', newGame);
  $('#no').on('click', backToMenu);
});
