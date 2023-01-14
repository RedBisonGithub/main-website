$(document).ready(function(){

	"use strict";
	
	
    /* =================================
	SCROLL TO
	=================================== */
	$('a[href^="#"]').on('click', function(event) {

	    var target = $(this.getAttribute('href'));

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }

	});
	
	/* =================================
	BANNER ROTATOR IMAGE 
	=================================== */
	var slides = $(".full-screen"),
    b = slides.find('.item');
    b.each(function(){
        var e = $(this),
        ocImg = e.find('img').attr('src');
        e.css({'background-image': 'url(' + ocImg + ')'});
    });

	slides.owlCarousel({
	    // stagePadding: 50,
	    loop: true,
	    // margin: 10,
        autoplayTimeout: 5000,
	    nav: true,
        dots: true,
        dotsData: true,
		navText: [
	        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
	        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
	    ],
	    navContainer: '.banner .custom-nav',
	    items: 1,
	

		

	}
	
	
	
	);	

	/* =================================
	BACK TO TOP 
	=================================== */
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
	



	var carousel_project = $("#carousel-project");
	carousel_project.owlCarousel({
		autoplay: false,
		margin: 10,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		dots: true,
		loop: true,
		nav: true,
		items : 4,
		responsive:{
			0:{
				dots: true,
				nav: false,
				items:1,
			},
			768:{
				items:2
			},
			1000:{
				items:4
			}
		}
	});

	var carousel_project2 = $("#carousel-project-2");
	carousel_project2.owlCarousel({
		autoplay: false,
		margin: 10,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		dots: true,
		loop: true,
		nav: true,
		navText: ["❮","❯"],
		items : 4,
		responsive:{
			0:{
				dots: true,
				nav: false,
				items:1,
				
			},
			768:{
				items:2
			},
			1000:{
				items:4
			}
		}
	});

	var carousel_project3 = $("#carousel-project-3");
	carousel_project3.owlCarousel({
		autoplay: false,
		margin: 10,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		dots: true,
		loop: true,
		nav: true,
		navText: ["❮","❯"],
		items : 4,
		responsive:{
			0:{
				dots: true,
				nav: false,
				items:1,
				
			},
			768:{
				items:2
			},
			1000:{
				items:4
			}
		}
	});

	var carousel_project4 = $("#carousel-project-4");
	carousel_project4.owlCarousel({
		autoplay: false,
		margin: 10,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		dots: true,
		loop: true,
		nav: true,
		navText: ["❮","❯"],
		items : 4,
		responsive:{
			0:{
				dots: true,
				nav: false,
				items:1,
				
			},
			768:{
				items:2
			},
			1000:{
				items:4
			}
		}
	});


	var carousel_project5 = $("#carousel-project-5");
	carousel_project5.owlCarousel({
		autoplay: false,
		margin: 10,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		dots: true,
		loop: true,
		nav: true,
		navText: ["❮","❯"],
		items : 4,
		responsive:{
			0:{
				dots: true,
				nav: false,
				items:1,
				
			},
			768:{
				items:2
			},
			1000:{
				items:4
			}
		}
	});


	var carousel_project6 = $("#carousel-project-6");
	carousel_project6.owlCarousel({
		autoplay: false,
		margin: 10,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		dots: true,
		loop: true,
		nav: true,
		navText: ["❮","❯"],
		items : 4,
		responsive:{
			0:{
				dots: true,
				nav: false,
				items:1,
				
			},
			768:{
				items:2
			},
			1000:{
				items:4
			}
		}
	});
	
	
	
	
	var carousel_partners = $("#carousel_partners");
	carousel_partners.owlCarousel({
		autoplay: true,
		margin: 10,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		dots: false,
		loop: true,
		nav: false,
		items : 4,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1000:{
				items:4
			}
		}
	});
	
	/* =================================
	MAGNIFIC POPUP
	=================================== */
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });

	$('.grid, .popup-gallery').magnificPopup({
	  delegate: 'a',
	  type: 'image',
	  tLoading: 'Loading image #%curr%...',
	  mainClass: 'mfp-img-mobile',
	  gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0,1]
	  },
	  image: {
		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		titleSrc: function(item) {
		  return item.el.attr('title') + '';
		}
	  }
	});

	/* =================================
	ISOTOP
	=================================== */	

	var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		isFitWidth: true,
		masonry: {
			columnWidth: '.grid-sizer'
		}
	});

	$grid.imagesLoaded().progress( function() {
		$grid.isotope('layout');
	});

	$('#filter2 a').on('click', function() {
 		$('#filter2 .active').removeClass('active');
		$(this).addClass('active');
 
		var selector = $(this).attr('data-filter');
		$grid.isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				animationEngine : "jquery"
			}
		});
		return false;
 	});

	var $gridv2 = $('.grid-v1');
	$gridv2.isotope({
		itemSelector: '.grid-item-v1',
		isFitWidth: true,
		filter: '*',
		masonry: {
			columnWidth: '.grid-sizer-v1'
		}
	});

	$gridv2.imagesLoaded().progress( function() {
		$gridv2.isotope('layout');
	});

	$('.portfolio_filter a').on('click', function() {
 		$('.portfolio_filter .active').removeClass('active');
		$(this).addClass('active');
 
		var selector = $(this).attr('data-filter');
		$gridv2.isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				animationEngine : "jquery"
			}
		});
		return false;
 	});


	
});



  
  