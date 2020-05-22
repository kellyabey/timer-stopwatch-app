document.getElementById(".buttons").addEventListener("click", btnDisplay());

var message = document.getElementById("textBox").value;
var counter = document.getElementById("counter");
var input = document.getElementById("hourBox").value + ":" + document.getElementById("minBox").value + ":" + document.getElementById("secBox").value;
var parse = input.split(":");
var currentHour;
var currentMin;
var currentSec;

function btnDisplay(stat) {
    toCount = stat.value;
    if (stat.id == "start") {
        display("start", "pause");
    } else if (stat.id == "pause") {
        display("continue");
    } else {
        display('continue', "pause");
    }
}

document.getElementById("start").addEventListener('click', function startTimer() {
    document.getElementById("display").innerHTML = message;
    if (parse == 0) {
        alert(message);
        return;
    } else {
        currentHour = Math.floor(parse / 3600);
        if (parse > 3600) {
            currentMin = currentHour * 3600;
            currentMin = parselimit - currentMin;
            currentMin = Math.floor(currentMin / 60);
        } else {
            currentMin = Math.floor(parse / 60);
        }
        currentSec = parse % 60;
    }
    if (currentMin.length == 1 || currentMin == 9) {
        currentMin = "0" + currentMin;
    }

    if (currentSec.length == 1 || currentSec == 9) {
        currentSec = "0" + currentSec;
    }
    var currentTime = currentHour + ":" + currentMin + ":" + currentSec;
}
});
