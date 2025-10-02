function designerPdfViewer(h, word) {
     let maxHeight = 0;

    for (let i = 0; i < word.length; i++) {
        
        let index = word.charCodeAt(i) - 97;
        let height = h[index];

        if (height > maxHeight) {
            maxHeight = height;
        }
    }

    return maxHeight * word.length;
}


// Example 
let h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7]; 
let word = "zebra";

let result = designerPdfViewer(h, word);