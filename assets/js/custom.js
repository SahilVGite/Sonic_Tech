$(document).ready(function () {

  
  // Sticky Header
  $(window).on("scroll", function () {
    $("header").toggleClass("stickyHead", $(this).scrollTop() > 0);
  });

  // Hamburger Menu
  $(".meanuSecBtn").on("click", function () {
    $(".meanuSecBtnNav").toggleClass("active");
    $("body").toggleClass("menu-open");

    if (!$(".menu-overlay").length) {
      $("header").append('<div class="menu-overlay"></div>');
    }
  });

  $(document).on("click", ".menu-overlay, .meanuSecBtnNavCloseBtn", function () {
    $(".meanuSecBtnNav").removeClass("active");
    $("body").removeClass("menu-open");
    $(".menu-overlay").remove();
  });

  // Tab Section
  $(".tabBtn").click(function () {
    var tab_id = $(this).data("id");

    $(".tabBtn, .tab-content").removeClass("active");
    $(this).addClass("active");
    $("#" + tab_id).addClass("active");

    // Reinitialize Slick slider inside the active tab
    $("#" + tab_id).find(".webStoriesSlider").slick("setPosition");
  });


  // Lazy Loading
  $("img, iframe").attr("loading", "lazy");



});
