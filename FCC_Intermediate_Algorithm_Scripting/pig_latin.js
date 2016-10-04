// Pig Latin

function translatePigLatin(str) {
  // pig = ''  // might be an array?
  // vowels = [] // do we need an array of vowels?
 var splitStr = str.split('');
	var patt = /a|e|i|o|u/;
	if (patt.test(splitStr[0])) {
		splitStr.push('way');
		return splitStr.join('');	
	} else {
		var firstChar = splitStr[0];
		splitStr.push(firstChar);
		splitStr.shift();
		for (var i = 0; i < splitStr.length; i++) {
			if (!patt.test(splitStr[i])) {
				var char = splitStr[i];
				splitStr.shift();
				splitStr.push(char);
				}
			splitStr.push('ay');
			return splitStr.join('');
	}
    }
	
};

    
  // pig = ''  // might be an array?
  // vowels = [] // do we need an array of vowels?
  // if str begins with a vowel, 
  // move the first letter to the end
  // append 'ay'
  // return
  
  // else 
    // take first char or group of chars if all consonants
    // append the char or group of chars
    // append 'ay'
    // return 


translatePigLatin("glove");






// Basic Code Solution:

function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = '';
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + 'way';

  } else {

    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}

// test here
translatePigLatin("consonant");


Code Explanation:

Make an empty string to hold your Pig Latin word.
Assign your appropriate regular expression to a variable.
If the first character is a vowel, just add way to end of string and return it.
If the first character is not a vowel:
Find number of consonants before first vowel with help of indexOf(), match() and regex.
Start Pig Latin string with first vowel till the end.
Add letters before first vowel to end of string.
substr() is used for string manipulation here.
Add ay to end of string and return it.








// Intermediate Code Solution:

function translatePigLatin(str) {
  function check(obj) {
      return ['a','i','u','e','o'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj;
  }

  return str.substr(check(0)).concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay');
}

// test here
translatePigLatin("consonant");
:rocket: Run Code

Code Explanation:

This is a declarative as well as recursive approach to this problem.
check() is a function which checks for first letter of string to be in the array of vowels, ['a','i','u','e','o'].
In case of consonants, check() calls itself on the next characters until finding the first vowel.
It'll return the index of whatever it finds to be the last initial consonant i.e., Schmidtsville's would be 3.
Then, letters up until that index are removed from the string and concatenated with either that same chunk of removed string or w accordingly, and then ay regardless.







// Advanced Code Solution:

function translatePigLatin(str) {
    var strArr = [];
    var tmpChar;

    // check if the char is consonant using RegEx
    function isConsonant(char) {
        return !/[aeiou]/.test(char);
    }

    // return initial str + "way" if it starts with vowel
    // if not - convert str to array
    if (!isConsonant(str.charAt(0)))
        return str + "way";
    else
        strArr = str.split("");

    // push all consonats to the end of the array
    while (isConsonant(strArr[0])) {
        tmpChar = strArr.shift();
        strArr.push(tmpChar);
    }
 // convert array to string and concatenate "ay" at the end  
 return strArr.join("")+"ay";
}

// test here
translatePigLatin("consonant");
:rocket: Run Code

Code Explanation:

isConsonant() is used to check if a character is a consonant.
If first character is vowel, add way to end of string and return it.
If first character is not a vowel:
Split string into array using split().
Push all consonants to end of array with help of shift() and push().
Convert array to string using join() and add ay to end of string. Return it.






/*
Pig Latin 
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.indexOf()
Array.prototype.push()
Array.prototype.join()
String.prototype.substr()
String.prototype.split()



translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".

*/
