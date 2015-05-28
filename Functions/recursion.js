
function isEven (num) {
  num = Math.abs(num);
  if (num === 0) {
    console.log('Even');
    return (true);
  } else if (num === 1) {
    console.log('Odd');
    return (false);
  }
  num -= 2;
  isEven(num);
}

isEven(-1);