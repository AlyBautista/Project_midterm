function caesarCipher(s, k) {
    let result = "";
    let shift = k % 26;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char >= 'A' && char <= 'Z') {
            let code = s.charCodeAt(i) - 65;        
            let newCode = (code + shift) % 26 + 65;  
            result += String.fromCharCode(newCode);

        } else if (char >= 'a' && char <= 'z') {
            let code = s.charCodeAt(i) - 97;         
            let newCode = (code + shift) % 26 + 97;   
            result += String.fromCharCode(newCode);

        } else {
            result += char;
        }
    }

    return result;
}

// Example
let test1 = "middle-Outz";  // Expected "okffng-Qwvb" when k=2
let test2 = "abc";          // Expected "def" when k=3
let test3 = "xyz";          // Expected "abc" when k=3

console.log(caesarCipher(test1, 2));
console.log(caesarCipher(test2, 3));
console.log(caesarCipher(test3, 3));