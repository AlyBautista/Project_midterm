function gemstones(arr) {
    let common = new Set(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        let current = new Set(arr[i]); 
        let newCommon = new Set();

        for (let ch of common) {
            if (current.has(ch)) {
                newCommon.add(ch);
            }
        }
        common = newCommon; 
    }
    return common.size;
}

// Example
let rocks1 = ["abcdde", "baccd", "eeabg"]; // Expected 2 (a and b)
let rocks2 = ["abc", "abc", "abc"];       // Expected 3 (a, b, c)
let rocks3 = ["xyz", "x", "y"];           // Expected 0

console.log(gemstones(rocks1));
console.log(gemstones(rocks2));
console.log(gemstones(rocks3));