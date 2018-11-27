var args = process.argv.slice(2);

var result = "";
function reverse(){
  for(var i = 0; i < args.length; i++) {
    for(var v = args[i].length - 1; v >= 0; v--) {
      result += args[i][v];
    }
    result += '\n'
  }
  return result;
}

console.log(reverse());