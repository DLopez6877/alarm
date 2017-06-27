var Alarm = require('./../js/alarm-clock.js').alarmModule;

$(document).ready(function() {
  // console.log(moment().minutes());
  var newAlarm = null;

  $('#alarm-form').submit(function(event) {
    event.preventDefault();
    var hour = $('#hour').val();
    var minute = $('#minute').val();
    var amPm = $('#amPm').val();
    newAlarm = new Alarm(hour, minute, amPm);
    $('#user-alarms').empty();
    $('#user-alarms').append('<li> Alarm set for: ' +
                              newAlarm.hour +
                              ":" +
                              newAlarm.minute +
                              " " +
                              newAlarm.amPm +
                              "</li>"
    );
  });

  setInterval(function() {
    var triggerAlarm = newAlarm.triggerAlarm();
    if (triggerAlarm === "yay") {
      $('#alarm').text("wake up!");
    } else {
      $('#alarm').text("keep sleeping");
    }
  }, 1000);
});



// var output = simpleCalculator.pingPong(goal);
// output.forEach(function(element) {
//   $('#solution').append("<li>" + element + "</li>");
// });
