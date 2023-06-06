var owl = $('.owl-carousel');
owl.owlCarousel({
    nav: true,
      navText: ["<div class='nav-button owl-prev'></div>", "<div class='nav-button owl-next'></div>"],
    lazyLoad: true,
    center: true,
    autoplay: true,
    autoplaySpeed: 200,
    loop:true,
    nav:true,
    margin:10,
    mouseDrag: true,
    dots: true,
    responsive:{
        0:{
            stagePadding: 30,
            items:1
        },        
        800:{
          stagePadding: 30,
          items:1
        },
        1000:{
            items:3
        }
    }
});