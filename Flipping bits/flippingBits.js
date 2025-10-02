function flippingBits(n) {
    let allOnes = Math.pow(2, 32) - 1;
    let result = allOnes - n;

    return result;
}

// Example
let result = flippingBits(2147483647); // 2147483647 = 01111111111111111111111111111111
console.log(result); // Expected: 2147483648