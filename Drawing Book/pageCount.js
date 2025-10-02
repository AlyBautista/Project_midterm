function pageCount(n, p) {
    
    let fromFront = Math.floor(p / 2);

    let fromBack = Math.floor((n / 2)) - Math.floor(p / 2);

    return Math.min(fromFront, fromBack);
}


// Example 
let n = 6;  
let p = 5;  

let result = pageCount(n, p);