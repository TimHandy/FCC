// Confirm the Ending

// Given a str and a target string, confirm that the ending of the string matches the target string
function confirmEnding(str, target) {
  var strLastChars = str.substr(str.length - target.length);   // use substr to find the string length, and store the last number of chars equal to the length of the target string
  return strLastChars === target;    // compare the last chars of the string with the target
}

confirmEnding("Bastian", "ian");  // will compare the last three chars of Bastian with ian.
// => true

can be refactored to:
function confirmEnding(str, target) {
  return str.substr(str.length - target.length) === target;
}

confirmEnding("Bastian", "ian");

or even shorter:
function confirmEnding(str, target) {
  return str.substr(-target.length) === target; // target.length, then add a minus symbol will return the substring from -target.length from end of string, to the end of the string.
}

confirmEnding("Bastian", "ian");

// We start by using regular expressions to replace any white space or non-alphanumeric characters with nothing (or null), which essentially removes them from the string.

// Next we chain .toLowerCase() to remove any capital letters because A is a different character than a. The problem did not ask us to worry about making sure the case of the characters was identical, just the spelling.

// Our next step is to take our string and .split() it, .reverse() it, and finally .join() it back together.

// Last step is to check that the string is the same forwards and backwards and return our result!


/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.substr()
String.prototype.substring()


confirmEnding("Bastian", "n") should return true.
confirmEnding("Connor", "n") should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
confirmEnding("He has to give me a new name", "name") should return true.
confirmEnding("Open sesame", "same") should return true.
confirmEnding("Open sesame", "pen") should return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
Do not use the built-in method .endsWith() to solve the challenge.

*/
