function countingValleys(steps, path) {
        let seaLevel = 0;
        let valleys = 0;

    for (let step of path) {
        if (step === 'U') {
            seaLevel++;
            if (seaLevel === 0) {
                valleys++; 
            }
        } else if (step === 'D') {
            seaLevel--;
        }
    }

    return valleys;
}

// Example 
let steps = 8;
let path = "UDDDUDUU"; 

let result = countingValleys(steps, path);