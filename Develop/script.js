// set the current day
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

$("#saveBtn").on("click", function() {
    var description = $(this).siblings('.description').val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(description, time);
});

// updating colors for each hour
function currentTime() {
    var timeNow = moment().hours();
    $(".time-block").each(function() {
        var hour = parseInt($(this).attr("id").split("-")[1]);
        if (hour < timeNow) {
            $(this).addClass("past");
        } else if (hour === timeNow) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}

currentTime();

$("#8am").val(localStorage.getItem("8am"));
$("#9am").val(localStorage.getItem("9am"));
$("#10am").val(localStorage.getItem("10am"));
$("#11am").val(localStorage.getItem("11am"));
$("#12pm").val(localStorage.getItem("12pm"));
$("#1pm").val(localStorage.getItem("1pm"));
$("#2pm").val(localStorage.getItem("2pm"));
$("#3pm").val(localStorage.getItem("3pm"));
$("#4pm").val(localStorage.getItem("4pm"));
$("#5pm").val(localStorage.getItem("5pm"));

