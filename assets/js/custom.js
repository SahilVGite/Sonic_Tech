$(document).ready(function () {
  // // Scroll to contact section if hash present
  // var hash = window.location.hash;
  // if (hash === "#contactSec") {
  //   var $target = $(hash);
  //   if ($target.length) {
  //     var offset = 0; // Adjust if fixed header exists
  //     setTimeout(function () {
  //       $('html, body').animate({
  //         scrollTop: $target.offset().top - offset
  //       }, 600);
  //     }, 100); // slight delay for proper scroll
  //   }
  // }

  // AOS Initialize
  AOS.init({
    once: true,
    mirror: false,
    offset: 50,
    duration: 800,
    easing: 'ease-in-out',
  });

  // Stack Cards Z-Index
  $('.stackcards').each(function (i, el) {
    $(el).css('z-index', $('.stackcards').length - i);
  });


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
// Function to handle tab activation
function activateTab(tabBtn) {
  var tab_id = tabBtn.data("id");
  var tab_index = tabBtn.index();
  
  // Remove all positioning classes
  $(".tabBtn-container").removeClass("pos-1 pos-2 pos-3 pos-4 pos-5");
  
  // Add class based on which tab is active
  $(".tabBtn-container").addClass("pos-" + (tab_index + 1));
  
  // Remove active class from all
  $(".tabBtn, .tab-content").removeClass("active");
  
  // Add active class to hovered/clicked tab and content
  tabBtn.addClass("active");
  $("#" + tab_id).addClass("active");
}

// Click event handler
$(".tabBtn").click(function() {
  activateTab($(this));
});

// Hover event handler (with delay to prevent flickering)
var hoverTimeout;
$(".tabBtn").hover(
  function() { // mouseenter
    var $this = $(this);
    hoverTimeout = setTimeout(function() {
      activateTab($this);
    }, 200); // 200ms delay before activating
  },
  function() { // mouseleave
    clearTimeout(hoverTimeout);
    // Optional: You can choose to keep the last clicked tab active
    // or revert to default when mouse leaves
    // If you want to keep the last clicked tab active, do nothing here
  }
);


  // Lazy Loading — apply only if not already set
  $("img:not([loading]), iframe:not([loading])").attr("loading", "lazy");

  // our value slide
  $('.ourValueSlide').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
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
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: 'linear',
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: { slidesToShow: 6 }
      },
      {
        breakpoint: 1300,
        settings: { slidesToShow: 5 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 3 }
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
    focusOnSelect: true
  });

  // Floating Label Input Handling
  function toggleFloatingLabel($element) {
    const hasValue = $element.val() !== '' && (!$element.is('select') || $element.find('option:selected').val() !== '');
    const isFocused = $element.is(':focus');
    const $label = $element.siblings('.floating-label');

    $label.toggleClass('active', hasValue || isFocused);

    if ($element.is('select')) {
      $element.toggleClass('has-value', hasValue);
    }
  }

  function handleFloatingLabel(event) {
    toggleFloatingLabel($(this));
  }

  $('.floating-labelInp').on('focus blur change', 'input, select, textarea', handleFloatingLabel);

  $('.floating-labelInp input, .floating-labelInp select, .floating-labelInp textarea').each(function () {
    toggleFloatingLabel($(this));
  });

});

$(window).on('load', function () {
  var hash = window.location.hash;
  if (hash === "#contactSec") {
    var $target = $(hash);
    if ($target.length) {
      var offset = 0; // Adjust if sticky header exists

      setTimeout(function () {
        $('html, body').animate({
          scrollTop: $target.offset().top - offset
        }, 600);
      }, 500); // Delay increased to 500ms
    }
  }
});


