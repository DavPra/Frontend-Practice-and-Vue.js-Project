let greeting = document.getElementById("greeting")

setTimeout (greet, 5000)

function greet () {
    document.getElementById("greeting").innerHTML = "Thank you for your time applicant. Please stand by while I test your aptitude and patience."
    setTimeout (apTest, 10000)
}

function apTest () {
    document.getElementById("greeting").style.display = "none"
    document.getElementById("fastLane").style.display = ""
    setTimeout (Test, 10000)
}

document.getElementById("fastLane").addEventListener("click", skip)

function skip () {
    document.getElementById("impatience").style.display =""
    setTimeout (window.location.href = "BadUIBattle.html", 3000);
}

function Test () {
    document.getElementById("fastLane").style.display = "none";
    document.getElementById("pictureRiddle").style.display = "";
}

const fruits = [];

document.getElementById("Kiwi").addEventListener("click", fruitSalad);
document.getElementById("Pineapple").addEventListener("click", fruitSalad);

function fruitSalad () {
    fruits.push(this.addEventListener("click"))
    
}
