// Binary Agents

function convertBinary(num) {
  return parseInt(num, 2);	// parseInt will convert numbers to other numbers. In this one we tell it to convert the number using base 2 (binary, 0s and 1s). 
}

function convertNumtoLetter(num) {
  return String.fromCharCode(num);	// fromCharCode will convert an ascii? character code number to it's corresponding letter of the alphabet.
}

function binaryAgent(str) {
  return str.split(" ")	// split the string into an array of 8 bit values based on the spaces in the text
            .map(convertBinary)		// call map with the convertBinary function on each value. Not sure how convertBinary knows to use the value for 'num' ? I just half-wrote it expecting to have to reference num somewhere in map but it just worked! 
            .map(convertNumToLetter)		// call convertNumToLetter on each value. Same with this...how did it know the value passed was suppossed to be used as num?
            .join('');	// join the values back together
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");




Basic Code Solution:

function binaryAgent(str) {
  biString = str.split(' ');
  uniString = [];

/*using the radix (or base) parameter in parseInt, we can convert the binary
  number to a decimal number while simultaneously converting to a char*/

   for(i=0;i < biString.length;i++){
   uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }
//we then simply join the string
  return uniString.join('');
}

// test here
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


Code Explanation:

Separate the string into an array of strings separated by whitespace.
Create some variables that will be needed along the way, the names are self explanatory for the most part.
Iterate through each binary string in the new array.
Convert to decimal by using parseInt(binary, 2) (with the second parameter we tell in which base our numbers currently are)
At the end, we return out converted message.




Intermediate Code Solution:

function binaryAgent(str) {
  // Separate the binary code by space.
  str = str.split(' ');
  var power;
  var decValue = 0;
  var sentence = '';

  // Check each binary number from the array.
  for (var s = 0; s < str.length; s++) {
    // Check each bit from binary number
    for (var t = 0; t < str[s].length; t++) {
      // This only takes into consideration the active ones.
      if (str[s][t] == 1) {
        // This is quivalent to 2 ** position
        power = Math.pow(2, +str[s].length - t - 1);
        decValue += power;

        // Record the decimal value by adding the number to the previous one.
      }
    }

    // After the binary number is converted to decimal, convert it to string and store
    sentence += (String.fromCharCode(decValue));

    // Reset decimal value for next binary number.
    decValue = 0;
  }

  return sentence;
}

// test here
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


Code Explanation

For each of these binary strings, check for the ones and ignore the zeroes.
For those that are one or active then convert them to decimal, this takes into account the position and the right power it needs to be raised to.
Store the power into the power variable by adding it to any previous ones on the variable decValue. This variable will add and add the powers of the active ones until the end of the loop and then return the decimal number.
Convert the final decimal outside of the inner loop and then convert it to ASCII and saving it to sentence along with any other text string already converted and stored.
Reset the variable decValue to avoid getting wrong decimals before continuing to the outer loop.
Relevant Links

Math.pow
String.length
Link Title 3




Advanced Code Solution:

function binaryAgent(str) {
  return String.fromCharCode(...str.split(" ").map(function(char){ return parseInt(char, 2); }));
}

// test here
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

Code Explanation

First we use split() to be able to work on each character as an Array element
Then use map() to process each element from binary to decimal using pareseInt()
Last we can use String.fromCharCode() to convert each ASCII number into the corresponding character
However fromCharCode() expects a series of numbers rather than an Array! We can use ES6 Spread Operator to pass in an Array of numbers as individual numbers. See here for more info; Spread Operator





/*
Return an English translated sentence of the passed binary string.

The binary string will be space separated.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()



binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return "Aren't bonfires fun!?"
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return "I love FreeCodeCamp!"




*/
