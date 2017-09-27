/*A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.*/

function isPalindrome(number) {
  var s = Number(number).toString()
  var reverseS = s.split("").reverse().join("");
  return  s === reverseS;
}

function getLargestPalindromeTillNumber(number) {
  var foundPalindromes = [];
  for (var i = number; i > 0; i--)
    for (var j = number; j > 0; j--)
      if (isPalindrome(i*j)) {
        foundPalindromes.push({
          n: i*j
          ,i: i
          ,j: j
        });
      }
  return foundPalindromes.sort(function(b,a) {return a.n - b.n});
}

getLargestPalindromeTillNumber(1000);
