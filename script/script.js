// let test = document.getElementById("seven").value;

// console.log(parseInt(test));
// const textInput = document.getElementById("text");

// textInput.addEventListener('input', (event) => {
//     const value = event.target.value;
//     console.log(value);
//     const accentedLetters =/^[0-9]+$/g;
    
//     if (accentedLetters.test(!value)){ /*Checks if there are accented letters, capital letters or numbers*/
//         event.preventDefault();
//         textInput.value = value.replace(accentedLetters, ""); /*Removes the accented letters, capital letters and numbers*/
//     }
// });

const inputText = document.getElementById('text');
const resultText = document.getElementById('textResult');
const clear = document.getElementById('clear');
const delButton = document.getElementById('delete');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operation');

let inputValue = '';
let resultValue = '';
let currentOperator = '';

operators.forEach((operation) => {//Function that adds the operators to the input
    operation.addEventListener('click', function(event) {
        if (operation.value === '+' || operation.value === '-' || operation.value === '*' || operation.value === '/'|| operation.value === '%') {
        currentOperator = operation.value;
        resultValue += inputValue + currentOperator;
        inputValue = '';
        } else if (operation.value === '=') {
        switch (currentOperator) {
            case '+':
            resultValue = parseFloat(resultValue) + parseFloat(inputValue);
            break;
            case '-':
            resultValue = parseFloat(resultValue) - parseFloat(inputValue);
            break;
            case '*':
              resultValue = parseFloat(resultValue) * parseFloat(inputValue);
            break;
            case '/':
            resultValue = parseFloat(resultValue) / parseFloat(inputValue);
            break;
            case '%':
            resultValue = parseFloat(resultValue) % parseFloat(inputValue);
            break;
        }
        nputValue = '';
        currentOperator = '';
        }
        resultText.value = resultValue;
    });
});
numbers.forEach((number) => {//Function that adds the numbers to the input
    number.addEventListener('click', function(event) {
        inputValue += number.value;
        inputText.value = inputValue;
        if (inputText.value.length > 10) {
            event.preventDefault();
            inputText.value = inputText.value.slice(0, 10);
        }
    });
});

delButton.addEventListener('click', () => {
    inputText.value = inputText.value.slice(0, -1);
    inputText.value = inputValue;//Function that deletes the last character
});

clear.addEventListener('click', () =>{
    inputValue = '';
    resultValue = '';
    currentOperator = '';
    inputText.value = '';
    resultText.value = '';//Function that clears the input
});

inputText.addEventListener('input', function(event) {
    if (this.value.length > 10) { //Function that limits the number of characters to 10
        event.preventDefault();
        this.value = this.value.slice(0, 10);
    }
});