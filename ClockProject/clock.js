// DONT NEED vv
document.addEventListener('DOMContentLoaded', function() {

// Access the HTML element using its id
const consoleViewer = document.getElementById('consoleViewer');

function updateLog(message){
    const logItem = document.createElement('div');
    logItem.textContent = message;
    consoleViewer.appendChild(logItem)
}

(function overrideConsole() {
    const nativeLog = console.log;
    console.log = function () {
        // Call the original console.log
        // calls console as this , this.log(arguments) = nativeLog
        nativeLog.apply(console, arguments);

        // Update the log container with the logged message
        updateLog(Array.from(arguments).join(' '));
    };

})();

function currentTime(){
    // Create object date with template Date();
    let date = new Date();
    // Create hours, minutes, seconds, morning/night variables
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
    if (hh == 0){
        hh = 12;
    }

    if (hh > 12){
        hh -= 12;
        session = "PM";
    }

    // Fix formatting of minutes and seconds to inlude numbers with leading zeroes
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    // Create variable time to hold the instant time
    let time = hh + ":" + mm + ":" + ss + " " + session;

    // Print time to div with ID 'LCD-screen'
    document.getElementById("LCD-screen").innerText = time;
    // Make the clock update once every second (1000ms)
    let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();
console.log("works without the thing!");
/*
// Get the information you want to display from your JavaScript code
const information = "This is the information I want to display.";

// Modify the content of the HTML element with the information
outputElement.textContent = information;
*/


//DONT NEED vv
});