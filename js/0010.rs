fn main() {
    fn is_prime(x: u64) -> bool {
        let mut prime: bool = true;
        for i in 2u64..x {
            if x % i == 0 {
                prime = false;
                break;
            }
        }
        prime
    }
    let mut sum: u64 = 2u64;
    for i in 3u64..2000000u64 {
        if is_prime(i) {
            sum += i;
        }
    }
    println!("{0}", sum);
}
