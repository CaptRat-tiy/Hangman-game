//code for selecting word from
    function chooseWord () {
    let chooseWord =  words[((Math.floor(Math.random()) * words.length)-1)];
}
 // RETURN chooseWord()
let wordLength = chooseWord.length;

function blanksForAnswerWindow ( answerWord ) {

	    var result = "";
	    for (var i = 0; i < answerWord.length; i++) {
	    result = result += "_ ";
	  }
	  return result;
	}
  //  RETURN blanksForAnswerWindow

  function alterAt ( n, c, originalString ) {
      return originalString.substr(0,n) + c + originalString.substr(n+1);}

  function alterAt ( 3, l, "helko world")

  // replaces correctly-guessed letter
