function climbingLeaderboard(ranked, player) {
    let uniqueScores = [...new Set(ranked)].sort((a, b) => b - a);
    let result = [];
    let index = uniqueScores.length - 1; 
    for (let i = 0; i < player.length; i++) {
        let score = player[i];
        while (index >= 0 && score >= uniqueScores[index]) {
            index--;
        }
        result.push(index + 2); 
    }

    return result;
}


// Example
let ranked = [100, 100, 50, 40, 40, 20, 10];
let player = [5, 25, 50, 120];

let output = climbingLeaderboard(ranked, player);