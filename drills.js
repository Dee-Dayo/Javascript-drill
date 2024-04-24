function scoresGreaterThanSeventy(scores){
    return scores.filter(num => num >= 70);
}

function addFiveToEachScores(scores){
    return scores.map(num => num + 5);
}

function squareEachScores(scores){
    return scores.map(num => num * num)
}

module.exports = {scoresGreaterThanSeventy, addFiveToEachScores, squareEachScores}