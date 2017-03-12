var commonWords = [
  "the","of","and","a","to","in","is","you","that","it","he",
  "was","for","on","are","as","with","his","they","I","at","be",
  "this","have","from","or","one","had","by","word","but","not",
  "what","all","were","we","when","your","can","said","there",
  "use","an","each","which","she","do","how","their","if","will",
  "up","other","about","out","many","then","them","these","so",
  "some","her","would","make","like","him","into","time","has",
  "look","two","more","write","go","see","number","no","way",
  "could","people","my","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did","get",
  "come","made","may","part"
];

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

let alphNode = document.querySelector("div#alphabet")
alphNode.textContent = alphabet.join(" ")
// "Would you like to play?" button

// create alphabet ul
  // var buttons = function () {
  //   myButtons = document.getElementById('buttons');
  //   letters = document.createElement('ul');
  //
  //   for (var i = 0; i < alphabet.length; i++) {
  //     letters.id = 'alphabet';
  //     list = document.createElement('li');
  //     list.id = 'letter';
  //     list.innerHTML = alphabet[i];
  //     check();
  //     myButtons.appendChild(letters);
  //     letters.appendChild(list);
  //   }




//code for selecting word from
function chooseWord() {
  let thing =  commonWords[((Math.floor(Math.random()) * commonWords.length))];
  return thing;
 }

var word = chooseWord()
console.log(word)


function drawUnderscores ( word ) {
  var result = "";
  for (var i = 0; i < word.length; i++) {
    result += "_ ";
	}
	return result;  // to the HTML window
}
//  RETURN blanksForAnswerWindow

var underscores = drawUnderscores(word)
console.log(underscores)

function alterAt ( n, c, originalString ) {
  return originalString.substr(0,n) + c + originalString.substr(n+1);
}
// function alterAt ( 3, l, "helko world")

  // replaces correctly-guessed letter
function show (letter, shown, checkLetter) {
  let s = shown.substr(0,checkLetter) + letter + shown.substr(checkLetter+1, shown.length)
  return s;
}
