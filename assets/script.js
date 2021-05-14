let DateTime = luxon.DateTime;
let today = DateTime.local()
let currentDay = document.getElementById("currentDay")
let daySuffix;
let dayToString = today.day.toString();
let saveBtn = document.querySelectorAll(".saveBtn")

// luxon durations 
let hourDur = luxon.Duration.fromMillis(3600000)

let minDur = luxon.Duration.fromMillis(60000)

console.log(hourDur / minDur);

// determine which suffix to use
if (dayToString.endsWith("1")) {
  daySuffix = "st"
} else if (dayToString.endsWith("2")) {
  daySuffix = "nd"
} else if (dayToString.endsWith("3")) {
  daySuffix = "rd"
} else {
  daySuffix = "th"
}

// display the current day in the currendDay p
currentDay.innerText = today.weekdayLong + ", " + today.monthLong + " " + today.day + daySuffix;





// save to localStorage with save button 



// when you start up the page, renderLastGrade. And renderLastGrade is :
// get out of local storage , parse as JSONobject,  set HTML based on whatever's in that object

var hour9 = document.getElementById("hour9");


function saveWorkdaySchedule() {
  // Save related form data as an object
  var workdaySchedule = {
    hour9: hour9.value,
    hour10: hour10.value,
    hour11: hour11.value,
    hour12: hour12.value,
    hour1: hour1.value,
    hour2: hour2.value,
    hour3: hour3.value,
    hour4: hour4.value,
    hour5: hour5.value
  };
  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem("workdaySchedule", JSON.stringify(workdaySchedule));
}



function renderWorkdaySchedule() {
  // Use JSON.parse() to convert text to JavaScript object
  var lastSchedule = JSON.parse(localStorage.getItem("workdaySchedule"));
  // Check if data is returned, if not exit out of the function
  if (lastSchedule !== null) {
    document.getElementById("hour9").innerHTML = lastSchedule.hour9;
    document.getElementById("hour10").innerHTML = lastSchedule.hour10;
    document.getElementById("hour11").innerHTML = lastSchedule.hour11;
    document.getElementById("hour12").innerHTML = lastSchedule.hour12;
    document.getElementById("hour1").innerHTML = lastSchedule.hour1;
    document.getElementById("hour2").innerHTML = lastSchedule.hour2;
    document.getElementById("hour3").innerHTML = lastSchedule.hour3;
    document.getElementById("hour4").innerHTML = lastSchedule.hour4;
    document.getElementById("hour5").innerHTML = lastSchedule.hour5;
  } else {
    return;
  }
}

// event listeners on each button save the workdaySchedule object
saveBtn[0].addEventListener("click", function (event) { 
  event.preventDefault();
  saveWorkdaySchedule();
})
saveBtn[1].addEventListener("click", function (event) { 
  event.preventDefault();
  saveWorkdaySchedule();
})
saveBtn[2].addEventListener("click", function (event) { 
  event.preventDefault();
  saveWorkdaySchedule();
})
saveBtn[3].addEventListener("click", function (event) { 
  event.preventDefault();
  saveWorkdaySchedule();
})
saveBtn[4].addEventListener("click", function (event) { 
  event.preventDefault();
  saveWorkdaySchedule();
})
saveBtn[5].addEventListener("click", function (event) { 
  event.preventDefault();
  saveWorkdaySchedule();
})
saveBtn[6].addEventListener("click", function (event) { 
  event.preventDefault();
  saveWorkdaySchedule();
})
saveBtn[7].addEventListener("click", function (event) { 
  event.preventDefault();
  saveWorkdaySchedule();
})
saveBtn[8].addEventListener("click", function (event) { 
  event.preventDefault();
  saveWorkdaySchedule();
})

// load the most recent schedule
renderWorkdaySchedule()
