// Mutations

// find out if one string is missing letters in another string
function mutation(arr) {  // the array has two entries, the target word, and the test word.
  var test = arr[1].toLowerCase();    // make both lowercase so they can be compared
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {   // loop through the test string letters
    if (target.indexOf(test[i]) < 0)    // if any of the test letters are NOT found, our implementation returns false. indexOf returns -1 if the value is not found.
      return false;
  }
  return true;  // else if all are found it returns true
}
mutation(["hello", "hey"]);   // false

// Intermediate solution to the same, note the .every function and splitting of the .methods onto separate lines:
function mutation(arr) {
  return arr[1].toLowerCase()   // grab the second string from the array, lower case it, ...
    .split('')  // ... split it into an array of letters
    .every(function(letter) {   // use .every and .indexOf to make sure that every letter is found in the string, i.e. indexOf is NOT -1.
      return arr[0].toLowerCase()
        .indexOf(letter) != -1;
    });
}
mutation(["hello", "hey"]);   // false


/*
Mutations 

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.indexOf()



mutation(["hello", "hey"]) should return false.
mutation(["hello", "Hello"]) should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
mutation(["Mary", "Army"]) should return true.
mutation(["Mary", "Aarmy"]) should return true.
mutation(["Alien", "line"]) should return true.
mutation(["floor", "for"]) should return true.
mutation(["hello", "neo"]) should return false.
mutation(["voodoo", "no"]) should return false.

*/
