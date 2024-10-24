

function CheckAnswer(){
    
    
    let userAnswer = getUserInput('color');
    

    if(userAnswer){
        console.log("question 1 Answer: ", userAnswer);
        goToNextQuestion();
    }
    else{
        alert("Please select an answer!");
    }

    
}

function getUserInput(questionName){
    const checkedRadio = document.querySelector(`input[name="${questionName}"]:checked`);
    const RadioValue = checkedRadio ? checkedRadio.value : null; // to handle the null
    let userAnswer = RadioValue;
    return userAnswer;
}
function goToNextQuestion(){
    const currentQuestion = document.querySelector('.current-question');
    const nextQuestion = document.querySelector('.next-question');

    //hide the current question and show the next one
    currentQuestion.style.display = 'none';
    currentQuestion.classList.remove('current-question');

    nextQuestion.style.display = 'block';
    nextQuestion.classList.add('current-question');
}