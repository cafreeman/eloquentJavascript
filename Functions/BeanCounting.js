
function countBs (str) {
  var numBs = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == "B") {
      numBs++;
    }
  }
  return numBs;
}

console.log(countBs("BoB"));

function countChar(str, char) {
  var numChar = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == char) {
      numChar++;
    }
  }
  return numChar;
}

console.log(countChar("abcdedfhigh", "h"));