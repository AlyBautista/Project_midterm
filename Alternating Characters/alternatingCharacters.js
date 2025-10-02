function alternatingCharacters(s) {
    let deletions = 0;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            deletions++;
        }
    }
    return deletions;
}

// Example
let test1 = "AABAAB"; // Expected 2
let test2 = "AAAA";   // Expected 3
let test3 = "ABABAB"; // Expected 0

console.log(alternatingCharacters(test1));
console.log(alternatingCharacters(test2));
console.log(alternatingCharacters(test3));