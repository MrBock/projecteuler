/*The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?*/

function primecalcer() {
  primes = [];
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
  }
};
function largestPrimeFactor(x) {
  var pc = primecalcer(), i = 3;
  while (x > 0) {
    var diffRes = x / i;
    if (pc.isPrime(i) && diffRes === Math.floor(diffRes)) {
      x = diffRes;
      if (x === 1) return i;
    }
    i += 2;
  }
}
largestPrimeFactor(600851475143);
