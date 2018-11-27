var args = process.argv.slice(2);

var result = "";

function pigLatin(){
  for(var i = 0; i < args.length; i++) {
    var first = args[i][0];
    for(var v = 1; v < args[i].length; v++) {
      result += args[i][v];
    }
    result += first + "ay ";
  }
  return result;
}

console.log(pigLatin());