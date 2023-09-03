function currentTime(){
    // Missed:
    // const clockSpot = document.getElementById("clock");
    // clockSpot.innerHTML = '';
    // ^^
    date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let session = "AM";
    if (hh == 0){
        hh = 12;
    }

    if (hh > 12){
        hh = hh - 12;
        session = "PM";
    }

    ss2 = ss.length;
    console.log(typeof(ss));
    ss = (ss < 10) ? "0" + ss : ss;
    mm = (mm < 10) ? "0" + mm : mm;
    
    console.log(ss2);

    myTime = hh + ":" + mm + ":" + ss + session;
    console.log(myTime);
    // // Missed: 
    // const currentTimeShower = document.createElement('div');
    // currentTimeShower.textContent = myTime;
    // currentTimeShower.classList.add("jsClockText")
    // // clockSpot.appendChild(lineThing);
    // clockSpot.appendChild(currentTimeShower);
    // // ^^

    
    // First attempt at writing clock updater function:
    // document.getElementsByClassName("clock").innerHTML = myTime;

//    First attempt at writing timeout func:
//    let t = setTimeout( currentTime(), 1000)
    let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();