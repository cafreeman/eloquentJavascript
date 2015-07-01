
function reverseArray (arr) {
  var res = [];
  //var arrLen = arr.length;
  for (var i = 0; i <= (arr.length + 1); i++) {
    res.push(arr.pop());
  }
  return res;
}

var testArr = [1,2,3,4,5];

//console.log(reverseArray(testArr));

function reverseArrayInPlace (arr) {
  for (var i = 0; i < Math.floor(arr.length/2); i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
  return arr;
}

console.log(reverseArrayInPlace(testArr));