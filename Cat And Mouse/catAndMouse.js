function catAndMouse(x, y, z) {
    let distCatA = Math.abs(z - x);
    let distCatB = Math.abs(z - y);

    if (distCatA < distCatB) {
        return "Cat A";
    } else if (distCatB < distCatA) {
        return "Cat B";
    } else {
        return "Mouse C";
    }
}

// Example 
let x = 2;  
let y = 5;  
let z = 4;  

let result = catAndMouse(x, y, z);
