let counter = document.getElementById('Clicks').innerText;
document.getElementById('Clicker').addEventListener('click', function Clickser () {Clicks.innerText = parseInt(Clicks.innerText) + 1; })


let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let result = document.getElementById('result')

document.getElementById('plus').addEventListener('click', function Plus () {result = parseInt(num1.innerText) + parseInt(num2.innerText);})