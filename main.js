function CheckAnswer() {
    const currentQuestion = document.querySelector('.current-question');
    const questionName = currentQuestion.querySelector('input[type="radio"]').name;
    const userAnswer = getUserInput(questionName);

    if (userAnswer) {
        console.log("Answer: ", userAnswer);
        goToNextQuestion();
    } else {
        alert("Please select an answer!");
    }
}

function getUserInput(questionName) {
    const checkedRadio = document.querySelector(`input[name="${questionName}"]:checked`);
    const RadioValue = checkedRadio ? checkedRadio.value : null;
    return RadioValue;
}

function goToNextQuestion() {
    const currentQuestion = document.querySelector('.current-question');
    const nextQuestion = currentQuestion.nextElementSibling;

    if (nextQuestion && nextQuestion.classList.contains('question')) {
        // Hide current question
        currentQuestion.style.display = 'none';
        currentQuestion.classList.remove('current-question');

        // Show next question
        nextQuestion.style.display = 'block';
        nextQuestion.classList.add('current-question');
    } else {
        alert("Quiz completed!");
    }
}
