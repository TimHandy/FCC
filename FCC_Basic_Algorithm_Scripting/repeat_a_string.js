// Return a string multiplied by num times
function repeatStringNumTimes(str, num) {
  var newStr = "";  // decalare a new string value
  for (var i = 0; i < num; i++) {   // loop through the number of times defined by num
    newStr += str;    //append str to newStr
  }
  return newStr;    //return newStr
}

repeatStringNumTimes("abc", 3);

// An advanced method:
function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';    // Ternary using the .repeat method. if num greater than 0, str.repeat that number, else return nothing
}

repeatStringNumTimes("abc", 3);



/*
Repeat a string repeat a string 
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Global String Object




repeatStringNumTimes("*", 3) should return "***".
repeatStringNumTimes("abc", 3) should return "abcabcabc".
repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
repeatStringNumTimes("abc", 1) should return "abc".
repeatStringNumTimes("*", 8) should return "********".
repeatStringNumTimes("abc", -2) should return "".

*/
