let playerName;
let playerChosen;
let villianChosen;
let playerLife = 20;
let villianLife = 20;
let turn = true;
let roundText;
let round = 1;
let score = 0;

const characters = {
  one: {
    name: 'Nick',
    image: 'public/assets/images/player1.gif',
    attack: 4,
    warCry: 2,
    defend: 4,
    accuracy: 0.4
  },
  two: {
    name: 'Ellen',
    image: 'public/assets/images/player2.gif',
    attack: 10,
    warCry: 2,
    defend: 5,
    accuracy: 0.7
  },
  three: {
    name: 'Mutant Nick',
    image: 'public/assets/images/player3.gif',
    attack: 6,
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
    attack: 1,
    accuracy: 0.6
  },
  three: {
    name: 'Medusa',
    image: 'public/assets/images/villian3.gif',
    attack: 4,
    accuracy: 0.56
  }
};
$(() => {
  function hideWindow1(){
    $('.instructions').removeClass('hidden');
    $('.welcome').addClass('hidden');
  }
  function hideWindow2(){
    $('.instructions').addClass('hidden');
    $('.welcome').removeClass('hidden');
  }
  function goToPlayScreen(){
    $('.welcome').addClass('hidden');
    $('.character').removeClass('hidden');
  }
  function toTheGame(){
    $('.character').addClass('hidden');
    $('.chosen-character').removeClass('hidden');
  }
  function startTheGame(){
    $('.chosen-character').fadeOut('slow').addClass('hidden');
    $('.game-window').fadeIn('slow').removeClass('hidden');
    displayHealth();
    displayScore();
  }
  function getTheName(){
    playerName = $(this).val();
    if (playerName.length === 0){
      playerName = playerChosen.name;
    }
    $('#name').text(`Hello ${playerName}!`);
    $('.player1-name').text(playerName);
  }

  function selectCharacter(){
    $(this).addClass('active').siblings().removeClass('active');
    const id = $(this).attr('id');
    if(id){
      $('#start').attr('disabled', false);
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
      $('h1').text(`Round ${round}`);
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
        villianLife -= playerChosen.attack;
        score += 5;
        roundText = 'You have hit him!';
      } else{
        roundText = 'Whooops! A miss...';
      }
      $('#battle-text').text(`${roundText}`);
      turn = false;
      checkForWinner();
      setTimeout(() => {
        attackPlayer();
      }, 3000);
    }
  }
  function attackPlayer(){
    whoseTurn();
    if(turn === false){
      if(Math.random() < villianChosen.accuracy){
        playerLife -= villianChosen.attack;
        roundText = 'Crap! He hit you!';
      } else{
        roundText = 'Lucky u! This time it is a miss and you are safe!';
      }
      $('#battle-text').text(`${roundText}`);
      checkForWinner();
      turn = true;
      whoseTurn();
    }
  }
  function defend(){
    turn = false;
    villianChosen.attack -= playerChosen.defend;
    setTimeout(() => {
      attackPlayer();
      villianChosen.attack += playerChosen.defend;
    }, 2000);
  }
  function warCry(){
    turn = false;
    console.log(playerChosen.attack);
    playerChosen.attack += playerChosen.warCry;
    console.log(playerChosen.attack);
    setTimeout(() => {
      attackPlayer();
    }, 2000);
    setTimeout(() => {
      attackVillian();
      playerChosen.attack -= playerChosen.warCry;
      console.log(playerChosen.attack);
    }, 3000);
  }
  function checkForWinner(){
    if (playerLife <= 0){
      $('#winner').text('GAME OVER').css({'color': 'red', 'font-size': '30px'});
      $('#attack, #warcry, #defend').attr('disabled', true);
      $('.game-over').removeClass('hidden');
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
      // $('.player-corner img').removeClass('img-active');
    } else {
      console.log('your turn babe');
      // $('.player-corner').append('<p>Your turn</p>');
      // $('.player-corner img').addClass('img-active');
    }
  }
  function nextRound(){
    console.log('Round 2!');
    round += 1;
    villianLife = 25 * round;
    playerLife = 20  * round;
    roundText = '';
    $('#winner').text('');
    $('#battle-text').text(`${roundText}`);
  }
  $('#instructions').on('click', hideWindow1);
  $('#back').on('click', hideWindow2);
  $('#play').on('click', goToPlayScreen);
  $('#start').on('click', toTheGame);
  $('.name').on('keyup', getTheName);
  $('.person').on('click', selectCharacter);
  $('#kick-off').on('click', startTheGame);
  $('#attack').on('click', attackVillian);
  $('#warcry').on('click', warCry);
  $('#defend').on('click', defend);
});
