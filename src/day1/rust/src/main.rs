use std::fs::File;
use std::io::{BufRead, BufReader};

fn test() -> &[i32] {
    return [1, 2]
}

fn readFromFile(filepath: String) {
    // Open the file in read-only mode (ignoring errors).
    let file = File::open(filepath).unwrap();
    let reader = BufReader::new(file);

    // Read the file line by line using the lines() iterator from std::io::BufRead.
    for (index, line) in reader.lines().enumerate() {
        let line = line.unwrap(); // Ignore errors.
        // Show the line and its number.
        println!("{}. {}", index + 1, line);
    }
}

fn main() {
    

    let result = test();
}