/*By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?*/


function primecalcer() {
  primes = [2];
  return {
    isPrime: function(x) {
      if (x % 2 === 0) return false;
      for (var i in primes) {
        if (x % i === 0 && i != 1) return false;
      }
      var start = primes.length > 1 ? primes[primes.length-1] + 1 : 3
      for (var i = start; i < x-1; i+=2) {
        if (x % i === 0) return false;
      }
      primes.push(x);
      return true;
    }
    ,getPrimes: function() {return primes}
    ,foundPrimesCount: function() {return primes.length}
    ,getLargestFoundPrime: function() {return primes[primes.length-1]}
  }
};

function getPrimeNumber(x) {
  var pc = primecalcer();
  for (var i = 3; true; i+=2) {
    pc.isPrime(i);
    if (pc.foundPrimesCount() === x) return pc.getLargestFoundPrime()
  }
}

getPrimeNumber(10001);
