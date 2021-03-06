/* -------------------- random pin generate on generate button ------------------ */

document.getElementById('generateBtn').addEventListener('click',function(){
    const generatePin = document.getElementById('generatePin');
    const generateRandomPin = Math.floor(1000 + Math.random(generatePin) * 9000);
    const generateNewPin = Math.round(generateRandomPin);
    document.getElementById('generatePin').value = generateNewPin;
});

/* -------------------- for backspace integration -------------------- */

var exp = backSpace = true;
var textView = document.forms['calc']['text'];
function back(){
    exp = textView.value;
    exp = exp.substring(0, exp.length - 1);
    textView.value = exp;
}

/* ------------------- pin validation ------------------------- */

const inputPin = document.getElementById('inputPin');
const generatePin = document.getElementById('generatePin');
let match = document.getElementById('match');
let notMatch = document.getElementById('notMatch');
let attempt = document.getElementById('attempt');

document.getElementById('submitBtn').addEventListener('click', function(){
    if (inputPin.value == generatePin.value){
        match.style.display = 'block';
        notMatch.style.display = 'none';
        submitBtn.disabled = true;
        submitBtn.style.color = 'white';
        submitBtn.style.background = '#717277';
    } else {
        match.style.display = 'none';
        notMatch.style.display = 'block';
        inputPin.value = '';
        inputPin.placeholder = "Enter Right 4 digit generate pin";
        attempt.innerHTML--;
    }
    if (attempt.innerHTML < 1){
        notMatch.style.display = 'none';
        submitBtn.disabled = true;
        inputPin.value = '';
        inputPin.placeholder = "Please..Refresh the page and try again."
        submitBtn.style.color = 'white';
        submitBtn.style.background = '#717277';
        attempt.innerHTML = 'Sorry.. no more'
    }
});

