const hangman = (function() {

  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  var commonWords = [
    "them","cough","hand","actor","torque","finish","fish","youth","that","bait","help","wash","fort","only","garish","waste","with","history","they","island","batch","bet","thank","have","from","order","bone","had","butterfly","word","bunt","notch","what","ball","were","wet","when","your","scan","said","there","abuse","nanny","each","which","she","doe","how","their","cliff","will","puppy","other","about","out","many","then","them","these","son","some","hurt","would","make","like","him","into","time","hash","look","two","more","write","gonzo","see","number","note","way","could","people","max","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","part"]

  let letter = "";
  let word = "";
  let result = "";

  let alphNode = document.querySelector("div#alphabet")

  alphNode.textContent = alphabet.join(" ")

  let chooseLetter = document.getElementById("letter-input");

  let btn = document.querySelector("button");
  btn.addEventListener('click', function(){
    letter = chooseLetter.value;
    // alterAt(letter);
    console.log(letter);
    return letter;
  })

  // console.log(letter);

  function chooseWord() {
    let thing = commonWords[(Math.floor(Math.random() * commonWords.length))];
    return thing;
   }

  word = chooseWord()
  console.log(word)


  function drawUnderscores (word) {
    var results = result;
    for (let i = 0; i < word.length; i++) {
      results += "_ ";
  	}
    console.log(results);
  	return results;
  }

  result = drawUnderscores(word)
  console.log(result);

  function alterAt (letter, word, result) {
      let arr = result.split(“”);
      let i = -1;
      do {
        // i++;
        i = word.indexOf(letter, ++i);
        arr[i] = letter;
      } while (i != -1)
      let joinArr = arr.join(“”);
      checkedResult = joinArr;
    return joinArr;
  }

  // function alterAt ( letter ) {
  //   console.log(letter);
  //   // console.log(n, letter, originalString);
  //   // return originalString.substr(0,n) + letter + originalString.substr(n+1);
  // }

  // function guessLetter (letter, shown, answer) {
  //   var checkIndex=0;
  //   checkIndex = answer.indexOf(letter);
  //   while (checkIndex >= 0){
  //     shown = alterAt (checkIndex, letter, shown);
  //     checkIndex = answer.indexOf(letter, checkIndex + 1);
  //     console.log(letter, shown, answer);
  //   }
  //   return shown;
  // }

    // replaces correctly-guessed letter
  // function show (letter, shown, checkLetter) {
  //   let s = shown.substr(0,checkLetter) + letter + shown.substr(checkLetter+1, shown.length)
  //   return s;
  // }

  // document.getElementById("game-board").innerHTML = underscores;

  // return {
  //   chooseWord: chooseWord,
  //   drawUnderscores: drawUnderscores,
  //   alterAt: alterAt,
  //   guessLetter: guessLetter,
  // }}
)()
