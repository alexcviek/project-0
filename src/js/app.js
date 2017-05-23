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
  let highScore = localStorage.getItem('highScore') || 0;

  const characters = [
    {
      name: 'Nick',
      image: 'public/assets/images/player1.gif',
      attack: 4,
      currentAttack: 4,
      warCry: 2,
      defend: 4,
      accuracy: 0.9
    },
    {
      name: 'Ellen',
      image: 'public/assets/images/player2.gif',
      attack: 1,
      currentAttack: 1,
      warCry: 5,
      defend: 5,
      accuracy: 0.8
    },
    {
      name: 'Mutant Nick',
      image: 'public/assets/images/player3.gif',
      attack: 6,
      currentAttack: 6,
      warCry: 1,
      defend: 2,
      accuracy: 0.6
    }
  ];
  const villians = [
    {
      name: 'Henry',
      image: 'public/assets/images/villian3.jpg',
      attack: 5,
      accuracy: 0.5
    },
    {
      name: 'Xenomorph',
      image: 'public/assets/images/villian2.gif',
      attack: 20,
      accuracy: 0.8
    },
    {
      name: 'Medusa',
      image: 'public/assets/images/villian3.gif',
      attack: 4,
      accuracy: 0.56
    }
  ];

  const $instructions = $('.instructions');
  const $instructionsBtn = $('#instructions');
  const $welcome = $('.welcome');
  const $backBtn = $('#back');
  const $playBtn = $('#play');
  const $characterScreen = $('.character-screen');
  const $choices = $('.choices');
  const $name = $('.name');
  const $startBtn = $('#start');
  const $chosenCharacter = $('.chosen-character');
  const $gameWindow = $('.game-window');
  const $kickOffBtn = $('#kick-off');
  const $gameOverScreen = $('.game-over');
  const $attack = $('#attack');
  const $warCry = $('#warcry');
  const $defend = $('#defend');
  const $newGame = $('#new-game');
  const $backToMenu = $('#back-to-menu');
  const $score = $('#player-score');
  const $highScore = $('.high-score');
  const $slapAudio = $('audio')[0];
  const $punchAudio = $('audio')[1];
  const $swooshAudio = $('audio')[2];
  const $swooshAudio2 = $('audio')[3];
  const $gameOverAudio = $('audio')[4];
  const $levelUpAudio = $('audio')[5];
  const $playerName = $('.player-name');

  function hideWindow1(){
    $instructions.removeClass('hidden').addClass('animated fadeIn');
    $welcome.addClass('hidden');
  }
  function hideWindow2(){
    $instructions.addClass('hidden').removeClass('animated fadeIn');
    $welcome.removeClass('hidden').addClass('animated fadeIn');
  }
  function createChoices(){
    for(let i = 0; i < characters.length; i++){
      const content = `
      <div class="character" data-id=${i}>
      <img src="${characters[i].image}">
      <p>${characters[i].name}</p>
      <p>Attack: ${characters[i].attack}</p>
      <p>WarCry: ${characters[i].warCry}</p>
      <p>Defend: ${characters[i].defend}</p>
      <p>Accuracy: ${characters[i].accuracy}</p>
      </div>
      `;
      $choices.append(content);
    }
  }
  function goToChoiceScreen(){
    $welcome.addClass('hidden');
    $characterScreen.removeClass('hidden').addClass('animated fadeIn');
    createChoices();
  }
  function toTheGame(){
    $characterScreen.addClass('hidden');
    $chosenCharacter.removeClass('hidden').addClass('animated fadeIn');
  }
  function startTheGame(){
    $chosenCharacter.addClass('hidden');
    $gameWindow.removeClass('hidden').addClass('animated fadeIn');
    $highScore.text(highScore);
    displayHealth();
    displayScore();
    displayRound();
    displayCurrentAttack();
  }
  function updateHighScore(){
    highScore = score > highScore ? score : highScore;
    $highScore.text(highScore);
  }
  function getTheName(){
    playerName = $(this).val();
    if (playerName.length === 0){
      alert('You must provide your name');
    }
    $playerName.text(playerName);
  }

  function selectCharacter(){
    $(this).addClass('active').siblings().removeClass('active');
    const id = $(this).attr('data-id');
    if(id){
      $startBtn.attr('disabled', false);
    }
    playerChosen = characters[id];
    villianChosen = villians[id];
    $('.chosen-character img, .player-img').attr('src', playerChosen.image);
    $('.villian').attr('src', villianChosen.image);
    $('.villian-name').text(villianChosen.name);
  }
  function displayHealth(){
    setInterval(() => {
      $('#player-life').html(playerLife);
      $('#villian-life').html(villianLife);
    }, 500);
  }
  function displayRound(){
    setInterval(() => {
      $('#round-no').text(`Round ${round}`);
    }, 500);
  }
  function displayCurrentAttack(){
    setInterval(() => {
      $('#current-attack').text(playerChosen.currentAttack);
    }, 500);
  }
  function displayScore(){
    setInterval(() => {
      $score.html(score);
    }, 500);
  }

  function attackVillian(){
    if(turn === true){
      if(Math.random() < playerChosen.accuracy){
        villianLife -= playerChosen.currentAttack;
        score += playerChosen.currentAttack;
        roundText = 'You have hit him!';
        $('.villian-section img').addClass('animated shake');
        $slapAudio.play();
      } else{
        $swooshAudio.play();
        roundText = 'Whooops! A miss...';
      }
      playerChosen.currentAttack = playerChosen.attack;
      $('#turn-result').text(`${roundText}`);
      $('.player-section img').removeClass('animated shake');
      turn = false;
      whoseTurn();
      checkForWinner();
      updateHighScore();
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
        $punchAudio.play();
        $('.player-section img').addClass('animated shake');
      } else{
        $swooshAudio2.play();
        roundText = 'You are safe!';
      }
      $('.villian-section img').removeClass('animated shake');
      $('#turn-result').text(`${roundText}`);
      checkForWinner();
      turn = true;
      setTimeout(() => {
        whoseTurn();
      },1000);
    }
  }
  function defend(){
    $('#turn-result').text('');
    turn = false;
    whoseTurn();
    villianChosen.attack -= playerChosen.defend;
    setTimeout(() => {
      attackPlayer();
      villianChosen.attack += playerChosen.defend;
    }, 2000);
  }
  function warCry(){
    $('#turn-result').text('');
    turn = false;
    whoseTurn();
    playerChosen.currentAttack += playerChosen.warCry;
    setTimeout(() => {
      attackPlayer();
    }, 2000);
  }
  function checkForWinner(){
    if (playerLife <= 0){
      $gameOverAudio.play();
      gameOver();
    }
    if(villianLife <= 0){
      $('#winner').text('You won this round!!! Ta-da!!').css({'color': '#C5D200', 'font-size': '28px'});
      $levelUpAudio.play();
      turn = true;
      setTimeout(() => {
        nextRound();
      }, 2000);
    }
  }
  function whoseTurn(){
    if (turn === false){
      $('.player-section img').removeClass('img-active');
    }
    if (turn === true){
      $('.player-section img').addClass('img-active');
    }
  }
  function nextRound(){
    round += 1;
    villianLife = 25 * round;
    playerLife = 20  * round;
    roundText = '';
    $('#winner').text('');
    $('#turn-result').text(`${roundText}`);
  }
  function gameOver(){
    localStorage.setItem('highScore', highScore);
    $gameWindow.addClass('hidden');
    $gameOverScreen.removeClass('hidden').addClass('animated fadeIn');
  }
  function resetData(){
    roundText = '';
    $('#turn-result').text(`${roundText}`);
    playerLife = 20;
    villianLife = 20;
    round = 1;
    score = 0;
    playerChosen.currentAttack = playerChosen.attack;
    turn = true;
    $choices.empty();
    $('.villian-section img').removeClass('animated shake');
    $('.player-section img').removeClass('animated shake');
  }
  function newGame(){
    $gameOverScreen.addClass('hidden');
    resetData();
    startTheGame();
  }
  function backToMenu(){
    $gameOverScreen.addClass('hidden');
    $welcome.removeClass('hidden').addClass('animated fadeIn');
    resetData();
  }
  $instructionsBtn.on('click', hideWindow1);
  $backBtn.on('click', hideWindow2);
  $playBtn.on('click', goToChoiceScreen);
  $startBtn.on('click', toTheGame);
  $name.on('keyup', getTheName);
  $choices.on('click', '.character', selectCharacter);
  $kickOffBtn.on('click', startTheGame);
  $attack.on('click', attackVillian);
  $warCry.on('click', warCry);
  $defend.on('click', defend);
  $newGame.on('click', newGame);
  $backToMenu.on('click', backToMenu);
});
