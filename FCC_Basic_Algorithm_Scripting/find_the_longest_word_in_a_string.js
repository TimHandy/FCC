// Find the Longest Word in a String 

// Find the longest word in a string
function findLongestWord(str) {
  var longestWord = "";  // notice the counter is inside the function
  var words = str.split(" ");  // split the string into individual words
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestWord) {  // for each word compare to the longestWord so far...
      longestWord = words[i].length;  // ...If longer replace the number of letters in that word with the current value of longestWord
    }
  }
  return longestWord; // return the value of longestWord
  }

findLongestWord("May the force be with you");



// Find the longest word in a string and return the number of letters in it
function findLongestWord(str) {
  var words = str.split(' ').sort(function(a, b) {    // Split the string into words and sort...
  	return b.length - a.length;    // ... by largest to smallest. Notice we're returning inside the function callback.
  });   // notice: end paren goes here to close the sort parameters.
  return words[0].length;   // the 0th entry must now be the longest. Hit it with the length, and job done.
  // talking to the guys at Hack Night they said that it's not an efficient solution for very very long strings of words as it will use more memory to hold it all.
}

findLongestWord("The quick brown fox jumped over the lazy dog");

// A better way
function findLongestWord(str) {
  var words = str.split(' ');
  var maxLength = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}

// An intermediate way of doing the above... ehh???????
function findLongestWord(s) {
  return s.split(' ')
    .reduce(function(x, y) {
      return Math.max(x, y.length)
    }, 0);
}


/*
Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.split()
String.length


findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
findLongestWord("May the force be with you") should return 5.
findLongestWord("Google do a barrel roll") should return 6.
findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.
*/
