$(document).ready(function () {

    const nextIcon = '<img class="slider-nav" src="assert/right-arrow.png" alt="" />';
    const prevIcon = '<img class="slider-nav" src="assert/right-arrow.png" alt="" />';


  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 12,
    dots: false,
    nav:true,
    autoplay: true,
    autoplayTimeout: 5000,
    
    navText: ['',
                nextIcon
            ],
    responsive:{
        0:{
            items:1,
            
        },
        375:{
            items:1,
            
        },
        450:{
            items:2,
            
        },
        
        
    }
  });
});
