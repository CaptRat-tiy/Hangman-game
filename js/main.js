

const hangman = (function() {

  let alphNode = document.querySelector("div#alphabet")

  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  var chooseLetter = document.getElementById("letter-input");
// can modify tries for later difficulty setting
  var tries = 8;

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

    var word = chooseWord(commonWords)
    console.log(word)




  alphNode.textContent = alphabet.join(" ")

  //display total tries on page load:
  document.getElementById("tries").innerHTML = "Tries: " +tries;
// create Answer word "chooseword"
  function chooseWord(array) {
    let thing = array[(Math.floor(Math.random() * array.length))];
    return thing;
   }

// create a string of underscores (replacing word length) that shows progress
  function drawUnderscores (word) {
    var result = "";
    for (var i = 0; i < word.length; i++) {
      result += "_ ";
  	}
  	return result;
  }


  document.getElementById("game-board").innerHTML = drawUnderscores(word);

  // return {
  //   pickLetter: pickLetter,
  //   chooseWord: chooseWord,
  //   drawUnderscores: drawUnderscores,
  // }
})();

// module.exports = hangman;
