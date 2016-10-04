// Factorialize a Number:
// Factorial of 5 is 1 * 2 * 3 * 4 * 5 = 120
function factorialize(num) {
  var ans = 1;  // start at 1 because the first number needs a 1 in calculation
  for (var i = 2; i < (num + 1); i++) {  // start i at 2 as the first calc in all factorials is 1 * 2. Num + 1 is because we didn't start at 0 with the numbering of i.
    ans = ans * i;
  }
  return ans;
}
factorialize(5);  // => 120

// This can also be done with Recursion:
function factorialize(num) {
  if (num === 0) { return 1; }  // a condition to catch the 0. Recursion will stop because of the return statement, it will jump out of the recursion.
  return num * factorialize(num-1);   //
}

factorialize(5);

/*
Examplanation of the recursion above:

Understanding the flow

The first returned value can be visualized better if you think about those parenthesis operations you did in secondary school where you do the math inside every parenthesis from inside out, bracket and square bracket until you get a final result (a total). This time it's the same thing, look at the program flow:

During the first execution of the function:

[num = 5]

Is 5 equal to 1 or 0? No ---> Oki doki, let's continue...

Returns:

(5 (_second execution: 4 (_third execution: 3 (_fourth execution: 2 __fifth execution_: 1))))

What it returns can be viewed as (5*(4*(3*(2*1)))) or just 5 * 4 * 3 * 2 * 1, and the function will return the result of that operation: 120. Now, let's check what the rest of the executions do:

During the rest of the executions:

Second Execution: num = 5-1 = 4 -> is num 0 or 1? No
--> return the multiplication between 4 and the next result when num is now 4-1.

Third Execution: num = 4 - 1 = 3 -> is num 0 or 1? No
--> return the multiplication between 3 and the next result when num is now 3-1.

Fourth Execution: num = 3-1 = 2 -> is num 0 or 1? No
--> return the multiplication between 2 and the next result when num is now 2-1.

Fifth Execution: num = 2-1 = 1 -> is num 0 or 1? Yep
--> return 1. And this is where the recursion stops because there are no more executions.

Got it? ;)
*/

