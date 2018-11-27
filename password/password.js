var args = process.argv.slice(2);

var password = "";
function obfuscate(){
  for(var i = 0; i < args.length; i++) {
    if(args[i] === 'a') {
      password += '4';
    } else if(args[i] === 'e') {
      password += '3';
    } else if(args[i] === 'o') {
      password += '0';
    } else if(args[i] === 'l') {
      password += '1';
    } else {
      password += args[i];
    }
  }
  return password;
}

console.log(obfuscate());






