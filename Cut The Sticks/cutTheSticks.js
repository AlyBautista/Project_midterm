function cutTheSticks(arr) {
     let result = [];

    while (arr.length > 0) {
        
        result.push(arr.length);

        let min = Math.min(...arr);

        arr = arr.map(x => x - min).filter(x => x > 0);
    }

    return result;
}


// Example test
let sticks = [5, 1, 2, 3, 4];
let result = (cutTheSticks(sticks));