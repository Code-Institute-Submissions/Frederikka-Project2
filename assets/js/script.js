/*jshint esversion: 6 */

const beginButton = document.getElementById("begin-button");
const quizArea = document.querySelector(".quiz-area");
const nextQuestion = document.querySelector(".question-number-area");
const questionHTML = document.getElementById("question-area");
const questionFullHTML = document.getElementById("question-area-full");
const submitButton = document.getElementById("submit");
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


/* 
https://codepen.io/Coding-Artist/pen/dymPrJa
credit for the use of the quizarray */

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
];

beginButton.addEventListener("click", (event) => {
    quizAreaShow();
  }); 
  
  radioButton0HTML.addEventListener("click", (event) => {
    selectedValue = 0;
    submitButton.disabled = false;
  }); 
  
  radioButton1HTML.addEventListener("click", (event) => {
    selectedValue = 1;
    submitButton.disabled = false;
  }); 
  
  radioButton2HTML.addEventListener("click", (event) => {
    selectedValue = 2;
    submitButton.disabled = false;
  }); 
  
  radioButton3HTML.addEventListener("click", (event) => {
    selectedValue = 3;
    submitButton.disabled = false;
  }); 
  
  submitButton.addEventListener("click", (event) => {
    let answerText = questionsArray[currentQuestionNumber].options[selectedValue];
  
    if (checkAnswer(currentQuestionNumber, answerText))
    {
      correctAnswers++;
    }
    else
    {
      incorrectAnswers++;
    }
    correctHTML.innerHTML = correctAnswers;
    incorrectHTML.innerHTML = incorrectAnswers;
    if (currentQuestionNumber < totalQuestions - 1)
    {
      currentQuestionNumber++;
      loadQuestion(currentQuestionNumber);
    }
    else
    {
      questionFullHTML.innerHTML = "Well done!";
      
    }
  });
  
  

function quizAreaShow() {
    console.log('quiz has loaded');
    beginButton.style.display = 'none';
    quizArea.style.display = 'block';
    startQuiz();
  }
  
  function startQuiz() {
    console.log('now we start the quiz...');
    loadQuestion(0);
  }
  
  function checkAnswer(questionNumber, answerText) {
    let correctAnswer = questionsArray[questionNumber].correct;
    let isCorrect = (answerText == correctAnswer);
    console.log("Answer: " + answerText + ", Correct Answer: " + correctAnswer + ", Correct? " + isCorrect);
    return isCorrect;
  }
  
  function loadQuestion(questionNumber) {
    document.getElementById("myformid").reset();
    questionHTML.innerHTML = questionsArray[questionNumber].question;
    option1.innerHTML = questionsArray[questionNumber].options[0];
    option2.innerHTML = questionsArray[questionNumber].options[1];
    option3.innerHTML = questionsArray[questionNumber].options[2];
    option4.innerHTML = questionsArray[questionNumber].options[3];
    if (questionNumber <= totalQuestions - 1)
    {
      nextQuestion.innerHTML= "Question " + (questionNumber + 1) + " of " + totalQuestions + ":";
    }
  }
  
  
  
