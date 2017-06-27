$(document).ready(function(){
  setInterval(function() {
    $('#time').text(moment().format('LTS'));
  }, 1000);
});
