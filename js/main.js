// document.getElementById("Start").onclick = function() {chooseWord()};
let render = {
    randomWord: " ",
    guess: " ",
    tracker: [],
    feedback: " ",
    guessedLetters: [],
    guessesRemaining: 10,
    mistakeMessage: " ",
    head: "hidden",
    neck: "hidden",
    torso: "hidden",
    arm1: "hidden",
    arm2: "hidden",
    leg1: "hidden",
    leg2: "hidden",
    hang: "hidden",
    btn: "hidden",
}

document.getElementById("pick-letter").onclick = function() {pickLetter()};

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var commonWords = [
  "them","cough","hand","actor","torque","finish","fish","youth","that","bait","help",
  "wash","fort","only","garish","waste","with","history","they","island","batch","bet",
  "thank","have","from","order","bone","had","butterfly","word","bunt","notch",
  "what","ball","were","wet","when","your","scan","said","there",
  "abuse","nanny","each","which","she","doe","how","their","cliff","will",
  "puppy","other","about","out","many","then","them","these","son",
  "some","hurt","would","make","like","him","into","time","hash",
  "look","two","more","write","gonzo","see","number","note","way",
  "could","people","max","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did","get",
  "come","made","may","part"]


let alphNode = document.querySelector("div#alphabet")

alphNode.textContent = alphabet.join(" ")

var chooseLetter=document.getElementById("chooseLetter");
// chooseLetter.addEventListener("input", display);


function pickLetter (){
var letter = prompt("Your choice of letter?");
console.log(letter);
}

function chooseWord() {
  let thing = commonWords[(Math.floor(Math.random() * commonWords.length))];
  return thing;
 }

var word = chooseWord()
console.log(word)


function drawUnderscores (word) {
  var result = "";
  for (var i = 0; i < word.length; i++) {
    result += "_ ";
	}
	return result;
  console.log(result);
}

var underscores = drawUnderscores(word)

function alterAt ( n, c, originalString ) {
  return originalString.substr(0,n) + c + originalString.substr(n+1);
}

function guessLetter (letter, shown, answer) {
  var checkIndex=0;
  checkIndex = answer.indexOf(letter);
  while (checkIndex >= 0){
    shown = alterAt (checkIndex, letter, shown);
    checkIndex = answer.indexOf(letter, checkIndex + 1)
  }
  return shown;
}

  // replaces correctly-guessed letter
function show (letter, shown, checkLetter) {
  let s = shown.substr(0,checkLetter) + letter + shown.substr(checkLetter+1, shown.length)
  return s;
}

document.getElementById("game-board").innerHTML = underscores;
