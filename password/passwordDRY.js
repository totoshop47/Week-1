var args = process.argv[2];

function obfuscate(password){
  var nextPassword = "";
  for(var i = 0; i < password.length; i++) {
    var currentCharacter = password[i];
    switch(currentCharacter) {
      case 'a':
        nextPassword += '4';
        break;
      case 'e':
        nextPassword += '3';
        break;
      case 'o':
        nextPassword += '0';
        break;
      case 'l':
        nextPassword += '1';
        break;
      default:
        nextPassword += currentCharacter;
        break;
    }
  }
  return nextPassword;
}

console.log(obfuscate(args));