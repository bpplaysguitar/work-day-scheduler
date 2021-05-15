let DateTime = luxon.DateTime;
let today = DateTime.local();
let currentDay = document.getElementById("currentDay");
let daySuffix;
let dayToString = today.day.toString();
let saveBtn = document.querySelectorAll(".saveBtn");
let row9 = document.getElementById("row9");
let row10 = document.getElementById("row10");
let row11 = document.getElementById("row11");
let row12 = document.getElementById("row12");
let row1 = document.getElementById("row1");
let row2 = document.getElementById("row2");
let row3 = document.getElementById("row3");
let row4 = document.getElementById("row4");
let row5 = document.getElementById("row5");

// each amount of hours equals its respective milliseconds
let hourDur9 = luxon.Duration.fromMillis(32400000);
let hourDur10 = luxon.Duration.fromMillis(36000000);
let hourDur11 = luxon.Duration.fromMillis(39600000);
let hourDur12 = luxon.Duration.fromMillis(43200000);
let hourDur13 = luxon.Duration.fromMillis(46800000);
let hourDur14 = luxon.Duration.fromMillis(50400000);
let hourDur15 = luxon.Duration.fromMillis(54000000);
let hourDur16 = luxon.Duration.fromMillis(57600000);
let hourDur17 = luxon.Duration.fromMillis(61200000);
let hourDur18 = luxon.Duration.fromMillis(64800000);

// each time equals midnight plus the correct amount of milliseconds from above variables
let nineAm = today.startOf("day") + hourDur9;
let tenAm = today.startOf("day") + hourDur10;
let elevenAm = today.startOf("day") + hourDur11;
let twelvePm = today.startOf("day") + hourDur12;
let onePm = today.startOf("day") + hourDur13;
let twoPm = today.startOf("day") + hourDur14;
let threePm = today.startOf("day") + hourDur15;
let fourPm = today.startOf("day") + hourDur16;
let fivePm = today.startOf("day") + hourDur17;
let sixPm = today.startOf("day") + hourDur18;

// determine which suffix to use on day
if (dayToString.endsWith("1")) {
  daySuffix = "st";
} else if (dayToString.endsWith("2")) {
  daySuffix = "nd";
} else if (dayToString.endsWith("3")) {
  daySuffix = "rd";
} else {
  daySuffix = "th";
}

// display the current day in the currendDay p
currentDay.innerText =
  today.weekdayLong + ", " + today.monthLong + " " + today.day + daySuffix;

// determine whether each row is in the past, present, or future, and add appropriate class
function setTimeBlockColor() {
  let currentTime = today.ts;
  // 9am
  if (currentTime >= tenAm) {
    row9.classList.add("past");
  } else if (currentTime >= nineAm && currentTime < tenAm) {
    row9.classList.add("present");
  } else {
    row9.classList.add("future");
  }
  // 10am
  if (currentTime >= elevenAm) {
    row10.classList.add("past");
  } else if (currentTime >= tenAm && currentTime < elevenAm) {
    row10.classList.add("present");
  } else {
    row10.classList.add("future");
  }
  // 11am
  if (currentTime >= twelvePm) {
    row11.classList.add("past");
  } else if (currentTime >= elevenAm && currentTime < twelvePm) {
    row11.classList.add("present");
  } else {
    row11.classList.add("future");
  }
  // 12pm
  if (currentTime >= onePm) {
    row12.classList.add("past");
  } else if (currentTime >= twelvePm && currentTime < onePm) {
    row12.classList.add("present");
  } else {
    row12.classList.add("future");
  }
  // 1pm
  if (currentTime >= twoPm) {
    row1.classList.add("past");
  } else if (currentTime >= onePm && currentTime < twoPm) {
    row1.classList.add("present");
  } else {
    row1.classList.add("future");
  }
  // 2pm
  if (currentTime >= threePm) {
    row2.classList.add("past");
  } else if (currentTime >= twoPm && currentTime < threePm) {
    row2.classList.add("present");
  } else {
    row2.classList.add("future");
  }
  // 3pm
  if (currentTime >= fourPm) {
    row3.classList.add("past");
  } else if (currentTime >= threePm && currentTime < fourPm) {
    row3.classList.add("present");
  } else {
    row3.classList.add("future");
  }
  // 4pm
  if (currentTime >= fivePm) {
    row4.classList.add("past");
  } else if (currentTime >= fourPm && currentTime < fivePm) {
    row4.classList.add("present");
  } else {
    row4.classList.add("future");
  }
  // 5pm
  if (currentTime >= fivePm) {
    row5.classList.add("past");
  } else if (currentTime >= fivePm && currentTime < sixPm) {
    row5.classList.add("present");
  } else {
    row5.classList.add("future");
  }
}

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
    hour5: hour5.value,
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

// load the most recent schedule, time block color
renderWorkdaySchedule();
setInterval(setTimeBlockColor(), 60000);


// event listeners on each button save the workdaySchedule object
saveBtn[0].addEventListener("click", function (event) {
  event.preventDefault();
  saveWorkdaySchedule();
});
saveBtn[1].addEventListener("click", function (event) {
  event.preventDefault();
  saveWorkdaySchedule();
});
saveBtn[2].addEventListener("click", function (event) {
  event.preventDefault();
  saveWorkdaySchedule();
});
saveBtn[3].addEventListener("click", function (event) {
  event.preventDefault();
  saveWorkdaySchedule();
});
saveBtn[4].addEventListener("click", function (event) {
  event.preventDefault();
  saveWorkdaySchedule();
});
saveBtn[5].addEventListener("click", function (event) {
  event.preventDefault();
  saveWorkdaySchedule();
});
saveBtn[6].addEventListener("click", function (event) {
  event.preventDefault();
  saveWorkdaySchedule();
});
saveBtn[7].addEventListener("click", function (event) {
  event.preventDefault();
  saveWorkdaySchedule();
});
saveBtn[8].addEventListener("click", function (event) {
  event.preventDefault();
  saveWorkdaySchedule();
});
