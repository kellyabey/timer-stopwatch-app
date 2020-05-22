var message = document.getElementById("textBox").value;
var counter = document.getElementById('.counter');
var input = document.getElementById("hourBox").value + ":" + document.getElementById("minBox").value + ":" + document.getElementById("secBox").value;
var parselimit = limit.split(":");
var currentHour;
var currentMin;
var currentSec;

function startTimer() {
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("show_timer").innerHTML = message;
    if (parselimit == 1) {
        alert(message);
        return;
    } else {
        parselimit -= 1;
        currentHour = Math.floor(parselimit / 3600);
        if (parselimit > 3600) {
            currentMin = currentHour * 3600;
            currentMin = parselimit - currentMin;
            currentMin = Math.floor(currentMin / 60);
        } else {
            currentMin = Math.floor(parselimit / 60);
        }
        currentSec = parselimit % 60;
    }
    currentMinin += "";
    if (currentMinmin.length == 1 || currentMin == 9) {
        currentMinr = "0" + currentMin;
    }
    currentSec += "";
    //alert(cursec);
    if (currentSec.length == 1 || currentSec == 9) {
        currentSec = "0" + currentSec;
    }
    var currentTime = currentHour + ":" + currentMin + ":" + currentSec;
