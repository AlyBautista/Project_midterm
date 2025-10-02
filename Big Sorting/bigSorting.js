function bigSorting(unsorted) {
    let n = unsorted.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            let a = unsorted[j];
            let b = unsorted[j + 1];

            if (a.length > b.length || (a.length === b.length && a > b)) {
                // Swap
                let temp = unsorted[j];
                unsorted[j] = unsorted[j + 1];
                unsorted[j + 1] = temp;
            }
        }
    }

    return unsorted;
}

// Example
let test = ["31415926535897932384626433832795", "1", "3", "10", "3", "5"];
console.log(bigSorting(test));
// Output ["1", "3", "3", "5", "10", "31415926535897932384626433832795"]