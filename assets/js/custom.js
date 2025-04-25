$(document).ready(function () {

  $('.stackcards').each(function(i, el) {
  $(el).css('z-index', $('.stackcards').length - i);
});


  var hash = window.location.hash;

    if (hash === "#contactSec") {
      var $target = $(hash);
      if ($target.length) {
        var offset = 0; // Adjust based on your fixed header height
        setTimeout(function () {
          $('html, body').animate({
            scrollTop: $target.offset().top - offset
          }, 600);
        }, 100); // slight delay ensures the browser has jumped to the anchor
      }
    }

  
  // Sticky Header
  $(window).on("scroll", function () {
    $("header").toggleClass("stickyHead", $(this).scrollTop() > 0);
  });

  // Hamburger Menu
  $(".ham_menu").on("click", function () {
    $(".headMenu").toggleClass("active");
    $("body").toggleClass("menu-open");

    if (!$(".menu-overlay").length) {
      $("header").append('<div class="menu-overlay"></div>');
    }
  });

  $(document).on("click", ".menu-overlay, .close_menu", function () {
    $(".headMenu").removeClass("active");
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


  $('.advDetSecSlider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1.5,
    centerMode: false,
    variableWidth: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.TmPartnersSecCards').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    centerMode: false,
    variableWidth: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3
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





    // Code to handle floating lable
  // Function to toggle 'active' class based on value or focus
  function toggleFloatingLabel($element) {
    const hasValue = $element.val() !== '' && (!$element.is('select') || $element.find('option:selected').val() !== '');
    const isFocused = $element.is(':focus');

    const $label = $element.siblings('.floating-label');
    $label.toggleClass('active', hasValue || isFocused);

    // 👇 Apply color change if it's a <select>
    if ($element.is('select')) {
      $element.toggleClass('has-value', hasValue);
    }
  }


  // Event handler for focus, blur, and change
  function handleFloatingLabel(event) {
    toggleFloatingLabel($(this));
  }

  // Apply event handlers to inputs and selects
  $('.floating-labelInp').on('focus blur change', 'input, select', handleFloatingLabel);

  // Check initial state on page load
  $('.floating-labelInp input, .floating-labelInp select').each(function () {
    toggleFloatingLabel($(this));
  });
  

});