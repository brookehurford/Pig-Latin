var pigLatin = function(word) {
  var splitWord = word.split("");
  var vowelArray = ["a", "e", "i", "o", "u"]

  for (var i = 0; i < vowelArray.length; i++) {
    if (splitWord[0] === vowelArray[i]) {
      return (word + "ay");
    }
  }
  for (var i = 0; i < vowelArray.length; i++) {
    if (splitWord[0] !== vowelArray[i]) {
      if (splitWord[1] !== vowelArray[i]) {
        return (word.slice(2) + word.slice(0,2) + "ay");
      }
    return (word.slice(1) + word.slice(0,1) + "ay");
    }
  }
}




//   if (array[0] === "a" || array[0] === "e" || array[0] === "i" || array[0] === "o" || array[0] === "u") {
//   return (word + "ay");
//   }
//   else if (array[0] !== "a" && array[1] !== "a" || array[0] !== "e" && array[1] !== "e" || array[0] !== "i" && array[1] !== "i" || array[0] !== "o" && array[1] !== "o") {
//   return (word.slice(2) + word.slice(0,2) + "ay");
//   }
//   else if (array[0] !== "a" || array[0] !== "e" || array[0] !== "i" || array[0] !== "o" || array[0] !== "u") {
//   return (word.slice(1) + word.slice(0,1) + "ay");
//   }
// }
