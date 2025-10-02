function beautifulDays(i, j, k) {
    let count = 0;

    for (let day = i; day <= j; day++) {
        let reversed = reverseNumber(day);

        if (Math.abs(day - reversed) % k === 0) {
            count++;
        }
    }

    return count;
}

function reverseNumber(num) {
    let str = num.toString();
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return parseInt(reversedStr, 10);
}

// Example 
console.log(beautifulDays(20, 23, 6)); // Output: 2