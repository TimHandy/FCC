// Check for Palindromes

function palindrome(str) {
  var cleanStr = str.toLowerCase().replace(/[\W_]+/g, "");  // clean the string: lowercase, remove all non alphnumeric and underscore.
  var reverseCleanStr = cleanStr.split('').reverse().join('');  // need to split to an array before you can reverse!!, then reverse the chars, then join back.
  return (cleanStr === reverseCleanStr)  // compare the two strings, return true if a palindrome, or false if not.
}

palindrome("esye");


// Another way:
function palindrome(str) {
  return str.replace(/[\W_]/g, '').toLowerCase() ===    // this will return true/false without the explicit return statement.
         str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

// We start by using regular expressions to replace any white space or non-alphanumeric characters with nothing (or null), which essentially removes them from the string.

// Next we chain .toLowerCase() to remove any capital letters because A is a different character than a. The problem did not ask us to worry about making sure the case of the characters was identical, just the spelling.

// Our next step is to take our string and .split() it, .reverse() it, and finally .join() it back together.

// Last step is to check that the string is the same forwards and backwards and return our result!


/*
Check for Palindromes 
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

*/
