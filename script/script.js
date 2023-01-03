// let test = document.getElementById("seven").value;

// console.log(parseInt(test));

const buttonClick = document.querySelectorAll(".number");

buttonClick.forEach(function(button) {
    button.addEventListener('click', function(event) {
      // Your event handling code goes here
      console.log(event.target.value);
    });
  });