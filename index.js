(function() {
  //detect width and height of the window.
  var vWidth = $(window).width();
  var vHeight = $(window).height();
  //detect width and height of popup.
  var popWidth = $("#popup-body").outerWidth();
  var popHeight = $("#popup-body").outerHeight();
  //trigger popup
  $("#popup-button").click(function() {
    $("#mask").addClass("mask");
    $("#popup-body").css({
      display: "block",
      left: (vWidth - popWidth) / 2 + "px",
      top: (vHeight - popHeight) / 2 + "px"
    });
    $("#mask").click(function() {
      $("#mask").removeClass("mask");
      $("#popup-body").css({
        display: "none"
      });
    });
  });
})();

// $("#popup-button").click(function() {
//   $("popup-body").addClass("selected");
// });
