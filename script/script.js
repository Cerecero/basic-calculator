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

inputText.addEventListener('input', function(event) {
    if (this.value.length > 10) {
        event.preventDefault();
        this.value = this.value.slice(0, 10);
    }
});

const buttonClick = document.querySelectorAll(".number");

buttonClick.forEach(function(button) {
    button.addEventListener('click', function(event) {
      // Your event handling code goes here
        console.log(event.target.value);
    });
});