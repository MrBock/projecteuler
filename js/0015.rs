/*Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.


How many such routes are there through a 20×20 grid?*/
fn main() {
    fn move_arrow(x: i32, y: i32, size: i32, sum: u64) -> u64 {
        let mut _sum = sum;
        //println!("move_arrow x:{0} y:{1} size:{2} _sum:{3}", x, y, size, _sum);
        if x == size && y == size {
            _sum = _sum + 1;
            //println!("reached corner: {0}", _sum);
        }
        if x < size {
            _sum = move_arrow(x + 1, y, size, _sum);
        }
        if y < size {
            _sum = move_arrow(x, y + 1, size, _sum);
        }
        _sum
    }

    println!("{0}", move_arrow(0,0,20,0));
}
