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

var timeArray = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

for(var i = 0; i<timeArray.length; i++){
    var hour = localStorage.getItem(timeArray[i]);
    $("#" + timeArray[i]).val(hour)
}