document.getElementById(".buttons").addEventListener("click", btnDisplay());


let counter = document.getElementById('.counter');
let btn = document.getElementById('.buttons');
let input = document.getElementById('time');


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
