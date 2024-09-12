const square = document.querySelector('#square');
const inputRange = document.querySelector('input[type=text]');
const eBtn = document.querySelector('#e_btn');

const logger = function () {
    square.style.backgroundColor = inputRange.value;
}

eBtn.addEventListener('click', logger);

