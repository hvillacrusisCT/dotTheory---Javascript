// 1. Store correct answers and questions
const questions = [
  { question: "Question 1: What is 1 + 1?", answer: "2" },
  { question: "Question 2: What is the square root of 4?", answer: "2" },
  { question: "Question 3: What is 10% of 100?", answer: "10" },
  { question: "Question 4: What is 100 divided by 50?", answer: "2" },
  { question: "Question 5: What is 10 x 10?", answer: "100" }
];

let correctAnswers = 0;

// 2. Store the rank of a player
let rank = '';

// 3. Select the <main> HTML element
const mainElement = document.querySelector('main');

// 4. Ask questions and count correct answers
function askQuestions() {
  questions.forEach((q) => {
      const userAnswer = prompt(q.question);
      if (userAnswer.toLowerCase() === q.answer.toLowerCase()) {
          correctAnswers++;
      }
  });
}

// 5. Rank player based on number of correct answers
function getRank() {
  if (correctAnswers === 5) {
      rank = "Gold";
  } else if (correctAnswers >= 3) {
      rank = "Silver";
  } else if (correctAnswers >= 1) {
      rank = "Bronze";
  } else {
      rank = "No crown";
  }
}

// 6. Output results to the <main> element
function displayResults() {
  mainElement.innerHTML = `<h1>You got ${correctAnswers} out of ${questions.length} questions correct.</h1><h2>Your rank is: ${rank}</h2>`;
}

// Run the quiz
askQuestions();
getRank();
displayResults();
