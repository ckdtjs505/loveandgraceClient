$(document).ready(function () {
  $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    sectionsColor: ["black", "orange", "#f7ece2"]
  });

  $("#joinBtn").on("click", function () {
    location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLSfE1JB2md0B66N2WDyhZ1x6e8XgOHyBJ7tEBUQM_B5zzsKnrQ/viewform";
  });

  // Set the date we're counting down to
  var countDownDate = new Date("Jul 31 2021 13:00:00").getTime();

  var count = 0;
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

    // count = count + 1;
    // if (count > 10) {
    //   count = 0;
    //   location.href = "#anchor2";
    // }
  }, 1000);

  var video = document.getElementById("myVideo");
  video.onended = function () {
    location.href = "#anchor3";
  };
});
