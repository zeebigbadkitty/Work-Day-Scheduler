
// The current day is displayed at the top of the calendar
var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
document.querySelector("#currentDay").textContent = currentTime;

console.log(currentTime)
var currentHour = moment().hours()
console.log(currentHour)
// Each timeblock is color coded to indicate whether it is in the past, present, or future (Check currentDay and add class)
$(".time-block").each(function(){
var divId = $(this).attr("id")



if (divId < currentHour){
    $(this).addClass("past");
    $(this).removeClass("present");
    $(this).removeClass("future");
}
else if (divId > currentHour){
    $(this).addClass("future");
    $(this).removeClass("present");
    $(this).removeClass("past");
}
else if (divId == currentHour){
    $(this).addClass("present");
    $(this).removeClass("past");
    $(this).removeClass("future");
}})

// I click the save button for that timeblock the text for that event is saved in local storage
var saveBtn = document.getElementsByClassName("btn saveBtn col-md-2")
var event=localStorage.getItem("event")

$('.saveBtn').on("click", function() {
var textArea = $(this).siblings(".agenda").val()
var divId = $(this).parent().attr("id")

    localStorage.setItem(divId, textArea);

})

$("#8 .agenda").val(localStorage.getItem("8"))
$("#9 .agenda").val(localStorage.getItem("9"))
$("#10 .agenda").val(localStorage.getItem("10"))
$("#11 .agenda").val(localStorage.getItem("11"))
$("#12 .agenda").val(localStorage.getItem("12"))
$("#13 .agenda").val(localStorage.getItem("13"))
$("#14 .agenda").val(localStorage.getItem("14"))
$("#15 .agenda").val(localStorage.getItem("15"))
$("#16 .agenda").val(localStorage.getItem("16"))
$("#17 .agenda").val(localStorage.getItem("17"))