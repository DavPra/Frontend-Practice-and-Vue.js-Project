document.getElementById("loginbutton").addEventListener("click", loginconf)


function loginconf() {
        let text;
        if (confirm("Are you sure you want to proceed with the login process dear user?") == true) {
          text = "Welcome to our website please enter your data now in the provided form.";
          document.getElementById("loginForm").style.opacity = "1";
          document.getElementById("loginsub").style.display = "";
          setTimeout(reminder1, 5000);
          setTimeout(reminder2, 10000);
          setTimeout(reminderAbort, 20000);
        } else {
          text = "Poor choice but maybe next time.";
          document.getElementById("loginAsk").style.fontSize = '80px';
          document.getElementById("loginAsk").style.color = "red";
          document.getElementById("body").style.backgroundColor = "black";
          document.getElementById("loginForm").style.opacity = "0";
          setTimeout(bye1, 3000)
        }
        document.getElementById("loginAsk").innerHTML = text;
      } 

function reminder1() {
    alert("Dear user are you still there?");
}

function reminder2() {
    alert("Dear user. Have you fallen asleep?")
}

function reminderAbort() {
   if (confirm("Dear User do you want to continue or abort?") == true) {
    loginconf() }
   else {
    loginconf() }
   }

let byetext
byetext = "Thank you for your visit to our lovely website. See you soon and goodbye"

function bye1() {
    document.getElementById("body").style.backgroundColor = "white"
    document.getElementById("body").innerHTML = byetext
    document.getElementById("body").style.margin ="20%"
    document.getElementById("body").style.fontSize ="100px"
    document.getElementById("body").style.color = "black"
    setTimeout(bye2, 5000)
    
}

function bye2() {
    document.getElementById("body").style.backgroundColor = "black"
}


document.getElementById("loginsub").addEventListener("click", loginsub)

function loginsub () {
    document.getElementById("loginsub").style.opacity = "0";
    document.getElementById("loadButton").style.opacity = "1";
    setTimeout(dataLoad, 5000)
}

function dataLoad () {
    document.getElementById("loginSucc").innerHTML = "Thank you for entering your precious data we will process it now.";
    document.getElementById("loadButton").style.opacity = "1";
    setTimeout(logFin, 5000)
}

function logFin () {
    document.getElementById("loadButton").style.opacity = "0";
    document.getElementById("loginSucc").innerHTML = "Your data has been processed you will now be forwarded. Thank you for using me."
    setTimeout(page2, 4000)

}

function page2 () {
    window.location.href ="BadUIBattle2.html";
}
