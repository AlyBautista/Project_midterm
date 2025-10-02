function getTotalX(a, b) {
    let count = 0;

    for (let num = Math.max(...a); num <= Math.min(...b); num++) {
        if (a.every(x => num % x === 0) && b.every(x => x % num === 0)) {
            count++;
        }
    }

    return count;
}

// Example
let a = [2, 4];
let b = [16, 32, 96];
let result = getTotalX(a, b);

