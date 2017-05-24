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
  const villians = [
    {
      name: 'Henry the Hoover',
      image: 'public/assets/images/villian1.gif',
      attack: 5,
      accuracy: 0.3,
      currentAccuracy: 0.3
    },
    {
      name: 'Xenomorph XX121',
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
  const $playerImg = $('.player-img');
  const $playerLife = $('#player-life');
  const $playerCurrentAttack = $('#player-current-attack');
  const $villianImg = $('.villian-img');
  const $villianName = $('.villian-name');
  const $villianLife = $('#villian-life');
  const $villianAttack = $('#villian-attack');
  const $turnResult = $('#turn-result');
  const $roundNumber = $('#round-no');
  const $roundMessage = $('#round-message');

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
      <p class="underlined">${characters[i].name}</p>
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
    setInterval(() => {
      displayHealth();
      displayScore();
      displayRound();
      displayCurrentAttack();
    }, 500);
  }
  function updateHighScore(){
    highScore = score > highScore ? score : highScore;
    $highScore.text(highScore);
  }
  function getTheName(){
    playerName = $(this).val();
    if (playerName.length !== 0){
      $kickOffBtn.attr('disabled', false).addClass('animated infinite pulse');
    }
    $playerName.text(playerName);
  }

  function selectCharacter(){
    $(this).addClass('active').siblings().removeClass('active');
    const id = $(this).attr('data-id');
    if(id){
      $startBtn.attr('disabled', false).addClass('animated infinite pulse');
    }
    playerChosen = characters[id];
    villianChosen = villians[id];
    $('.chosen-character img, .player-img').attr('src', playerChosen.image);
    $villianImg.attr('src', villianChosen.image);
    $villianName.text(villianChosen.name);
    $villianAttack.text(villianChosen.attack);
  }
  function displayHealth(){
    $playerLife.html(playerLife);
    $villianLife.html(villianLife);
  }
  function displayRound(){
    $roundNumber.text(`Round ${round}`);
  }
  function displayCurrentAttack(){
    $playerCurrentAttack.text(playerChosen.currentAttack);
  }
  function displayScore(){
    $score.html(score);
  }
  function turnResultText(){
    $turnResult.text(`${roundText}`);
  }

  function attackVillian(){
    console.log(playerChosen.currentAccuracy);
    if(turn === true){
      if(Math.random() < playerChosen.currentAccuracy){
        villianLife -= playerChosen.currentAttack;
        score += playerChosen.currentAttack;
        roundText = 'You have hit him!';
        $villianImg.addClass('animated shake');
        $slapAudio.play();
      } else{
        $swooshAudio.play();
        roundText = 'Whooops! A miss...';
      }
      playerChosen.currentAttack = playerChosen.attack;
      turnResultText();
      $playerImg.removeClass('animated shake');
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
    console.log(villianChosen.currentAccuracy);
    if(turn === false){
      if(Math.random() < villianChosen.currentAccuracy){
        playerLife -= villianChosen.attack;
        roundText = 'He hit you!';
        $punchAudio.play();
        $playerImg.addClass('animated shake');
      } else{
        $swooshAudio2.play();
        roundText = 'You are safe!';
      }
      $villianImg.removeClass('animated shake');
      turnResultText();
      checkForWinner();
      turn = true;
      setTimeout(() => {
        whoseTurn();
      },1000);
    }
  }
  function defend(){
    $turnResult.text('DEFEND!!!');
    turn = false;
    whoseTurn();
    villianChosen.attack -= playerChosen.defend;
    setTimeout(() => {
      attackPlayer();
      villianChosen.attack += playerChosen.defend;
    }, 2000);
  }
  function warCry(){
    $turnResult.text('AAAAAAAAAAAAAAAAAAAaaaaaaa!!!!');
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
      villianLife = 0;
      $roundMessage.text('You won this round!!! Ta-da!!').css({'color': '#C5D200', 'font-size': '28px'});
      $levelUpAudio.play();
      turn = true;
      setTimeout(() => {
        nextRound();
      }, 2000);
    }
  }
  function whoseTurn(){
    if (turn === false){
      $playerImg.removeClass('img-active');
    }
    if (turn === true){
      $playerImg.addClass('img-active');
    }
  }
  function nextRound(){
    playerChosen.currentAccuracy += 0.01;
    villianChosen.currentAccuracy += 0.05;
    round += 1;
    villianLife = 20;
    playerLife = 20  + round;
    roundText = '';
    $roundMessage.text('');
    turnResultText();
    whoseTurn();

  }
  function gameOver(){
    localStorage.setItem('highScore', highScore);
    $gameWindow.addClass('hidden');
    $gameOverScreen.removeClass('hidden').addClass('animated fadeIn');
    resetData();
  }
  function resetData(){
    roundText = '';
    turnResultText();
    playerLife = 20;
    villianLife = 20;
    round = 1;
    score = 0;
    playerChosen.currentAttack = playerChosen.attack;
    playerChosen.currentAccuracy = playerChosen.accuracy;
    villianChosen.currentAccuracy = villianChosen.accuracy;
    turn = true;
    $choices.empty();
    ($villianImg, $playerImg).removeClass('animated shake');
    ($kickOffBtn, $startBtn).removeClass('animated infinite pulse');
  }
  function newGame(){
    $gameOverScreen.addClass('hidden');
    startTheGame();
  }
  function backToMenu(){
    $gameOverScreen.addClass('hidden');
    $welcome.removeClass('hidden').addClass('animated fadeIn');
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
