// "Would you like to play?" button






//code for selecting word from
    function chooseWord () {
    let chooseWord =  words[((Math.floor(Math.random()) * words.length)-1)];
}
 // RETURN chooseWord()

 let wordLength = chooseWord.length;





function drawUnderscores ( chooseWord ) {

	    var result = "";
	    for (var i = 0; i < chooseWord.length; i++) {
	    result = result += "_ ";
	  }
	  return result;  // to the HTML window
	}
  //  RETURN blanksForAnswerWindow



  function alterAt ( n, c, originalString ) {
      return originalString.substr(0,n) + c + originalString.substr(n+1);}

  function alterAt ( 3, l, "helko world")

  // replaces correctly-guessed letter


  function show (letter, shown, checkLetter) {
    let s = shown.substr(0,checkLetter) + letter + shown.substr(checkLetter+1, shown.length)
    return s;
  }
