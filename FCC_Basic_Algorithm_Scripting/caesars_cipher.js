// Caesars Cipher 

// You need to write a function, which will take a string encoded with Caesar cipher as a parameter and decode it.
// The one used here is ROT13 where the value of the letter is shifted by 13 places. e.g. 'A' ↔ 'N', 'T' ↔ 'G'.
// You have to shift it back 13 positions, such that 'N' ↔ 'A'.

function rot13(str) {
  decyphered = [];   // split the str into an array

  splitString = str.split('');

  for (var i = 0; i < splitString.length; i++) {   // iterate through str
    var char = splitString[i];    // split str into array of chars
    if ( char.match(/[A-Z]/) ) {     // if char is a letter. Could also have done without regex by converting direct to unicode then checking if value was between a range to verify whether an A-Z char.
      var unicode = ( char.charCodeAt(0) - 13 );  // convert the letter to its unicode value and shift 13 letters down
        if (unicode < 65) unicode += 26;   // if unicode letter drops below 65 (character A), shift the unicode val back to the far end of the alphabet, i.e. rotate back round
      var decypheredChar = String.fromCharCode(unicode);  // convert the decyphered unicode val back to it's alphabetical letter
      decyphered.push(decypheredChar);  // push the decyphered letter to the decyphered array
    } else {
        decyphered.push(char); // else if char is any other char, just add the char to the array
    }
  }
  return decyphered.join('');
}

// Change the inputs below to test. Must be all-caps!
rot13("!SERR PBQR PNZC!");  // !FREE CODE CAMP!
rot13("LBH QVQ VG!");   // YOU DID IT





/*
Caesars Cipher 

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()


rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!") should decode to "FREE PIZZA!"
rot13("SERR YBIR?") should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."

*/
