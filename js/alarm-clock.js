// function Alarm(hour, minute, amPm) {
//   this.hour = hour;
//   this.minute = minute;
//   this.amPm = amPm;
//   this.time = hour + ":" + minute + " " + amPm;
// }

function Alarm(hour, minute, amPm) {
  this.hour = hour;
  this.minute = minute;
  this.amPm = amPm;
  this.time = hour + ":" + minute + " " + amPm;
}

Alarm.prototype.triggerAlarm = function() {
  if (this.time === moment().format('LT')) {
    return "yay";
  } else {
    return "nay";
  }
}

exports.alarmModule = Alarm;

// function Calculator(skinName) {
//   this.skin = skinName;
// }
//
// Calculator.prototype.pingPong = function(goal) {
//   var output = [];
//   for (var i = 1; i <= goal; i++) {
//     if (i % 15 === 0) {
//       output.push("ping-pong");
//     } else if (i % 3 === 0) {
//       output.push("ping");
//     } else if (i % 5 === 0) {
//       output.push("pong");
//     } else  {
//       output.push(i);
//     }
//   }
//   return output;
// };
//

// exports.calculatorModule = Calculator;
