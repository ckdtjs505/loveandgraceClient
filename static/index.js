$(document).ready(function () {
  $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    sectionsColor: ["black", "orange", "#f7ece2"]
  });

  //methods
  //   $.fn.fullpage.setAllowScrolling(true);
});

$("#joinBtn").on("click", function () {
  alert("아직 기간이 아닙니다");
});
