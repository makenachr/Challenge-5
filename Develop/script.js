// set the current day
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

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
// call function
currentTime();

// when the save button is clicked items will be saved in local Storage.
$(".saveBtn").on("click", function() {
    var time = $(this).parent().attr('id');
    var description = $(this).siblings('.description').val();
    localStorage.setItem(time, JSON.stringify(description));
});

// getting each hour description from local storage to view back on the main page
$("#hour-8 .description").val(window.localStorage.getItem('hour-8'));
$("#hour-9 .description").val(window.localStorage.getItem("hour-9"));
$("#hour-10 .description").val(window.localStorage.getItem("hour-10"));
$("#hour-11 .description").val(window.localStorage.getItem("hour-11"));
$("#hour-12 .description").val(window.localStorage.getItem("hour-12"));
$("#hour-1 .description").val(window.localStorage.getItem("hour-1"));
$("#hour-2 .description").val(window.localStorage.getItem("hour-2"));
$("#hour-3 .description").val(window.localStorage.getItem("hour-3"));
$("#hour-4 .description").val(window.localStorage.getItem("hour-4"));
$("#hour-5 .description").val(window.localStorage.getItem("hour-5"));
