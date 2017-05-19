/*BATTLE GAME
user journey:
1)intitial screen with 2 options: instructions and play
2)if user chooses instructions => display instr
uctions (with an option to go back)
3)if user chooses to play => display the game itself
4)user chooses a character (3 options) and inserts the name
5)when the above is done, bring the user to the battle (commence the battle) screen
BATTLE LOGIC THAT I HAVE NO CLUE HOW TO FIGURE OUT
PLS HELP
(perhaps the quiz idea?)

character and opponent have both 10 points of life each.
in order to have a chance to make damage to opponent, the user must answer the question (that pops up on the screen) correctly, within given timeframe (let's say 10 sec). If answered correctly, user makes damage to opponent (-1 point).
If the question is answered not correctly, the opponent makes the damage to the user (-1).
The game is finished when user or the opponent hits 0 life points.

(does it meet the requirement for 2 players? the opponent can still kill you)
6)someone wins! the winner and score is displayed
7)If necessary - update the highscore
8)user asked if wants to play again

need to create the following global variables:
choice of characters - array
store the name of the player - let playerName
score
highscore
store quesstions and answers - object or multidimensional array?
store some html elements for later

FUNCTIONS
1)when user clicks on instructions - hide the main screen and display instructions. when clicks on back in instructions, it brings the user back to the initial screen

2) when clicking on play - hide the initial screen, display the screen with the character choice field and input the name. if name and/or character is not input, alert user that this must be completed.

3) commence the battle when the button is clicked - brings the user to the battle screen. display the user's character on the left and the opponent (automatiacally chosen) on the right.

||
||
\  /
\/
function to pull the question (form?). setInterval to measure the time for answer. if the string input by the user matches the correct answer, substract 1 from opponent's life points. else - substract 1 from player's life points.
Repeat this until user or opponent run out of life points.


4) Function to stop the game when someone reaches 0 points of life. Pull the name/pic of the winner on the page. (another div?)

5) If necessary - update the highscore

6)Ask user if wants to play again. If confirms, start the game again.


What I still need to do - think about how the score is calculated.
*/

let playerName;
let playerChosen;
let villianChosen;
let playerLife = 10;
let playerHighscore;
let villianLife = 10;
let answer;
const characters = {
  one: {
    name: 'No1',
    image: 'public/assets/images/gingerkitten.jpg'
  },
  two: {
    name: 'No2',
    image: 'public/assets/images/gingerkitten.jpg'
  },
  three: {
    name: 'No3',
    image: 'public/assets/images/gingerkitten.jpg'
  }
};
const villians = {
  one: {
    name: 'Villian No1',
    image: 'public/assets/images/villian.jpg'
  },
  two: {
    name: 'Villian No2',
    image: 'public/assets/images/villian.jpg'
  },
  three: {
    name: 'Villian No3',
    image: 'public/assets/images/villian.jpg'
  }
};
const questions = [
  {
    question: 'What is 3 + 2?',
    answer: '5'
  },
  {
    question: 'What is the capital city of the UK?',
    answer: 'London'
  },
  {
    question: 'Are doplhins mammals?',
    answer: 'Yes'
  }
];

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
    showQuestion();
  }
  function displayScore(){
    $('#player1-score').html(playerLife);
    $('#villian-score').html(villianLife);
  }
  let currentQuestion = 0
  function showQuestion(){
    console.log(questions[currentQuestion].question);
    $('#question-place').text(questions[currentQuestion].question);
  }
  function getAnswer(){
    answer = $(this).val();
    console.log(answer);
    if (answer === questions[currentQuestion].answer){
      console.log('haha!');
      villianLife -= 1;
      playerLife += 1;
      currentQuestion += 1;
      answer = $(this).val('');
      console.log(currentQuestion);
      showQuestion();
      displayScore();
    }
    else('fail');
    playerLife -= 1;
    showQuestion();
    displayScore();
  }

  $('#instructions').on('click', hideWindow1);
  $('#back').on('click', hideWindow2);
  $('#play').on('click', goToPlayScreen);
  $('#start').on('click', toTheGame);
  $('.name').on('keyup', getTheName);
  $('.person').on('click', selectCharacter);
  $('#kick-off').on('click', startTheGame);
  $('#answer').on('keyup', getAnswer);
});
