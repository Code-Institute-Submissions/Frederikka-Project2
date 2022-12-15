/*jshint esversion: 6 */
const beginScreen = document.querySelector(".begin-screen");
const beginButton = document.getElementById("begin-button");
const quizArea = document.querySelector(".quiz-area");
const nextQuestion = document.querySelector(".question-number-area");
const questionHTML = document.getElementById("question-area");
const questionFullHTML = document.getElementById("question-area-full");
const submitButton = document.getElementById("submit");
const scoresArea = document.querySelector(".scores-area");
const option1 = document.getElementById("1");
const option2 = document.getElementById("2");
const option3 = document.getElementById("3");
const option4 = document.getElementById("4");
const correctHTML = document.getElementById("correct");
const incorrectHTML = document.getElementById("incorrect");
const radioButton0HTML = document.getElementById("radio0");
const radioButton1HTML = document.getElementById("radio1");
const radioButton2HTML = document.getElementById("radio2");
const radioButton3HTML = document.getElementById("radio3");

let selectedValue;
let currentQuestionNumber = 0;
const totalQuestions = 3;
let correctAnswers = 0;
let incorrectAnswers = 0;

const questionsArray = [
    {
        id: "0",
        question: "When was the book 'To Kill a Mockingbird' by Harper Lee published?",
        options: ["1950", "1960", "1970", "1976"],
        correct: "1960"
    },
    {
        id: "1",
        question: "What does the Richter scale measure?",
        options: ["Wind speed", "Temperature", "Earthquake intensity", "Flood levels"],
        correct: "Earthquake intensity"
    },
    {
        id: "2",
        question: "When were Guy Fawkes and The Gunpowder Plot discovered?",
        options: ["1505", "1605", "1705", "1809"],
        correct: "1605"
    }
]


