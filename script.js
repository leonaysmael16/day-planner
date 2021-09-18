





// shows today's date and current time 

function setTime() {
    var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").html(currentTime);
}

setInterval(setTime, 1000);

setTime()
// save button

// var btnSave = $(".saveBtn");

// btnSave.onclick = function() {
//     var time = $(this).parent().attr("id");
//     var planner = $(this).siblings(".planner").val();

//     localStorage.setItem(time, planner);
// };

// shows today's date and current time



// save button



$('.saveBTN').on('click', function () {
    var time = $(this).parent().attr('id');
    console.log('time', time);
    var planner = $(this).siblings('.planner').val();
    console.log('planner', planner);
    localStorage.setItem(time, planner);
});


// load from local storage

var hour1 = localStorage.getItem("9 am");
$("#9-am").val(hour1);

var hour2 = localStorage.getItem("10 am");
