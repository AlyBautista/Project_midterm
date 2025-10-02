function countingSort(arr) {
    let freq = new Array(100).fill(0);

    for (let num of arr) {
        freq[num]++;
    }

    return freq;
}

// Example
console.log(countingSort([1, 1, 3, 2, 1]));
// Expected output: [0, 3, 1, 1, 0, 0, ..., 0] (length 100)




