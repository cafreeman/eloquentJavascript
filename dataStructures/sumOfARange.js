
function range(start, end, step) {
  var res = [];
  if (step == undefined) step = 1;
  if (step > 0) {
    for (var i = start; i <= end; i += step) {
      res.push(i);
    }
  } else {
    for (var i = start; i >= end; i += step){
      res.push(i);
    }
  }
  return res;
}

//console.log(range(1, 10));

function sum(nums) {
  var res = 0;
  for (var i = 0; i < nums.length; i++) {
    res += (nums[i]);
  }
  return res;
}

//console.log(sum(range(1, 10, -1)));

console.log(range(10, 1, -3));