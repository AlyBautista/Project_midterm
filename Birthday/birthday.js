function birthday(s, d, m) {
   let ways = 0;

    for (let i = 0; i <= s.length - m; i++) {
        let sum = 0;
        for (let j = 0; j < m; j++) {
            sum += s[i + j];
        }
        if (sum === d) {
            ways++;
        }
    }

    return ways;
}

// Example test
let s = [1, 2, 1, 3, 2]; 
let d = 3;  
let m = 2;  

let result = birthday(s, d, m);
