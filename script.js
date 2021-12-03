var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

var hour9 = $("#9am");
var hour10 = $("#10am");
var hour11 = $("#11am");
var hour12 = $("#12pm");
var hour1 = $("#1pm");
var hour2 = $("#2pm");
var hour3 = $("#3pm");
var hour4 = $("#4pm");
var hour5 = $("#5pm");
var time = moment();

function blocking() {
    hour = time.hours();
    $(".block").each(function () {
        var thisHour = parseInt($(this).attr("id"));
        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("current");
        }
        else {
            $(this).addClass("past");
        }
    })
}

blocking();

function planning() {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
    $(".block").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);
        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}

planning();

var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
});
