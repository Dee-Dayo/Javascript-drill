function scoresGreaterThanSeventy(scores){
    return scores.filter(num => num >= 70);
}

function addFiveToEachScores(scores){
    return scores.map(num => num + 5);
}

function squareEachScores(scores){
    return scores.map(num => num * num)
}

let times = ["9.00AM", "11:00AM","1:00PM", "3:00PM", "5:00PM"]

function studentPlan(times){
    for (let time of times){
        if (time.endsWith("PM")){
        console.log(time)
        }
    }


    let answer = times.filter(time => {time.endsWith("PM")});
    return answer
}

studentPlan(times)



// var book1 = {
//     name: "Javascript",
//     pages: 103,
//     author: "Chinedu"
// }

// var book2 = {
//     name: "Java",
//     pages: 293,
//     author: "Chibuzo"
// }

// var book3 = {
//     name: "Python",
//     pages: 382,
//     author: "Sikiru"
// }

// var book4 = {
//     name: "Springboot",
//     pages: 483,
//     author: "Femi"
// }

// let members = ["Emily", "Jack", "Sophia", "Daniel"]
// let books = [book1, book2, book3, book4]

// let bookClub = []

// function bookClub(members){
//     for(let member of members){
//         console.log(member)
//     }
// }

// bookClub(members)


// let Emily ={
//     name: "Emily",
//     book: ""
// }

// let Jack = {
//     name: "Jack",
//     book: ""
// }

// let Sophia = {
//     name: "Sophia",
//     book: ""
// }

// let Daniel = {
//     name: "Daniel",
//     book: ""
// }

// const members = [Emily, Jack, Sophia, Daniel];

// const books = ["PenIsUp", "PenIsDown", "OhOkaySir", "PenisFustrated"];


// function assignBook(persons, books){
//     let i = 0;
//     for (let person of persons){
//         person.book = books[i];
//         i++;
//     }
//     return persons;
// }
// let result = assignBook(members, books);
// console.log(result)



module.exports = {scoresGreaterThanSeventy, addFiveToEachScores, squareEachScores}
