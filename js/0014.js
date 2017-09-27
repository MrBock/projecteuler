/*The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.*/

function getNextCollatzSequence(number) {
  if (number % 2 === 0) return number / 2;
  return (number * 3) + 1;
}
function getCollatzSequence(start) {
  var seq, lastNumber;
  lastNumber = start;
  seq = [start];
  while (lastNumber != 1) {
    var next = getNextCollatzSequence(lastNumber);
    seq.push(next);
    lastNumber = next;
  }
  return seq;
}
function getLongestSeq(limit) {
  var longestSeq = [], longestSeqStarter;
  for (var i = 1; i < limit; i++) {
    var seq = getCollatzSequence(i);
    if (seq.length > longestSeq.length) {
      longestSeq = seq;
      longestSeqStarter = i;
    }
  }
  return longestSeqStarter;
}

console.log(getLongestSeq(999999));
