let {scoresGreaterThanSeventy, addFiveToEachScores, squareEachScores, studentPlan, totalExpenses} = require("./drills.js")

test("Filter test scores", ()=>{
    let testScores = [23, 40, 70, 71, 83, 86, 19]
    let answer = scoresGreaterThanSeventy(testScores)

    expect(answer).toEqual([70, 71, 83, 86])
})

test("Increasing score by 5 points", ()=>{
    let testScores = [85, 92, 78, 88, 95]
    let answer = addFiveToEachScores(testScores)

    expect(answer).toEqual([90, 97, 83, 93, 100])
})

test("Square of each numbers in list",()=>{
    let testScores = [2, 4, 6, 8, 10]
    let answer = squareEachScores(testScores)

    expect(answer).toEqual([4, 16, 36, 64, 100])
})

test("Shows schedule for afternoon", ()=>{
    let times = ["11:00AM", "1:00PM", "3:00PM", "5:00PM", "9:00AM"]
    let answer = studentPlan(times);

    expect (answer).toEqual(['1:00PM', '3:00PM', "5:00PM"])
})

test("Assign book to each member", ()=>{
   let expenses = {
    groceries: 150,
    diningOut: 100,
    transportation: 50,
    entertainment: 80
   }
   let davidExpenses = [expenses]
   let answer = totalExpenses(davidExpenses)

   console.log(answer)

   expect (answer).toBe(380)


})