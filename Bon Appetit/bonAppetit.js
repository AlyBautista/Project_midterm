function bonAppetit(bill, k, b) {
      let total = 0;

    for (let i = 0; i < bill.length; i++) {
        if (i !== k) {
            total += bill[i];
        }
    }

    let annaShare = total / 2;

    if (annaShare === b) {
        console.log("Bon Appetit");
    } else {
        console.log(b - annaShare);
    }
}

// Example
let bill = [3, 10, 2, 9];
let k = 1;  
let b = 12; 

let result = bonAppetit(bill, k, b);