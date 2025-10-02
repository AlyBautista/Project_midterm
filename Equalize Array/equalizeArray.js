function equalizeArray(arr) {
     let freq = {};  
    
    for (let num of arr) {
        if (freq[num]) {
            freq[num]++;
        } else {
            freq[num] = 1;
        }
    }
    
    let maxFreq = 0;
    for (let key in freq) {
        if (freq[key] > maxFreq) {
            maxFreq = freq[key];
        }
    }
    return arr.length - maxFreq;
}

// Example
console.log(equalizeArray([3, 3, 2, 1, 3])); // Output: 2