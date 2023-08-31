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

    ss = (ss.length < 2) ? "0" + ss : ss;
    mm = (mm.length < 2) ? "0" + mm : mm;

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

function postText(){
    const postArea = document.getElementById("active-tasks")
    let myPost = document.createElement('div');
    let myPostWords = document.getElementById("postData").value;

    myPost.textContent = myPostWords;

    console.log("Hello",myPostWords);

    myPost.classList.add("postClass");
    
    postArea.appendChild(myPost)
    // postArea.textContent = myPostWords
}
currentTime();