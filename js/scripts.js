$(document).ready(function() {
  $(".card").click(function() {
    $(this).children("h3").toggle();
    $(this).children("p").fadeToggle(1200);
    $(this).toggleClass("card-flip");
  });
});
