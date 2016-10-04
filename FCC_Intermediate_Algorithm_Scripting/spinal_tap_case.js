// Spinal Tap Case

function spinalCase(str) {
  return str
   .replace(/([a-z])([A-Z])/g, '$1-$2')
   .replace(/\s|_/g, '-')
   .toLowerCase();
}

spinalCase('thisIsSpinalTap');
spinalCase('This Is Spinal Tap');


/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
String.prototype.replace()


spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".

*/


Basic Code Solution:
function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}

// test here
spinalCase('This Is Spinal Tap');




Intermediate Code Solution:
function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Split on whitespace and underscores and join with dash
  return str.toLowerCase().split(/(?:_| )+/) .join('-');
}

// test here
spinalCase('This Is Spinal Tap');
:rocket: Run Code

Code Explanation:

Similar to the first solution, the first replace() puts a space before any encountered uppercase characters in the string str so that the spaces can be replaced by dashes later on.
Instead of using replace() here to replace whitespace and underscores with dashes, the string is split() on the regular expression /(?:_| )+/ and join()-ed on -.
