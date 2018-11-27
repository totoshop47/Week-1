/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

 // a custom function written by you (you must define it too!)
var concepts = joinList(conceptList);

function joinList(string){
  var result = "";
  for(var i = 0; i < string.length; i++) {
    if(i !== string.length - 1) {
      result += string[i]+", ";
    } else {
      result += string[i];
    }
  }
  return result;
}

// Write your code here...

console.log("Today I learned about " + concepts + ".");

