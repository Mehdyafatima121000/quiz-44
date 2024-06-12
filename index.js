import inquirer from "inquirer";
const quiz = await inquirer.prompt([{
        name: "question_1",
        type: "list",
        message: "Q1.What is the correct way to check if two value are not equal in typescrpt?",
        choices: ["a == b", "a===", "a = b", "a !== b"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2.Which of the following characters is commonly allowed in varable names in typescrpt?",
        choices: ["$", "@", "#", "&"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3.Which operator is commonly used for concatenation in typescrpt?",
        choices: ["+", "-", "*", "/"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4.Which symbol is used to terminate statement in typescrpt?",
        choices: [".", ",", ",", ","]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5.Which method of inquirer .js is used to start the prompt interface and recive user input in typescrpt?",
        choices: ["start()", "prompt()", "init()", "run()"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "a !== b":
        console.log("1. Correct!");
        ++score;
        break;
    //break if the answer is correct otherwise woh incorrect ker dega
    default:
        console.log("1. Incorrect");
}
switch (quiz.question_2) {
    case "$":
        console.log("2. Correct!");
        ++score;
        break;
    //break if the answer is correct otherwise woh incorrect ker dega
    default:
        console.log("2. Incorrect");
}
switch (quiz.question_3) {
    case "+":
        console.log("3. Correct!");
        ++score;
        break;
    //break if the answer is correct otherwise woh incorrect ker dega
    default:
        console.log("3. Incorrect");
}
switch (quiz.question_4) {
    case ";":
        console.log("4. Correct!");
        ++score;
        break;
    //break if the answer is correct otherwise woh incorrect ker dega
    default:
        console.log("4. Incorrect");
}
switch (quiz.question_5) {
    case "prompt()":
        console.log("5. Correct!");
        ++score;
        break;
    //break if the answer is correct otherwise woh incorrect ker dega
    default:
        console.log(".5 Incorrect");
}
console.log(`Score: ${score}`);
