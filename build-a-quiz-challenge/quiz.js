// 1. Create a multidimensional array to hold quiz questions and answers
class Quiz {
  constructor() {
    // This array holds the quiz questions and answers
    this.questions = [
      { question: 'What is the capital of France?', answer: 'Paris' },
      { question: 'What is 2 + 2?', answer: '4' },
      // Add more questions as needed
    ];

    // 2. Store the number of questions answered correctly
    // This variable will track the number of correct answers
    this.correctCount = 0;
  }

  askQuestions() {
    // 3. Use a loop to cycle through each question
    this.questions.forEach((questionObj) => {
      // Present each question to the user
      let userAnswer = prompt(questionObj.question); // adjust as per your UI

      // Compare the user's response to answer in the array
      if (userAnswer.toLowerCase() === questionObj.answer.toLowerCase()) {
        // If the response matches the answer, the number of correctly answered questions increments by 1
        this.correctCount++;
      }
    });
  }

  displayResults() {
    // 4. Display the number of correct answers to the user
    alert(`You answered ${this.correctCount} questions correctly.`); // adjust as per your UI
  }

  // This method runs the quiz by asking the questions and then displaying the results
  runQuiz() {
    this.askQuestions();
    this.displayResults();
  }
}

// Create a new Quiz instance and run it
let quiz = new Quiz();
quiz.runQuiz();
