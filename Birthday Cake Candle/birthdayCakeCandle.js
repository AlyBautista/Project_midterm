function birthdayCakeCandles(candles) {
    let highestNum = 0;
    let count = 0;

 
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] > highestNum) {
            highestNum = candles[i];
        }
    }

    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === highestNum) {
            count++;
        }
    }

    return count;
}

// Example
let candles = [3, 2, 1, 3];
let result = birthdayCakeCandles(candles);

