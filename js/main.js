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

  let alphNode = document.querySelector("div#alphabet")

  // can modify tries for later difficulty setting
  var tries = 8;
  var chooseLetter = '';
  var guessProgress = '';

  var answerWord = chooseWord(commonWords)
  console.log(answerWord)

  // alphNode.textContent = alphabet.join(" ")

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
  // console.log("cheese");
  document.getElementById("game-board").innerHTML = string;
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
    }
  }
  console.log(progArr);
  guessProgress = progArr.join(' ')
  console.log(guessProgress);
  // document.getElementById("game-board").innerHTML = drawUnderscores(guessProgress);
  updateUnderscores(guessProgress)
}

  document.getElementById("game-board").innerHTML = drawUnderscores(answerWord);

})();
