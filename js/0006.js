/*The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.*/

function sumSquaresTill(number) {
  var res = 0;
  for (var i = 0; i <= number; i++) res+= i*i;
  return res;
}
function squreSumTill(number) {
  var res = 0;
  for (var i = 0; i <= number; i++) res+= i;
  return res * res;
}
function getDiff(number) {
  return squreSumTill(number) - sumSquaresTill(number);
}
getDiff(100);
