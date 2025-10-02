function biggerIsGreater(w) {
    let arr = w.split(""); 
    let i = arr.length - 2;

    while (i >= 0 && arr[i] >= arr[i + 1]) {
        i--;
    }
    if (i < 0) {
        return "no answer";
    }
    let j = arr.length - 1;
    while (arr[j] <= arr[i]) {
        j--;
    }
    [arr[i], arr[j]] = [arr[j], arr[i]];

    let left = i + 1, right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr.join("");
}
// Example 
console.log(biggerIsGreater("ab"));     // Output: "ba"
console.log(biggerIsGreater("bb"));     // Output: "no answer"
console.log(biggerIsGreater("hefg"));   // Output: "hegf"
console.log(biggerIsGreater("dhck"));   // Output: "dhkc"
console.log(biggerIsGreater("dkhc"));   // Output: "hcdk"