// Sum All Primes

function sumPrimes(num) {
    sum = 0;	// to store the total of adding the found primes together
    for (var i = 2; i <= num; i++) {	// loop through all numbers starting at 2 (don't care about the number 1, it's not a prime) up to and including the num value being tested
        for (var j = 2; j <= i; j++) {	// for each incrementing i being tested in the outer loop, loop through all numbers from 2 up to that outer number and do the following...
            if (i === j) { 	// (read the below IF first). Then, if it didn't break out... we've tried to divide by every number from 2 up to itself (because i is now === j) and not found a divisible number, therefore that number is a prime; add it to the total.
                sum += i;	
            }
            if (i % j === 0) {	// for each outer loop number from 2 up to the value of i, i.e. we're testing i and seeing if it's divisible exactly by j, where j is every number from 2, up to the particular iteration value of i we're looking at and if it is... bad news, it's not a prime and we don't want it; break out of that iteration, i++ and try the next iteration of i. This IF has to come after the first IF, otherwise sum += i would not get called. 
// Someone in a forum mentioned that an isPrime function might make things a little more understandable here.
                break;
            }
        }
    }
  return sum;
}

sumPrimes(10);


/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.

*/
