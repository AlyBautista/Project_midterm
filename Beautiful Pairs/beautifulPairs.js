function beautifulPairs(A, B) {
    let count = 0;
    let used = new Array(B.length).fill(false);

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if (!used[j] && A[i] === B[j]) {
                count++;
                used[j] = true; 
                break;
            }
        }
    }
    if (count === A.length) {
        return count - 1;
    } else {
        return count + 1;
    }
}

// Example
let A = [1, 2, 3, 4];
let B = [1, 2, 3, 3];
let result = beautifulPairs(A, B);

console.log(result); // Output: 4