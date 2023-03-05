feather.replace();

  function initializeOwlCarousel(){
    $(".owl-carousel-topright").owlCarousel({
        loop:true,
        margin:10,
        items:1,
        nav:true,
        dots:false,
        autoplay:true,
        navElement:'div',
        navText: [
          `<button type="button" id="lg-prev-1" aria-label="Previous slide" class="btn-icon btn-icon-outline" style="opacity:1;right:0;top:0;"> <img src="assets/img/icons/left-white.svg" /></button>`,
          `<button type="button" id="lg-next-1" aria-label="Next slide" class="btn-icon btn-icon-outline"  style="opacity:1;right:0;top:0;"> <img src="assets/img/icons/right-white.svg" /> </button>`],
      });


      $(".owl-carousel-industry").owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        dots:false,
        autoplay:false,
        stagePadding:0,
        navElement:'div',
        navText: [
          `<button type="button" id="lg-prev-1" aria-label="Previous slide" class="btn-icon btn-icon-outline" style="opacity:1;right:0;top:0;"> <img src="./assets/img/icons/left-white.svg" /></button>`,
          `<button type="button" id="lg-next-1" aria-label="Next slide" class="btn-icon btn-icon-outline"  style="opacity:1;right:0;top:0;"> <img src="./assets/img/icons/right-white.svg" /> </button>`],
          responsiveClass:true,
    responsive:{
        0:{
          items:1,
          stagePadding:45
        },
        600:{
          items:2,
          stagePadding:45
        },
        700:{
            items:3
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
      });

      $(".owl-carousel-industry-inner").owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        dots:false,
        autoplay:false,
        stagePadding:0,
        navElement:'div',
        navText: [
          `<button type="button" id="lg-prev-1" aria-label="Previous slide" class="btn-icon btn-icon-outline" style="opacity:1;right:0;top:0;"> <img src="../assets/img/icons/left-white.svg" /></button>`,
          `<button type="button" id="lg-next-1" aria-label="Next slide" class="btn-icon btn-icon-outline"  style="opacity:1;right:0;top:0;"> <img src="../assets/img/icons/right-white.svg" /> </button>`],
          responsiveClass:true,
    responsive:{
        0:{
          items:1,
          stagePadding:45
        },
        600:{
          items:2,
          stagePadding:45
        },
        700:{
            items:3
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
      });

      $(".owl-carousel-testimonial").owlCarousel({
        loop:false,
        items:3,
        nav:true,
        autoWidth:true,
        margin:20,
        dots:false,
        autoplay:false,
        navElement:'div',
       
        navText: [
          `<button type="button" id="lg-prev-1" aria-label="Previous slide" class="btn-icon btn-icon-outline" style="opacity:1;right:0;top:0;"> <img src="assets/img/icons/left-white.svg" /></button>`,
          `<button type="button" id="lg-next-1" aria-label="Next slide" class="btn-icon btn-icon-outline"  style="opacity:1;right:0;top:0;"> <img src="assets/img/icons/right-white.svg" /> </button>`],
          responsive:{
            0:{
              nav:false,
              dots: true
            },
            600:{
             
              nav:true,
              dots: false
            },
        }
      });

      $(".owl-carousel-videos").owlCarousel({
        loop:true,
        items:2,
        nav:true,
        center:true,
        margin:0,
        stagePadding: 0,
        navElement:'div',
       
        navText: [
          `<button type="button" id="lg-prev-1" aria-label="Previous slide" class="btn-icon btn-icon-outline btn-icon-outline-dark" style="opacity:1;right:0;top:0;"> <img src="../assets/img/icons/left-white.svg" /></button>`,
          `<button type="button" id="lg-next-1" aria-label="Next slide" class="btn-icon btn-icon-outline btn-icon-outline-dark"  style="opacity:1;right:0;top:0;"> <img src="../assets/img/icons/right-white.svg" /> </button>`],
          responsive:{
            0:{
              items:1,
              dots: true,
              nav:false
            },
            800:{
              items:2,
              dots: false,
              nav:true
            },
        }
      });

      $(".owl-carousel-services").owlCarousel({
        loop:false,
        items:5,
        nav:true,
        autoWidth:true,
        stagePadding:60,
        dots:false,
        touchDrag:true,
        mouseDrag  : true,
        autoplay:false,
        navElement:'div',
        responsive:{
          0:{
           margin: 15,
           dots: true,
           nav: false
          },
          600:{
            margin: 20,
            dots: false,
            nav: true
          },
          1000:{
            margin: 25
          },
          1400:{
            margin: 30
          }
      },
        navText: [
          `<button type="button" id="lg-prev-1" aria-label="Previous slide" class="btn-icon btn-icon-outline btn-icon-outline-dark" style="opacity:1;right:0;top:0;"> <img src="../assets/img/icons/left-white.svg" /></button>`,
          `<button type="button" id="lg-next-1" aria-label="Next slide" class="btn-icon btn-icon-outline btn-icon-outline-dark"  style="opacity:1;right:0;top:0;"> <img src="../assets/img/icons/right-white.svg" /> </button>`],
      });

    //console.log("initialize owlcarousel")
  }

  function initializeFeatherIcons(){
    feather.replace()
    console.log("initialize feather icons")
  }

  $(document).ready(function(){
    initializeOwlCarousel();
    $( "#serviceTabs" ).tabs();
  });

  $('.nav-link-dropdown').on('click', function (event) {

    $('.nav-dropdown-menu').removeClass('show');
    $(".nav-link-dropdown").removeClass('active');

    console.log("remove all classes");
    if($(this).next(".nav-dropdown-menu").hasClass("show")){
      $(this).next(".nav-dropdown-menu").removeClass('show');
      $(this).removeClass('active');
     
    }
    else{
      $(this).next(".nav-dropdown-menu").addClass('show');
      $(this).addClass('active');
    }
    event.stopPropagation();
    
});  

$('.nav-dropdown-menu-close').on('click', function (event) {
  $(this).parent(".nav-dropdown-menu").removeClass('show');
  $(this).parent().prev(".nav-link-dropdown").removeClass('active');
});  

$('body').on('click', function (e) {
  if ((!$('.nav-dropdown-menu').is(e.target) && !$('.nav-link-dropdown').is(e.target) )
      && $('.nav-dropdown-menu').has(e.target).length === 0 
      && $('.show').has(e.target).length === 0
  ) {
      $('.nav-dropdown-menu').removeClass('show');
      $(".nav-link-dropdown").removeClass('active');
  }
});    


$('.hamburger').on("click",function() {
  $( this ).toggleClass( "active" );
  $(".nav-header .nav-menu").toggleClass("open");
 
});