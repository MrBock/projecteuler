/*A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.*/

function isPythagoreanTriplet(a,b,c) {
  return a*a + b*b === c*c;
}
function getC(a,b) {
  return Math.sqrt(a*a + b*b);
}
function getSum(a,b,c) {
  return a+b+c;
}
function getProduct(a,b,c) {
  return (a * b) * c;
}
function isTargetTriangle(a,b, sum) {
  var c = getC(a,b);
  return getSum(a,b,c) === sum;
}
function findPythagoreanTriplet(sum) {
  var a = 1; b = 1;
  while (true) {
    for (var i = b; i < sum; i++) if (isTargetTriangle(a,i,sum)) {
      c = getC(a,i);
      b = i;
      return {
        a:a,
        b:b,
        c:c,
        product: getProduct(a,b,c),
        sum: getSum(a,b,c)
      };
    }
    a++; b++;
  }

}

findPythagoreanTriplet(1000).product;
//{a: 200, b: 375, c: 425, product: 17000000, sum: 1000}
