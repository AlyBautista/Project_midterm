function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;

    for (let apple of apples) {
        let position = a + apple;
        if (position >= s && position <= t) {
            appleCount++;
        }
    }

    for (let orange of oranges) {
        let position = b + orange;
        if (position >= s && position <= t) {
            orangeCount++;
        }
    }

    console.log(appleCount);0
    console.log(orangeCount);
}

// Example
let s = 7, t = 11;             
let a = 5, b = 15;          
let apples = [-2, 2, 1];       
let oranges = [5, -6];         

countApplesAndOranges(s, t, a, b, apples, oranges);



