$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $('#drinks').show();
  } else if (age === 18) {
    alert("Pay attention!!");
    $('#drinks').show();
  } else {
    $('#under-18').show();
  }
});
