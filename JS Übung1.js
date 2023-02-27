let counter = document.getElementById('Clicks').innerText;
document.getElementById('Clicker').addEventListener('click', function () {Clicks.innerText = parseInt(Clicks.innerText) + 1; })


let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let result = document.getElementById('result')

document.getElementById('plus').addEventListener('plus', function Plus () {result.innerHTML = parseInt(num1.innerText) + parseInt(num2.innerText);})