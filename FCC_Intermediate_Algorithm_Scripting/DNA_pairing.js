// DNA Pairing

function pairElement(str) {

  var split = str.split('');
  var ans = [];

  for (var i = 0; i < split.length; i++) {
    if (split[i] === 'A') {
      ans.push(["A", "T"]);
    }
    if (split[i] === 'T') {
      ans.push(["T", "A"]);
    }
    if (split[i] === 'C') {
      ans.push(["C", "G"]);
    }
    if (split[i] === 'G') {
      ans.push(["G", "C"]);
    }
  }

  return ans;
}

pairElement("GCG");



/*
DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.push()
String.prototype.split()


pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].


*/
