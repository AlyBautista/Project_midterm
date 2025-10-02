function findMedian(arr) {
    arr.sort((a, b) => a - b);

    let middle = Math.floor(arr.length / 2);

    return arr[middle];
}

// Example
let arr = [5, 3, 1, 2, 4];
console.log(findMedian(arr));  
// Output: 3  (since sorted = [1,2,3,4,5], median = 3)