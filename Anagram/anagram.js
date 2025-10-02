function anagram(s) {
    let n = s.length;

    if (n % 2 !== 0) return -1;

    let half = n / 2;
    let s1 = s.slice(0, half);
    let s2 = s.slice(half);

    let count = {};
    for (let char of s1) {
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }
    let changes = 0;
    for (let char of s2) {
        if (count[char]) {
            count[char]--;
        } else {
            changes++;
        }
    }

    return changes;
}

// Example
console.log(anagram("aaabbb")); // Expected 3
console.log(anagram("ab"));     // Expected 1
console.log(anagram("abc"));    // Expected -1
console.log(anagram("mnop"));   // Expected 2