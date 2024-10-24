let correctAnswers = {
    color: "BLACK",
    football: "COWBOYS",
    state: "TEXAS",
    lounge: "PING-PONG",
    facial: "YES-FACIAL",
    glasses: "SOMETIMES-GLASSES",
    "first-name": "MAINUL",
    "last-name": "CHOWDHURY",
    play: "ICE-HOCKEY",
    time: "AM-FRESHMAN"
};

let score = 0;

function CheckAnswer() {
    let currentQuestion = document.querySelector('.current-question');
    let questionName = currentQuestion.querySelector('input[type="radio"]').name;
    let userAnswer = getUserInput(questionName);

    if (userAnswer) {
        if (userAnswer === correctAnswers[questionName]) {
            score++;
        }
        goToNextQuestion();
    } else {
        alert("Please select an answer!");
    }
}

function getUserInput(questionName) {
    let checkedRadio = document.querySelector(`input[name="${questionName}"]:checked`);
    return checkedRadio ? checkedRadio.value : null;
}

function goToNextQuestion() {
    let currentQuestion = document.querySelector('.current-question');
    let nextQuestion = currentQuestion.nextElementSibling;

    if (nextQuestion && nextQuestion.classList.contains('question')) {
        currentQuestion.style.display = 'none';
        currentQuestion.classList.remove('current-question');

        nextQuestion.style.display = 'block';
        nextQuestion.classList.add('current-question');
    } else {
        showFinalScreen();
    }
}

function showFinalScreen() {
    let container = document.getElementById('container');
    container.innerHTML = `
        <h2>Your Score: ${score} / 10</h2>
        <button onclick="restartQuiz()">Restart Quiz</button>
    `;
    // gives the container the style elements listed below
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
}

function restartQuiz() {
    window.location.reload(); // Refreshs the page
}