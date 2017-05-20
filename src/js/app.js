let playerName;
let playerChosen;
let villianChosen;
let playerLife = 20;
let villianLife = 20;
let turn = true;
let roundResultText;

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
    attack: 5,
    warCry: 2,
    defend: 5,
    accuracy: 0.5
  },
  three: {
    name: 'No3',
    image: 'public/assets/images/player3.jpg',
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
    attack: 6,
    accuracy: 0.6
  },
  three: {
    name: 'Henry',
    image: 'public/assets/images/villian3.jpg',
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
      $('#player1-score').html(playerLife);
      $('#villian-score').html(villianLife);
    }, 500);
  }

  function attackVillian(){
    if(turn === true){
      if(Math.random() < playerChosen.accuracy){
        villianLife -= playerChosen.attack;
        roundResultText = 'You have hit him!';
      } else{
        roundResultText = 'Whooops! A miss...';
      }
      $('#battle-text').text(`${roundResultText}`);
      turn = false;
      console.log(turn);
      checkForWinner();
      setTimeout(() => {
        attackPlayer();
      }, 2000);
    }
  }
  function attackPlayer(){
    whoseTurn();
    if(turn === false){
      if(Math.random() < villianChosen.accuracy){
        playerLife -= villianChosen.attack;
        roundResultText = 'Crap! He hit you!';
      } else{
        roundResultText = 'Lucky u! This time it is a miss and you are safe!';
      }
      $('#battle-text').text(`${roundResultText}`);
      checkForWinner();
      turn = true;
      console.log(turn);
      whoseTurn();
    }
  }
  function checkForWinner(){
    if (playerLife <= 0){
      $('#winner').text('He killed you :(').css({'color': 'red', 'font-size': '30px'});
      turn = true;
    }
    if(villianLife <= 0){
      $('#winner').text('You won!!! Ta-da!!').css({'color': 'red', 'font-size': '30px'});
      turn = true;
    }
  }
  function whoseTurn(){
    if (turn === false){
      console.log('not your turn');
    } else{
      console.log('your turn babe');
    }
  }
  function defend(){
    turn = false;
    console.log(villianChosen.attack);
    villianChosen.attack -= playerChosen.defend;
    console.log(villianChosen.attack);
    setTimeout(() => {
      attackPlayer();
      villianChosen.attack += playerChosen.defend;
      console.log(villianChosen.attack);
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
