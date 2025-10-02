function encryption(s) {
    s = s.replace(/ /g, "");
    let L = s.length;

    let rows = Math.floor(Math.sqrt(L));
    let cols = Math.ceil(Math.sqrt(L));

    if (rows * cols < L) {
        rows++;
    }
    let result = [];
    for (let c = 0; c < cols; c++) {
        let word = "";
        for (let r = 0; r < rows; r++) {
            let index = r * cols + c;
            if (index < L) {
                word += s[index];
            }
        }
        result.push(word);
    }
    return result.join(" ");
}

// Example 
console.log(encryption("have a nice day"));
// Output: "hae and via ecy"

console.log(encryption("feedthedog"));
// Output: "fto ehg ee dd"

console.log(encryption("chillout"));
// Output: "clu hlt io"