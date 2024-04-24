function scoresGreaterThanSeventy(scores){
    return scores.filter(num => num >= 70);
}

function addFiveToEachScores(scores){
    return scores.map(num => num + 5);
}

function squareEachScores(scores){
    return scores.map(num => num * num)
}

function studentPlan(times){
    return times.filter((time) => time.endsWith("PM"))
}

function totalExpenses(expenses){
    let total = 0

    for (let month in expenses){
        for (let categories in expenses[month]){
            total += expenses[month][categories]
        }
    }
    return total
}

function checkHealthItems(items){
    return items.filter(food => food.isHealthyItem === true);
}



function distributeBooks(members){
    for (const value of members){
        value.book += value.name+"'s book"
    }
}


module.exports = {scoresGreaterThanSeventy, addFiveToEachScores, squareEachScores, studentPlan, totalExpenses, distributeBooks, checkHealthItems}