window.addEventListener('load', function () {

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Horizontal Scroll Section
  const horizontalSection = document.querySelector('.offeringSecScrollerSub');
  if (horizontalSection) {
    gsap.to('.offeringSecScrollerSub', {
      x: () => horizontalSection.scrollWidth * -1,
      xPercent: 100,
      scrollTrigger: {
        trigger: '.offeringSecScrollerSub',
        start: 'center center',
        end: '+=2000px',
        pin: '.wtWeOffSec',
        scrub: true,
        invalidateOnRefresh: true
      }
    });

    // Performance Tip: Hint browser for smoother GPU rendering
    horizontalSection.style.willChange = 'transform';
  } else {
    console.warn('Element .offeringSecScrollerSub not found.');
  }

  // Vision Mission Scroll Section
  const visionMissionSection = document.querySelector('.visionMission');
  if (visionMissionSection) {
    const visionMissionTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".visionMission",
        start: "center center",
        end: "+=3000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      }
    });

    visionMissionTl
      .from("#rocket img", {
        y: 300,
        opacity: 0,
        duration: 1,
      })
      .from("#mission", {
        x: -200,
        opacity: 0,
        duration: 1,
      }, "+=0.5")
      .from("#vision", {
        x: 200,
        opacity: 0,
        duration: 1,
      }, "+=0.5");

    // GPU hint
    visionMissionSection.style.willChange = 'transform';
  } else {
    console.warn('Element .visionMission not found.');
  }

  // Solution Page Card Stack Animation
  const cardStackSection = document.querySelector('.card-stack-section');
  const cards = gsap.utils.toArray(".stackcards");

  if (cardStackSection && cards.length > 0) {
    ScrollTrigger.matchMedia({

      "(min-width: 611px)": function () {
        const cardsTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".card-stack-section",
            start: "center center",
            end: "+=" + (cards.length * window.innerHeight),
            scrub: true,
            pin: true,
          }
        });

        cards.forEach((card, i) => {
          gsap.set(card, {
            scale: 1 - (i * 0.05),
            zIndex: cards.length - i
          });
        });

        cards.forEach((card, i) => {
          if (i === cards.length - 1) return;

          let next = cards[i + 1];

          cardsTl.to(card, {
            yPercent: -200,
            scale: 1 - ((i + 1) * 0.05),
            ease: "power1.inOut"
          }, "+=0.3")
            .to(next, {
              scale: 1 - (i * 0.05),
              ease: "power1.inOut"
            }, "<");
        });

        // GPU hint
        cardStackSection.style.willChange = 'transform';
      },

      "(max-width: 610px)": function () {
        console.log('Card stack animation disabled on small screens.');
      }

    });

  } else {
    console.warn('Element .card-stack-section or .stackcards not found.');
  }

  // This code for solution page GSAP animation when user scroll cards will take place of before card

  // const cardStackSection = document.querySelector('.card-stack-section');
  // const cards = gsap.utils.toArray(".stackcards");

  // if (cardStackSection && cards.length > 0) {
  //   ScrollTrigger.matchMedia({

  //     "(min-width: 611px)": function () {
  //       const cardsTl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: ".card-stack-section",
  //           start: "center center",
  //           end: "+=" + ((cards.length + 1) * window.innerHeight),
  //           scrub: true,
  //           pin: true,
  //           onUpdate: (self) => {
  //             let progress = self.progress * (cards.length - 1);
  //             let activeIndex = Math.floor(progress);

  //             cards.forEach((card, i) => {
  //               const shiftIndex = i - activeIndex;

  //               if (shiftIndex >= 0) {
  //                 gsap.to(card, {
  //                   yPercent: -10 * shiftIndex,
  //                   scale: 1 - (0.05 * shiftIndex), // 👈 Scaling correctly while scrolling
  //                   duration: 0.2,
  //                   overwrite: true
  //                 });
  //               } else {
  //                 gsap.to(card, {
  //                   yPercent: -200,
  //                   scale: 1 - (0.05 * (cards.length - 1)), // 👈 keep last card's minimum scale
  //                   duration: 0.2,
  //                   overwrite: true
  //                 });
  //               }
  //             });
  //           }
  //         }
  //       });

  //       // Initial Setup
  //       cards.forEach((card, i) => {
  //         gsap.set(card, {
  //           yPercent: -10 * i,
  //           scale: 1 - (0.05 * i),
  //           zIndex: cards.length - i
  //         });
  //       });

  //       cardStackSection.style.willChange = 'transform';
  //     },

  //     "(max-width: 610px)": function () {
  //       console.log('Card stack animation disabled on small screens.');
  //     }

  //   });

  // } else {
  //   console.warn('Element .card-stack-section or .stackcards not found.');
  // }


});
