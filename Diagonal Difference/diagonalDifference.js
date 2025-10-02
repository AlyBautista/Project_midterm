function diagonalDifference(arr) {
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        primaryDiagonal += arr[i][i];          
        secondaryDiagonal += arr[i][n - 1 - i]; 
    }

    return Math.abs(primaryDiagonal - secondaryDiagonal);
}
// Example test case
let arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

let result = diagonalDifference(arr);