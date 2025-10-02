function beautifulTriplets(d, arr) {
    let count = 0;
    let values = new Set(arr);

    for (let num of arr) {
        if (values.has(num + d) && values.has(num + 2 * d)) {
            count++;
        }
    }

    return count;
}


// Example 
console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10])); 
// Output: 3  (triplets: (1,4,7), (4,7,10), (2,5,8))

console.log(beautifulTriplets(1, [2, 2, 3, 4, 5])); 
// Output: 3  (triplets: (2,3,4), (2,3,4), (3,4,5))