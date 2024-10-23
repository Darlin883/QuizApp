

function CheckAnswer(){
    
    
    getUserInput('color');
    
}

function getUserInput(questionName){
    const checkedRadio = document.querySelector(`input[name="${questionName}"]:checked`);
    const RadioValue = checkedRadio ? checkedRadio.value : null; // to handle the null
    let userAnswer = RadioValue;
    console.log(userAnswer);
}