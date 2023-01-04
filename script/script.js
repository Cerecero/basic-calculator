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

operators.forEach((operator) => {//Function that adds the operators to the input
    operator.addEventListener('click', function(event) {
        ;
        let variable = this.value;
        console.log(variable);
        resultText.value = inputText.value += variable;
        // resultText.innerHTML = inputText.value += operator.value;
        // console.log(inputText.value);
        // if (inputText.value.length > 10) {
        //     event.preventDefault();
        //     inputText.value = inputText.value.slice(0, 10);
        // }
    });
});
numbers.forEach((number) => {//Function that adds the numbers to the input
    number.addEventListener('click', function(event) {
        inputText.value += number.value;
        if (inputText.value.length > 10) {
            event.preventDefault();
            inputText.value = inputText.value.slice(0, 10);
        }
    });
});

delButton.addEventListener('click', () => {
    inputText.value = inputText.value.slice(0, -1);//Function that deletes the last character
});

clear.addEventListener('click', () =>{
    inputText.value = '';//Function that clears the input
});

inputText.addEventListener('input', function(event) {
    if (this.value.length > 10) { //Function that limits the number of characters to 10
        event.preventDefault();
        this.value = this.value.slice(0, 10);
    }
});

// const buttonClick = document.querySelectorAll(".number");

// buttonClick.forEach(function(button) {
//     button.addEventListener('click', function(event) {
//         console.log(event.target.value);
//     });
// });