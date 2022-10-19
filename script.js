
// The current day is displayed at the top of the calendar
var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
document.getElementById("currentDay").textContent = currentDay;


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
if (currentDay < moment('HH')){
    // Past, Present, Future

}
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
var event=localStorage.getItem("event")

// THEN the text for that event is saved in local storage
localStorage.setitem "JSON STRINGIFY"
// WHEN I refresh the page
// THEN the saved events persist

//if === add class "present"