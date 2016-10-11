// Arguments Optional


function addTogether(...args) {		// use the rest operator to grab all args
  if ( args.some(el => typeof el !== 'number') ) {		// if any of the args are not a number
      return undefined;		// return undefined
  } else if (args.length === 1) {		// else if only one arg provided...
    return function(num) {		// return a function... the function has closed over the num value. It's a closure.
      if (typeof num !== 'number') {		// this returned function also checks that any args passed (ignores? more than one arg passed?)
        return undefined;		// returns undefined if the arg in the second set of parens is not a number... eg. addTogether(2)("potato"). 
      }
      return 2 + num;		// therefore if expected input is addTogether(num)(num)
    };
  } else {
  return args[0] + args[1];		// else if expected input is addTogether(num, num)
  } 
}

addTogether(2,3);






Basic Code Solution:

function addTogether() {
  // Function to check if a number is actually a number
  // and return undefined otherwise.
  var checkNum = function(num) {
    if (typeof num !== 'number') {
      return undefined;
    } else
      return num;
  };

  // Check if we have two parameters, check if they are numbers
  // handle the case where one is not
  // returns the addition.
  if (arguments.length > 1) {
    var a = checkNum(arguments[0]);
    var b = checkNum(arguments[1]);
    if (a === undefined || b === undefined) {
      return undefined;
    } else {
      return a + b;
    }
  } else {
    // If only one parameter was found, returns a new function that expects two
    // Store first argument before entering the new function scope
    var c = arguments[0];

    // Check the number again, must be outside the function to about returning an object
    // instead of undefined.
    if (checkNum(c)) {
      // Return function that expect a second argument.
      return function(arg2) {
        // Check for non-numbers
        if (c === undefined || checkNum(arg2) === undefined) {
          return undefined;
        } else {
          // if numbers then add them.
          return c + arg2;
        }
      };
    }
  }
}

// test here
addTogether(2,3);


Code Explanation:

First, I create a function with the sole purpose of checking if a number is actually a number and returns undefined if it is not. It uses typeof to check.
Check if we have two parameters, if so, then check if they are numbers or not using the checkNum function I created.
If they are not undefined then add them and return the addition. If they any of them is undefined then return undefined.
In the case that we only have one argument, then we return a new function that expects two parameters. For this we store the first argument before going into a new scope to avoid our arguments being overwritten.
Still inside the big else, we need to check the argument we saved, if it is a number then we return the function expecting a second argument.
Now inside the function we are returning, we have to check for non numbers again just as at the beginning using checkNum if undefined then return that, otherwise if numbers add them and return the addition.





Intermediate Code Solution:

function addTogether() {
  var args = new Array(arguments.length);
  //Storing the arguments in an array
  for(var i = 0; i < args.length; ++i) {
      args[i] = arguments[i];
    }
 //Check for the arguments length
 if(args.length == 2){
    //If there are two arguments,check for the type of both arguments
    //Use typeof to check the type of the argument(both should be numbers)
    if(typeof args[0] !== 'number' || typeof args[1] !=='number' ){
      return undefined;
      }
    return args[0]+args[1];
   }
 //When only one argument is provided
 if(args.length == 1){
     a= args[0];
     //Check the  argument using typeof 
    if(typeof a!=='number'){
        return undefined;
      }
    else{
       //Making use of closures 
       return function(b){
       //Checking the second argument 
         if(typeof b !=='number'){
           return undefined;
           }
         else
           return a+b;
          };
      }
    }
}

// test here
addTogether(2,3);

Code Explanation:

First store the arguments in an array by creating an array using the constructor method.
Adds each argument to the new array.
Then check for the length of the new array as we need to know if we have enough or not.
Check for the type of the arguments using typeof as they both should be numbers.
Returns undefined if any of them is not a number, or returns the sum of them if they are.
If there was only one argument, we still check the type after storing it in a new variable and returning a new function or undefined.




Advanced Code Solution:

//jshint esversion: 6
function addTogether() {
  var args = Array.from(arguments);
  return args.some(n => typeof n !== 'number') ? 
    undefined: 
    args.length > 1 ?
      args.reduce((acc, n) => acc += n, 0):
      (n) => typeof n === "number" ? 
        n + args[0]:
        undefined;
}

// test here
addTogether(2,3);

Code Explanation:

First I iterate through the arguments and check for arguments that are not a number and return undefined
If it's not I then check if the arguments length is above 1, if it is I sum the arguments using Array.prototype.reduce
Else I return a function that checks if the passed in argument is a number and sum it, if not return undefined





/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

!!! TIM: NOTICE THAT THE TEST CASES ARE CALLED WITH DOUBLE SETS OF PARENS. THIS MEANS THAT THE RETURNED FUNCTION IS IMMEDIATELY CALLED.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Closures
Arguments object


addTogether(2, 3) should return 5.
addTogether(2)(3) should return 5.
addTogether("http://bit.ly/IqT6zt") should return undefined.
addTogether(2, "3") should return undefined.
addTogether(2)([3]) should return undefined.

*/
