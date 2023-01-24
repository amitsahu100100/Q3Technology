$(document).ready(function () {
  var btn = $("#backtotop");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  // Testimonial

  var varHomeSlider = jQuery(".banner-slider");
  varHomeSlider.owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    autoplay: true,
    margin: 0,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    smartSpeed: 2000,
    autoplaySpeed: 2000,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    touchDrag: false,
    mouseDrag: false,
  });
  var varHomeSlider = jQuery(".bid-slider");
  varHomeSlider.owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    autoplay: true,
    margin: 0,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    smartSpeed: 4000,
    autoplaySpeed: 2000,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    touchDrag: false,
    mouseDrag: false,
  });
  var varHomeSlider = jQuery(".upcoming-slider");
  varHomeSlider.owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    items: 1,
    autoplay: true,
    margin: 0,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    smartSpeed: 4000,
    autoplaySpeed: 2000,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    touchDrag: false,
    mouseDrag: false,
  });
  $('#category-slider').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:false,
	dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
$('#client-slider').owlCarousel({
  stagePadding: 50,
  loop:true,
  margin:10,
  nav:false,
  dots: false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
});

$('#featured-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots: false,
  autoplay: true,
  smartSpeed: 4000,
  autoplaySpeed: 2000,
  autoplayTimeout: 4000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
});



});
