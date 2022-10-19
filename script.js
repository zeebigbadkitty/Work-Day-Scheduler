
// The current day is displayed at the top of the calendar
var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
document.getElementById("currentDay").textContent = currentTime;

console.log(currentTime)

// Each timeblock is color coded to indicate whether it is in the past, present, or future (Check currentDay and add class)
if (currentTime < moment('HH')){
    $().addClass("past");
    $().removeClass("present");
    $().removeClass("future");
}
else if (currentTime > moment('HH')){
    $().addClass("future");
    $().removeClass("present");
    $().removeClass("past");
}
else if (currentTime === moment('HH')){
    $().addClass("present");
    $().removeClass("past");
    $().removeClass("future");

// I click the save button for that timeblock the text for that event is saved in local storage
var saveBtn = document.getElementsByClassName("btn saveBtn col-md-2")
var event=localStorage.getItem("event")
saveBtn.addEventListener("click", function() {
      localStorage.setItem("event");
    )}