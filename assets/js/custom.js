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


  // our value slide
  
  $('.ourValueSlide').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    arrows: false,
    autoplay: true,            // Enables autoplay
    autoplaySpeed: 1000,       // Slide delay in milliseconds
    infinite: true,            // Loop slides infinitely
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

// Home Page Innovation In Action Slider
  $('.innoActinSliderTxt').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.innoActinSliderImg'
  });
  $('.innoActinSliderImg').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.innoActinSliderTxt',
    dots: false,
    arrows: false,
    // centerMode: true,
    focusOnSelect: true
  });
  

});