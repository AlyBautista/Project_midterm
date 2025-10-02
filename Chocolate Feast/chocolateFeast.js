function chocolateFeast(n, c, m) {
        let chocolates = 0;
        let wrappers = 0;
    
    while (n >= c) {
        n = n - c;      
        chocolates = chocolates + 1;
        wrappers = wrappers + 1;
    }
    while (wrappers >= m) {
        let freeChocolates = 0;

        while (wrappers >= m) {
            wrappers = wrappers - m;
            freeChocolates = freeChocolates + 1;
        }
        chocolates = chocolates + freeChocolates;
        wrappers = wrappers + freeChocolates;
    }

    return chocolates;
}

// Example Tests
console.log(chocolateFeast(10, 2, 5)); // Output: 6
console.log(chocolateFeast(12, 4, 4)); // Output: 3
console.log(chocolateFeast(6, 2, 2));  // Output: 5