let numTasks = 0;
function currentTime(){
    // Missed:
    const clockSpot = document.getElementById("clock");
    clockSpot.innerHTML = '';
    // ^^
    date = new Date();
    hh = date.getHours();
    mm = date.getMinutes();
    ss = date.getSeconds();

    let session = "AM";
    if (hh == 0){
        hh = 12;
    }

    if (hh > 12){
        hh = hh - 12;
        session = "PM";
    }

    ss = (ss.toString().length < 2) ? "0" + ss : ss;
    mm = (mm.toString().length < 2) ? "0" + mm : mm;

    myTime = hh + ":" + mm + ":" + ss + session;

    // Missed: 
    const currentTimeShower = document.createElement('div');
    currentTimeShower.textContent = myTime;
    currentTimeShower.classList.add("jsClockText")
    // clockSpot.appendChild(lineThing);
    clockSpot.appendChild(currentTimeShower);
    // ^^

    
    // First attempt at writing clock updater function:
    // document.getElementsByClassName("clock").innerHTML = myTime;

//    First attempt at writing timeout func:
//    let t = setTimeout( currentTime(), 1000)
    let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();

function postText(){
    if (numTasks == 4){
        window.prompt("Sorry, the maximum number of tasks is 4. Please delete a task and try again.")
        return;
    }
    // Assign myPostWords to words written in the textbox
    let myPostWords = document.getElementById("postData").value;
    // If textbox was empty when submit was pressed, cancel the program
    if (myPostWords == ""){
        return;
    }
    // Reset textbox to empty
    document.getElementById('postData').value = '';

    // Create a variable that refers to existing div "active-tasks"
    const postArea = document.getElementById("active-tasks");
    // Create div in "active-tasks" to hold todo element
    let myPost = document.createElement('div');
    // Add a css class to new div
    myPost.classList.add("postClass");

    

    // Make content of div the words from the textbox
    myPost.textContent = myPostWords;
    // Add div to "active-tasks"
    postArea.appendChild(myPost);

    // Create stop button
    let myStopButton = document.createElement('button');
    myStopButton.classList.add("stopButton");
    myStopButton.setAttribute('id', 'stopButton');
    // Make clicking the button call the stopTask function carrying it's parent node's name as the argument
    myStopButton.setAttribute("onclick", "stopTask(this.parentNode)");
    // Stop thing
    myStopButton.textContent = "X";
    myPost.appendChild(myStopButton);
    numTasks++;
}

function stopTask(parent){
    parent.remove();
    numTasks--;
} 

const input = document.getElementById("postData");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter"){
        postText();
    }
})