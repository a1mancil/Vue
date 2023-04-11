// Set the date we're counting down to
var countDownDate = new Date("Oct 28, 2023 01:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  document.getElementById("demo").innerHTML = days + " DAYS TO GO!"

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "WE ARE NOW MARRIED";
  }
}, 1000);