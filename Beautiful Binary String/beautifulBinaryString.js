function beautifulBinaryString(b) {
    let changes = 0;
    let i = 0;

    while (i < b.length - 2) {
        if (b[i] === '0' && b[i+1] === '1' && b[i+2] === '0') {
            changes++;     
            i += 3;       
        } else {
            i++;
        }
    }

    return changes;
}

//Example
let test1 = "0101010";   // Expected 2
let test2 = "01100";     // Expected 0
let test3 = "0100101010"; // Expected 3

console.log(beautifulBinaryString(test1));
console.log(beautifulBinaryString(test2));
console.log(beautifulBinaryString(test3));