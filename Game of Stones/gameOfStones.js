function gameOfStones(n) {
    if (n % 7 === 0 || n % 7 === 1) {
        return "Second";
    } else {
        return "First";
    }
}

// Example
let result1 = gameOfStones(1);
console.log(result1); // Second

let result2 = gameOfStones(2);
console.log(result2); // First

let result3 = gameOfStones(7);
console.log(result3); // Second