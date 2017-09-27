/*If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters.
The use of "and" when writing out numbers is in compliance with British usage.*/

var words = {
  1: 'one'
  ,2: 'two'
  ,3: 'three'
  ,4: 'four'
  ,5: 'five'
  ,6: 'six'
  ,7: 'seven'
  ,8: 'eight'
  ,9: 'nine'
  ,10: 'ten'
  ,11: 'eleven'
  ,12: 'twelve'
  ,13: 'thirteen'
  ,14: 'fourteen'
  ,15: 'fifteen'
  ,16: 'sixteen'
  ,17: 'seventeen'
  ,18: 'eighteen'
  ,19: 'nineteen'
  ,20: 'twenty'
  ,30: 'thirty'
  ,40: 'forty'
  ,50: 'fifty'
  ,60: 'sixty'
  ,70: 'seventy'
  ,80: 'eighty'
  ,90: 'ninety'
};
var postfixes = {
  100: 'hundred and'
  ,1000: 'thousand'
}

function numberToText(number) {
  if (number === 0) return "";
  if (words[number]) return words[number];
  if (number % 1000 === 0) return numberToText(number/1000) + ' ' + postfixes[1000];
  if (number % 100 === 0) return numberToText(number/100) + ' ' + postfixes[100];

  var res = "";
  var str = number + "";
  for (var i = 0; i < str.length; i++) {
    if (i == str.length - 2 && (parseInt(str.substr(str.length - 2, str.length)) < 20)) {
      res += ' ' + words[parseInt(str.substr(str.length - 2, str.length))];
      return res;
    } else {
      res += ' ' + numberToText(Math.pow(10, str.length - i - 1) * str[i]);
    }
  }
  return res;
}
var sum = 0;
for (var i = 1; i < 1001; i++) {
  var text = numberToText(i);
  if (text.endsWith(' and')) text = text.substr(0, text.length - 3);
  console.log(i, text.trim(), text.split(' ').join('').length);
  text = text.split(' ').join('');
  sum += text.length;
}
console.log(sum);
