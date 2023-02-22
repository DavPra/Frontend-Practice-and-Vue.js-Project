var money = 100;
document.getElementById("money").innerHTML = money;

let wager
wager = parseInt(document.getElementById("wager"))

console.log(wager)

let result
result = document.getElementById("result")

function checkWager () {


if (wager > money) {
  document.getElementById("result").innerText = "Versuche es nochmal mit einem kleineren Einsatz";
}

else if (wager < 1) {
  document.getElementById("result").innerText = "Setze bitte mehr";
}

else {gamble}

}

function generatedNumber () {
  Math.floor(Math.random() * 100)
}
function gamble () {
if (generatedNumber < 48) {
  result = "Rot"
  console.log(result)
} else if (generatedNumber < 96) {
  result = "Schwarz"
  console.log(result)
} else {
  result = "Grün"
  console.log(result)
}
}


if (document.getElementsByClassName("color").checked = result) {
  money + (wager * 2)
} else {
    money - wager
    
}
