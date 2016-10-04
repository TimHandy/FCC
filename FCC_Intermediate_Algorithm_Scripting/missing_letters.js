// Missing Letters

function fearNotLetter(str) {
    strArr = str.split('');
    for (var i = 0; i < str.length - 1; i++) {  // length minus one as if we get to the last char we can stop
        if (str.charCodeAt(i) + 1 !== str.charCodeAt(i + 1)) {    // if the unicode value +1 is not the same as the next char along, then they're not consecutive chars, and so we need to return the next missing char
            var strCode = str.charCodeAt(i) + 1;    // find the next charcode
            var strChar = String.fromCharCode(strCode); // convert that back to a string char
            return strChar;
        }
    }
}

fearNotLetter("abce");



/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()

fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("bcd") should return undefined.
fearNotLetter("yz") should return undefined.

*/




Basic Code Solution:
function fearNotLetter(str) {

  for(var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
    hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {

      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

// test here
fearNotLetter("abce");

Code Explanation:

This solutions makes use of a for loop.
Code of encountered character is stored in code.
It is checked if code of current character is the expected one (no characters are skipped) by using the logic - code of current character = code of first character + number of iterations.
If a character is missing, the missing character is found and the final string is returned.
undefined is returned if there is no missing character in the string.








Intermediate Code Solution:
// Adding this solution for the sake of avoiding using 'for' and 'while' loops.
// See the explanation for reference as to why. It's worth the effort.

function fearNotLetter(str) {
  var compare = str.charCodeAt(0), missing;

  str.split('').map(function(letter,index) {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

// test here
fearNotLetter("abce");


Code Explanation:

First we define variables to store the character code for the first letter in the string, and to store whatever missing letters we may find.
We turn the string to an array in order to map through it instead of using for and while loops.
As we map through our letters' character codes, we go comparing with the one that should be in that position.
If the current letter matches, we move the comparison variable to its next position so we can compare on the next cycle.
If not, the missing letter will be assigned to the missing variable, which will be returned after the map is finished.
If there are no missing characters, return undefined.
