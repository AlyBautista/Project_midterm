function circularArrayRotation(a, k, queries) {
    let n = a.length;
    let result = [];

    k = k % n;
    let rotated = new Array(n);
    for (let i = 0; i < n; i++) {
        let newIndex = (i + k) % n;
        rotated[newIndex] = a[i];
    }
    for (let i = 0; i < queries.length; i++) {
        result.push(rotated[queries[i]]);
    }

    return result;
}

// Example 
console.log(circularArrayRotation([1, 2, 3], 2, [0, 1, 2])); 
// Rotated array = [2, 3, 1] → queries [0,1,2] → [2,3,1]