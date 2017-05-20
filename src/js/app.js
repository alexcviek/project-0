let playerName;
let playerChosen;
let villianChosen;
let playerLife = 10;
let villianLife = 10;
let turn = true;
const characters = {
  one: {
    name: 'No1',
    image: 'public/assets/images/gingerkitten.jpg',
    attack: 4,
    warCry: 2,
    defend: 4,
    accuracy: 0.4
  },
  two: {
    name: 'No2',
    image: 'public/assets/images/gingerkitten.jpg',
    attack: 5,
    warCry: 2,
    defend: 5,
    accuracy: 0.5
  },
  three: {
    name: 'No3',
    image: 'public/assets/images/gingerkitten.jpg',
    attack: 6,
    warCry: 1,
    defend: 2,
    accuracy: 0.5
  }
};
const villians = {
  one: {
    name: 'Villian No1',
    image: 'public/assets/images/villian.jpg',
    attack: 5,
    accuracy: 0.5
  },
  two: {
    name: 'Villian No2',
    image: 'public/assets/images/villian.jpg',
    attack: 6,
    accuracy: 0.6
  },
  three: {
    name: 'Villian No3',
    image: 'public/assets/images/villian.jpg',
    attack: 4,
    accuracy: 0.56
  }
};
$(() => {
  function hideWindow1(){
    $('.welcome').addClass('hidden');
    $('.instructions').removeClass('hidden');
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
  function getTheName(){
    playerName = $(this).val();
    if (playerName.length === 0){
      alert('test');
    }
    $('#name').text(`Hello ${playerName}!`);
    $('.player1-name').text(playerName);
  }

  function selectCharacter(){
    $(this).toggleClass('active').siblings().removeClass('active');
    const id = $(this).attr('id');
    if(id){
      $('#start').attr('disabled', false);
    }
    playerChosen = characters[id];
    $('.chosen-character img, .player1').attr('src', playerChosen.image);
    villianChosen = villians[id];
    $('.villian').attr('src', villianChosen.image);
    $('.villian-name').text(villianChosen.name);
  }
  function startTheGame(){
    $('.chosen-character').addClass('hidden');
    $('.game-window').removeClass('hidden');
    displayScore();
  }
  function displayScore(){
    $('#player1-score').html(playerLife);
    $('#villian-score').html(villianLife);
  }

  function attackVillian(){
    if(turn === true){
      if(Math.random() < playerChosen.accuracy){
        villianLife -= playerChosen.attack;
      }
      turn = false;
      console.log(turn);
      displayScore();
      checkForWinner();
      setTimeout(() => {
        attackPlayer();
      }, 1000);
    }
  }
  function attackPlayer(){
    if(turn === false){
      if(Math.random() < villianChosen.accuracy){
        playerLife -= villianChosen.attack;
      }
      displayScore();
      checkForWinner();
      turn = true;
      console.log(turn);
    }
  }
  function checkForWinner(){
    if (playerLife <= 0){
      console.log('You looser!');
      turn = true;
    }
    if(villianLife <= 0){
      console.log('You won!');
    }
  }
  function defend(){
    turn = false;
    villianChosen.attack - playerChosen.defend;
    console.log(villianChosen.attack);
    attackPlayer();
  }
  $('#instructions').on('click', hideWindow1);
  $('#back').on('click', hideWindow2);
  $('#play').on('click', goToPlayScreen);
  $('#start').on('click', toTheGame);
  $('.name').on('keyup', getTheName);
  $('.person').on('click', selectCharacter);
  $('#kick-off').on('click', startTheGame);
  $('#attack').on('click', attackVillian);
  $('#defend').on('click', defend);
});
