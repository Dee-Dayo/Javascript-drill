let {scoresGreaterThanSeventy, addFiveToEachScores, squareEachScores, studentPlan, totalExpenses, distributeBooks, checkHealthItems} = require("./drills.js")

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

test("Expense calculator", ()=>{
   let expenses = {
    groceries: 150,
    diningOut: 100,
    transportation: 50,
    entertainment: 80
   }
   let davidExpenses = [expenses]
   let answer = totalExpenses(davidExpenses)

   expect (answer).toBe(380)
})

test("Filter snacks from list", ()=>{
    let shoppingList = [
        {name: 'Apples', category: 'Fruits', isHealthyItem: true},
        {name: 'Potato Chips', category: 'Snacks', isHealthyItem: false},
        {name: 'Carrots', category: 'Vegetable', isHealthyItem: true},
        {name: 'Chocolate Bar', category: 'Sweets', isHealthyItem: false},
        {name: 'Greeks Yogurt', category: 'Diary', isHealthyItem: true},
        {name: 'Soda', category: 'Beverages', isHealthyItem: false}

    ];

    let given = checkHealthItems(shoppingList)

    let answer = [
        {name: 'Apples', category: 'Fruits', isHealthyItem: true},
        {name: 'Carrots', category: 'Vegetable', isHealthyItem: true},
        {name: 'Greeks Yogurt', category: 'Diary', isHealthyItem: true}
    ];
    expect(given).toEqual(answer)
})



// test("Assign books to members",()=>{
//     let member1 = {
//         name: "Emily",
//         book: ""
//     }
//     let member2 = {
//         name: "Jack",
//         book: ""
//     }

//     let member3 = {
//         name: "Sophia",
//         book: ""
//     };
//     let member4 = {
//         name: "Daniel",
//         book: ""
//     }
//     let members = [member1, member2, member3, member4];
//     distributeBooks(readers)
//     expect(members[0].book).toBe("Emily's book")
// })