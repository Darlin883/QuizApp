

function CheckAnswer(){
    const checkedRadio = document.querySelector('input[name="color"]:checked');
    const RadioValue = checkedRadio ? checkedRadio.value : null; // to handle the null
    console.log(RadioValue)
    let userAnswer = RadioValue;
    let correctAnser = "blue";
    
}