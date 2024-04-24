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



function distributeBooks(){
    let members = ["Emily", "Jack", "Sophia", "Daniel"];
    let result = [];
    for (const member of members){
        result.push({member: member, book: `${member} book`});
    }

    return result;
}


module.exports = {scoresGreaterThanSeventy, addFiveToEachScores, squareEachScores, studentPlan, totalExpenses, distributeBooks, checkHealthItems}
