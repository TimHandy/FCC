/// truncate a lengthy string with '...' if longer than num. This works but is fugly. Needs refactoring to if else if, else.

function truncateString(str, num) {
    if (num <= 3) {
        if (str.length > num) {
            truncated = str.substr(0, num) + "..."; // could also use .slice
            return truncated;
        }
    }
    if (str.length > num) {
        truncated = str.substr(0, num - 3) + "...";
        return truncated;
    }
    if (str.length = num || str.length > num) {
        return str;
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

Advanced solution:
function truncateString(str, num) {
    if (str.length <= num) {
        return str;
    } else {
        return str.slice(0, num > 3 ? num - 3 : num) + '...'; // uses a ternary mid-expression
    }
}

// The slice method extracts a section of a string and returns a new string. Here we pass 0 as the starting point for our slice. To determine the endpoint, we use a ternary operator: num > 3 ? num - 3 : num. In our ternary, if num is larger than 3, we must factor in the three dots to our total length, and thus we end our slice at num-3. If num is less than or equal to 3, our slice gets an end variable of just num. Finally, the '...' is appended to the end of our new string and is returned.


/*
Truncate a string 
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.slice()



truncateString("A-tisket a-tasket A green and yellow basket", 11) should return "A-tisket...".
truncateString("Peter Piper picked a peck of pickled peppers", 14) should return "Peter Piper...".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-", 1) should return "A...".
truncateString("Absolutely Longer", 2) should return "Ab...".

*/
