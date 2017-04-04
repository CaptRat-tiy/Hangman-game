//tries don't count down
// alphabet wrong guesses isn't working
// css needs help


const hangman = (function() {

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

  let alphNode = document.querySelector("#alphabet")
  alphNode.textContent = alphabet.join(" ")


  // can modify tries for later difficulty setting
  var tries = 8;
  var chooseLetter = '';
  var guessProgress = '';

  var answerWord = chooseWord(commonWords)
  console.log(answerWord)

  //when user makes guess:
  function inputGuess(){
    chooseLetter = document.getElementById("letter-input").value;
    updateGuess();
  }

  document.getElementById("pick-letter").onclick = inputGuess;

  //display total tries on page load:
  document.getElementById("tries").innerHTML = "Tries: " +tries;
// create Answer word "chooseword"
  function chooseWord(array) {
    let thing = array[(Math.floor(Math.random() * array.length))];
    return thing;
   }

// create a string of underscores (replacing word length) that shows progress
  function drawUnderscores(word) {
    for (var i = 0; i < word.length; i++) {
      guessProgress += "_ ";
  	}
  	return guessProgress;
  }

function updateUnderscores(string) {
  document.getElementById("game-board").innerHTML = string;
  tries -=1;
  if (tries === 0) {
    // return "Sorry.  You lose!"
    // gameOver();
  }
}
  // compare chooseword vs answer word
function updateGuess() {
  let ansArr = answerWord.split('');
  let progArr = guessProgress.split(' ');
  console.log("ansArr: ", ansArr);
  console.log("progArr: ", progArr);
  for (let i = 0; i < ansArr.length; i++) {
    if (ansArr[i] === chooseLetter) {
      progArr[i] = chooseLetter;
    } else {
      // add letter to "wrong choices"
    }
  }
  console.log("progArr: ", progArr)
  guessProgress = progArr.join(' ')
  console.log(guessProgress);
  // document.getElementById("game-board").innerHTML = drawUnderscores(guessProgress);
  updateUnderscores(guessProgress);
  // updateAlphabet(progArr)
}

// function updateAlphabet(progArr) {
//   let alphabetPotential = alphabet.toString();
//   console.log("alphabet: ", alphabet);
//   let guessedAlphabet = progArr.split(' ');
//   console.log("alphabet: ", alphabetPotential);
//   console.log("progArr: ", progArr);
//   for (let i = 0; i < alphabet.length; i++) {
//     if (alphabet[i] === chooseLetter) {
// add strikethrough to individual "wrong choice letter"
//  function myFunction() {
//      document.getElementById("myP").style.textDecoration = "line-through";
// }
//       alphabet[i] = chooseLetter;
//
// //   document.getElementById("game-board").innerHTML = drawUnderscores(guessProgress);
// //   updateUnderscores(guessProgress)
// }



  document.getElementById("game-board").innerHTML = drawUnderscores(answerWord);
})();
