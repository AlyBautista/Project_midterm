function findDigits(n) {
    let count = 0;
    let strNum = n.toString(); 

    for (let i = 0; i < strNum.length; i++) {
        let digit = parseInt(strNum[i]);

        if (digit !== 0 && n % digit === 0) {
            count++;
        }
    }

    return count;
}

// Example 
console.log(findDigits(1012)); // 3
console.log(findDigits(12));   // 2
console.log(findDigits(111));  // 3