let DateTime = luxon.DateTime;
let today = DateTime.local()
let currentDay = document.getElementById("currentDay")
let daySuffix;
let dayToString = today.day.toString();
let saveBtn = document.querySelector(".saveBtn")

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

function renderTask() {
  let testArea = document.querySelector(".testarea")

  let task2 =  localStorage.getItem("task")
  testArea.textContent = task2;
}


// save to localStorage with save button 
saveBtn.addEventListener("click", function() {
  let task = document.querySelector(".description").value

localStorage.setItem("task", task);
renderTask()

})


// when you start up the page, renderLastGrade. And renderLastGrade is :
// get out of local storage , parse as JSONobject,  set HTML based on whatever's in that object


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
    document.getElementById("saved-name").innerHTML = workdaySchedule.student;
    document.getElementById("saved-grade").innerHTML = workdaySchedule.grade;
    document.getElementById("saved-comment").innerHTML = workdaySchedule.comment;
  } else {
    return;
  }
}
