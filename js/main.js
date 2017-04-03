const hangman = (function() {

var answerWord= '';
var guess;
var guessedLetters = '';
var guessProgress= '';
var status = 'status';
var tries = '10';
console.log(answerWord);

var commonWords = [
  "thesis","band","storage","thank","water","whistle","vehicle","wither","lariat","turbulence","thistle","have","from","bone","while","word","stadium","knot","what","dance","were","when","your","cannon","tower","there","vacant","each","which","she","how","their","cloud","other","about","potluck","many","then","them","these","sock","some","father","would","make","like","him","into","island","has","look","boat","more","write","sequin","number","football","could","people","brat","first","water","been","call","coral","fuel","pomegranate","explode","find","long","down","tulip","mastadon", "channel","ferry","made","mayfly","part"];

function getWord() {
  console.log('word');
  answerWord = commonWords[Math.floor(Math.random () * commonWords.length)];
  console.log(answerWord);
  return answerWord;
}

document.querySelector('.turnCount').innerHTML = 'Turns: ' + tries


function setAnswerWord() {
answerWord = getWord();
}

function setProgress() {
  console.log(answerWord);
  for (var i = 0; i < answerWord.length; i++) {
    guessProgress+='_'
  }
}

function showProgress () {
  document.querySelector('.progressHolder').innerHTML = guessProgress;
}

function inputGuess () {
  return document.querySelector('.guessLetter').value;
}

function setGuess() {
  guess = inputGuess();
  updateGuess();
}

document.querySelector('.submitGuess').onclick = setGuess;

document.querySelector('.submitGuess').disabled = false;

function updateGuess() {
let ansArray = answerWord.split('');
let progArray = guessProgress.split('');
for (let i = 0; i < answerWord.length; i++) {
  if (ansArray[i] === guess) {
    progArray[i] = guess;
  }
}

answerWord = ansArray.join('');
guessProgress = progArray.join('')

showProgress();
checkMath();
setStatus();
trackGuesses();
checkWin();
checkLose();
console.log(guessedLetters);
}

function checkMath() {
  if (answerWord.includes(guess)) {
    document.querySelector('.turnCount').innerHTML = "Attempts remaining: " + tries;
    return true;
  } else {
    document.querySelector('.turnCount').innerHTML = "Attempts remaining: " + tries;
    return false;
  }
}

function trackGuesses() {
  document.querySelector('.guessedLetters').innerHTML = 'Letters guessed: ' + guessedLetters;
}

function setStatus() {
  if (checkMath() === true) {
    status = "Correct!";
    guessedLetters+=guess + ', ';
  } else {
    status = 'Nope! Try again.'
    tries--;
    document.querySelector('.turnCount').innerHTML = 'Tries: ' + tries;
    guessedLetters += guess + ", "
  }
  document.querySelector('.statusHolder').innerHTML = status;
}

function checkLose() {
  if (tries <= 0) {
    status = 'You Lost!';
    document.querySelector('.statusHolder').innerHTML = status;
    document.querySelector('.submitGuess').disabled = true;
    return true;
  }
}

function checkWin() {
  if (guessProgress.includes('_')) {
    return false;
  } else {
    status = 'You won!';
    document.querySelector('.statusHolder').innerHTML = status;
    document.querySelector('.submitGuess').disabled = true;
    return true;
  }
}

setAnswerWord();
setProgress();
showProgress();


return {
  getWord: getWord,
  setAnswerWord: setAnswerWord,
  setProgress: setProgress,
  showProgress: showProgress,
  inputGuess: inputGuess,
  setGuess: setGuess,
  updateGuess: updateGuess,
  checkMath: checkMath,
}
})();
