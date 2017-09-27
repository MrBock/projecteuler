/*Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.


How many such routes are there through a 20×20 grid?*/
var res = 0;

function move(curX, curY, size) {
  if (curX == size && curY == size) {
    res++;
    return true;
  }
  if (curX > size || curY > size) return false;
  move(curX + 1, curY, size);
  move(curX, curY + 1, size);
}
function getPathesThroughGrid(size) {
  return move(0,0,size);
}
getPathesThroughGrid(20);
console.log(20, res);
