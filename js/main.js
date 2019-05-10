// cache //
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const input = document.getElementById('input');
const num = document.querySelector('h1');

// variables // 
var score = 0;

// event listeners // 
plus.addEventListener('click', plusClick);
minus.addEventListener('click', minusClick);

// functions // 

init();

function init() {
    num.textContent = score;
    input.value = 1;
};

function plusClick() {
    score += parseInt(input.value);
    num.innerHTML = `${score}`;
    if (score < 0) {
        num.style.color = 'red';
    } else {
        num.style.color = 'black';
    }
}

function minusClick() {
    score -= parseInt(input.value);
    num.innerHTML = `${score}`;
    if (score < 0) {
        num.style.color = 'red';
    } else {
        num.style.color = 'black';
    }
}