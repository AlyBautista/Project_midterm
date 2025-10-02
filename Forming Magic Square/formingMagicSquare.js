function formingMagicSquare(s) {
    let magicSquares = [
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
    ];

    let minCost = 1000; 

    for (let k = 0; k < magicSquares.length; k++) {
        let cost = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                cost += Math.abs(s[i][j] - magicSquares[k][i][j]);
            }
        }
        if (cost < minCost) {
            minCost = cost;
        }
    }

    return minCost;
}

// Example 
let minCost = [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 5] 
];

let result = formingMagicSquare(minCost);