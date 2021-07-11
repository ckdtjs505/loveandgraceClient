$(document).ready(function () {
  $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    sectionsColor: ["black", "orange", "#f7ece2"]
  });

  //methods
  //   $.fn.fullpage.setAllowScrolling(true);

  $("#joinBtn").on("click", function () {
    location.href =
      "https://docs.google.com/forms/d/1btR8QKKFTrHw90_3nvGWC2QYFrjbn0YmeUWIea5a2-A/edit";
  });
});

// Set the date we're counting down to
var countDownDate = new Date("Jul 30 2021 15:55:39").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("count").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("count").innerHTML = "EXPIRED";
  }
}, 1000);
