function absolutePermutation(n, k) {
    if (k === 0) {
        return Array.from({ length: n }, (_, i) => i + 1);
    }
    if (n % (2 * k) !== 0) {
        return [-1];
    }

    let result = [];
    let add = true;

    for (let i = 1; i <= n; i++) {
        if (add) {
            result.push(i + k);
        } else {
            result.push(i - k);
        }
        if (i % k === 0) {
            add = !add;
        }
    }

    return result;
}

// Example 
console.log(absolutePermutation(4, 2)); // Output: [3, 4, 1, 2]
console.log(absolutePermutation(2, 1)); // Output: [2, 1]
console.log(absolutePermutation(3, 0)); // Output: [1, 2, 3]
console.log(absolutePermutation(3, 2)); // Output: [-1]