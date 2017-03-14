// document.getElementById("Start").onclick = function() {chooseWord()};
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var commonWords = [
  "the","cat","and","umbrella","stop","inside","island","you","that","hit","heresy","was","for","pontoon","hare","wash","with","monkey","they","might","clock","beehive","this","have","from","port","tone","handle","butterfly","word","buttress","not","what","all","were","well","when","your","can","said","there","fuse","cannon","each","which","shell","dorry","chow","their","cliff","will","puppy","other","about","out","many","then","them","these","softball","some","hurt","would","make","like","him","into","time","hash","look","two","more","write","gone","see","number","knock","weigh","could","people","harmony","than","first","water","been","call","who","oil","hits","now","find","long","down","daylight","did","forget","come","made","may","part"]


document.getElementById("pick-letter").onclick = function() {pickLetter()};

let alphNode = document.querySelector("div#alphabet")

alphNode.textContent = alphabet.join(" ")

function pickLetter (){
  var letter = "Your choice of letter?"
  console.log(letter);
}

function chooseWord() {
  let thing = commonWords[(Math.floor(Math.random() * commonWords.length))];
  return thing;
}

var word = chooseWord()

function drawUnderscores (slippery ) {
  var result = "";
  for (var i = 0; i < slippery.length; i++) {
    result += "_ ";
	}
	return result;
}

var underscores = drawUnderscores(word)

function guessLetter (letter, shown, answer) {
  var index=0;
  index = answer.indexOf(letter);
  while (index >= 0){
    shown = alterAt(index, letter, shown);
    index = answer.indexOf(letter, index + 1) // this makes certain to recognize a second "t" in butter
  }
  return shown;
}

function alterAt(index, letter, originalString ) {
  return originalString.substr(0,index) + letter + originalString.substr(index+1);
}


document.getElementById("game-board").innerHTML = underscores;
