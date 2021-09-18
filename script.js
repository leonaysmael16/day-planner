





// shows today's date and current time 

var currentTime = moment().format('MMMM Do YYYY, h:mm');
$("#currentDay").html(currentTime);

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
