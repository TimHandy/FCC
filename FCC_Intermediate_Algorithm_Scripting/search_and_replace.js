// Search and Replace

function myReplace(str, before, after) {
    // find 'before' in str and note its index?
    // determine if before is titlecase and
    // replace with after

    var splitString = str.split(' ');
    var beforeIndex = splitString.findIndex(function(el) { // could have used indexOf here. Would have been shorter:   splitString.indexOf(after)
        return el === before;
    });

    if (splitString[beforeIndex][0] === splitString[beforeIndex][0].toUpperCase()) {  // if first letter is the same as first letter in uppercase
        var replacementWord = after[0].toUpperCase() + after.slice(1);      // take the first letter of after and upper case it, concatenate with the rest of the word, i.e first letter sliced off.
    } else {
        var replacementWord = after;
    }


    console.log('splitString: ', splitString);
    splitString.splice(beforeIndex, 1, replacementWord);        // replace the word at the correct index. Note that this is a statement on it's own and couldn't be strung together with .join for some reason?! Just didn't work. Could have been easier if used .replace(before, replacementWord)
    return splitString.join(' ');

}




myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");



/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.splice()
String.prototype.replace()
Array.prototype.join()



myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
myReplace("His name is Tom", "Tom", "john") should return "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".

*/
