// Wherefore art thou


function whatIsInAName(collection, source) {
  //var arr = [];
  //var keys = Object.keys(sourceObject);

  var arr = collection.filter(function(item){   // filter expects a boolean true to keep the value
    for (var i in source) {     // for every item in source...
      if (source[i] != item[i] ) {    // if that property does not match the item's property of the same name, ie. it has to be there and match, then return false, and discard the item.
        return false;
      }
    }
    return true;  // otherwise return true and keep the object from collection.
  });

  return arr;
}




whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });





// Alternate method - the one above seems the best, simplest to understand:

function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);

  return collection.filter(function(object) {   // return a filtered collection of the objects to keep
    return srckeys.every(function(key) {    // filter expects a true/false, true to keep the object, false to discard
      return object.hasOwnProperty(key) && obj[key] === src[key];   // .every returns true if ALL iterations are true
    });
  });
}







/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Global Object
Object.prototype.hasOwnProperty()
Object.keys()



whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) should return [{ "a": 1, "b": 2, "c": 2 }].


*/
