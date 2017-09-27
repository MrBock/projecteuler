/*The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.*/

function primecalcer() {
  var primes = [2];
  var biggestPrime = 2;
  return {
    isPrime: function(x) {
      //if (x % 2 === 0) return false;
      for (var i in primes) {
        if (x % i === 0) return false;
      }
      var start = biggestPrime + 1;
      for (var i = start; i < x; i+=2) {
        if (x % i === 0) return false;
      }
      biggestPrime = x;
      primes.push(x);
      return true;
    }
    ,getPrimes: function() {return primes}
    ,foundPrimesCount: function() {return primes.length}
    ,getLargestFoundPrime: function() {return primes[primes.length-1]}
  }
};

function getPrimeSum(x) {
  var pc = primecalcer();
  var sum = 2;
  for (var i = 3; i < x; i+=2) {
    if (pc.isPrime(i)) {
      sum += i;
      console.log(sum, i)
    }

  }
  return sum; //pc.getPrimes().reduce(function(pv, cv) { return pv + cv; }, 0);
}

console.log(getPrimeSum(10));
