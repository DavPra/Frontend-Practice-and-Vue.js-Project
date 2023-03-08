let greeting = document.getElementById("greeting")

setTimeout (greet, 5000)

function greet () {
    document.getElementById("greeting").innerHTML = "Thank you for your time applicant. Please stand by while I test your aptitude and patience."
    setTimeout (apTest, 5000)
}

function apTest () {
    document.getElementById("greeting").style.display = "none"
    document.getElementById("fastLane").style.display = ""
    setTimeout (Test, 5000)
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

let Kiwi = document.getElementById("Kiwi2")
let Pineapple = document.getElementById("Pineapple")
let fruit = document.getElementById("fruit");

document.getElementById("Kiwi").addEventListener("click", () => {fruitSalad('kiwi')});
document.getElementById("Pineapple").addEventListener("click", () => {fruitSalad('pineapple')});

function fruitSalad (fruit) {
     fruits.push(fruit)
    console.log(fruits)

    if (fruits.includes('kiwi') == true && fruits.includes('pineapple')) {
        salad();
    } else {
        document.getElementById("fruitSalad").innerHTML = "I want more fruit"
    }

}


function salad () {
    document.getElementById("fruitSalad").innerHTML = "Kiwi and Pineapple are tasty. Thank you dear User for participating in this Test you will now be forwarded."
    document.getElementById("pictureRiddle").style.display = "none"
    page2timer ();
    
}

function page2timer () {
    setTimeout (page3, 1500)
}

function page3 () {
    document.getElementById("page3").style.display = ""
    document.getElementById("fruitSalad").style.display = "none"
    let fName = localStorage.getItem("fName")
    document.getElementsByClassName("fName").innerHTML = fName
}

document.getElementById("avatar").addEventListener("click",showProfile)

function showProfile () {
    document.getElementById("profileCard").style.display = ""
    document.getElementById("avatarChoose").style.display = "none"
}



function untilHundred() {
    let age = localStorage.getItem("Age")
    let ageuntilhundred = 100 - age
    console.log (ageuntilhundred)
    document.getElementById("toHun").innerHTML = ageuntilhundred
}
