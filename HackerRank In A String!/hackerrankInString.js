function hackerrankInString(s) {
    let target = "hackerrank";
    let j = 0; 

    for (let i = 0; i < s.length; i++) {
        if (s[i] === target[j]) {
            j++;
        }
        if (j === target.length) {
            return "YES"; 
        }
    }

    return "NO"; 
}

// Example
let test1 = "hereiamstackerrank"; // YES
let test2 = "hackerworld";        // NO
let test3 = "haacckkerrannkk";    // YES

console.log(hackerrankInString(test1));
console.log(hackerrankInString(test2));
console.log(hackerrankInString(test3));