var vowelArray = ["a", "e", "i", "o", "u"];
var vowells = function(letter) {
var result;

  for (var i = 0; i < vowelArray.length; i++) {
    if (letter === vowelArray[i]) {
      result = true;
    }
  }
  if (result === undefined) {
    return false;
  }
  return result;
}

var letterQU = function(word) {
  var splitWord = word.split("");
  if ((vowells(splitWord[0]) === "q") && (vowells(splitWord[2]) === "u")) {
    console.log(splitWord[2])
    var result = true;
    return result;
  }
}

var consanants2 = function(word) {
  var splitWord = word.split("");
  var result = 0;
  if ((vowells(splitWord[0]) === false) && (vowells(splitWord[1]) === false)) {
    var result = true;
    return result;
  }
}

var consanants = function(word) {
  var splitWord = word.split("");
  if (vowells(splitWord[0]) === false) {
    return true;
  }
}



var pigLatin = function(word) {
  var splitWord = word.split("");
  console.log((splitWord[0]));
  if (vowells(splitWord[0]) === true) {
    return (word + "ay");
  }
  else if (letterQU(word) === true) {
    return (word.slice(2) + word.slice(0,2) + "ay");
  }
  else if (consanants2(word) === true) {
    return (word.slice(2) + word.slice(0,2) + "ay");
  }
  else if (consanants(word) === true) {
    return (word.slice(1) + word.slice(0,1) + "ay");
  }
}
