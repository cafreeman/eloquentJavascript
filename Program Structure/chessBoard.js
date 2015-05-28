
function makeRow(prevRow) {
  if (prevRow[0] === "#") {
    row = " # # # #";
  } else {
    row = "# # # #";
  }
  return(row);
}

function chessRow(size) {
  var row = "# # # # ";
  for (var i = 0; i < size; i ++) {
    var newRow = makeRow(row);
    console.log(newRow);
    row = newRow;
  }
}

chessRow(8);