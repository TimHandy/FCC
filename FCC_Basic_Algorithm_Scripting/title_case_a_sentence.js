// Title Case a Sentence

function titleCase(str) {  // str is the string we pass in as the argument
  var strSplit = str.toLowerCase().split(" ");  // first make the string all lowercased, then split the string into individual words
  var titled = strSplit.map(function(val){  // then map to a new array of words based on the function where each word (val)...
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());   //... has it's 0 character replaced with an uppercased version. Notice there is no loop construct required because .map is used to do something to each entry.
  });
  return titled.join(" ");  // then the new mapped array is joined back together and returned.
}

titleCase("I'm a little tea pot");


/*
Title Case a Sentence 
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.split()


titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".

*/
