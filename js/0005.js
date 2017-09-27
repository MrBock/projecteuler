/*2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?*/

function getSmallestNumberDividable(upperEnd) {
  var res = 1;
  while (true) {
    var checkDi = true;
    for (var i = 1; i <= upperEnd; i++) {
      if (res % i !== 0) {
        checkDi = false;
        break;
      }
    }
    if (!!checkDi) return res;
    res++;
  }
}

getSmallestNumberDividable(20);
