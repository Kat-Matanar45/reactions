const square = document.querySelector('#square');
const inputText = document.querySelector('input[type=text]');
const btn = document.querySelector('#btn');
const eBtn = document.querySelector('#e_btn');
const inputRange = document.querySelector('input[type=range]');
const circle = document.querySelector('#circle');
const span = document.querySelector('#range-span');

const logger = function () {
    square.style.backgroundColor = inputText.value;
}

const eventСircle = function (event) {
    span.textContent = event.target.value;
    circle.style.width = span.textContent + "%"; 
    circle.style.height = span.textContent + "%"; 
}

btn.addEventListener('click', logger);

eBtn.style = "display: none; ";

inputRange.addEventListener('input', eventСircle);