/*
	Template:  Morgan - Personal Portfolio Template
	Author: mital_04
	Design and Developed by: mital_04
*/
(function($){
	"use strict"
	var MORGAN = {};
	
	/*--------------------
		* Skill
	----------------------*/
	MORGAN.SkillBar = function() {
		$('.skillbar').skillBars({
				from: 0,
				speed: 4000, 
				interval: 100,
				decimals: 0,
		});
	}

	/*--------------------
		* Pre Load
	----------------------*/
	MORGAN.WebLoad = function(){
		document.getElementById("loading").style.display = "none"; 
	}

	MORGAN.HeaderScroll = function(){
        $('header a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
              var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top - 65,
                      }, 1000);
                      return false;
                  }
            }
        });
    }

	/*--------------------
		* Type It
	----------------------*/
	MORGAN.mTypeIt = function(){
		new TypeIt('#type-it', {
	        speed: 200,
	        loop:true,
	        strings: [
	          'Developer',
						'Photographer',
						''
	        ],
	        breakLines: false
    	});	
	}
	


	/*--------------------
		* Header Fixed
	----------------------*/
	MORGAN.HeaderFixed = function(){
		if ($(window).scrollTop() >= 60) {
	       $('header').addClass('fixed-header');
	       $('body').addClass('fixed-header-body');
	    }
	    else {
	       $('header').removeClass('fixed-header');
	       $('body').removeClass('fixed-header-body');
	    }
	}
	/*--------------------
		* Header Fixed
	----------------------*/
	MORGAN.FullScreen = function(){
		$(".full-screen").height($(window).height());	
	}

	/*--------------------
		* Counter JS
	----------------------*/
	var a = 0;
	MORGAN.Counter = function(){
		var oTop = $('.counter-box').offset().top - window.innerHeight;
		  if (a == 0 && $(window).scrollTop() > oTop) {
		    $('.count').each(function () {
		          $(this).prop('Counter',0).animate({
		              Counter: $(this).text()
		          }, {
		              duration: 4000,
		              easing: 'swing',
		              step: function (now) {
		                  $(this).text(Math.ceil(now));
		              }
		          });
		      });
		    a = 1;
		  }
	}

	/*--------------------
		* owl Slider
	----------------------*/
	MORGAN.PortfolioSlider = function(){
		var testimonials_slider = $('#portfolio-slider-single');
	    testimonials_slider.owlCarousel({
	        loop: true,
	        margin: 0,
	        nav:false,
	        responsive: {
	          0: {
	            items: 1
	          },
	          768: {
	            items: 2
	          },
	          991: {
	            items: 3
	          },
	          1140: {
	            items: 3
	          },
	          1650: {
	            items: 4
	          }
	        }
	    });
	}

	MORGAN.ClientSlider = function(){
		var testimonials_slider = $('#client-slider-single');
	    testimonials_slider.owlCarousel({
	        loop: true,
	        margin: 0,
	        nav:false,
	        items:1
	    });
	}

	/*--------------------
		* MORGAN function
	----------------------*/
	// Window on Load
	$(window).on("load", function(){
		MORGAN.WebLoad();
	});
	// Document on Ready
	$(document).on("ready", function(){
		MORGAN.mTypeIt(),
		MORGAN.HeaderScroll(),
		MORGAN.SkillBar(),
		MORGAN.PortfolioSlider(),
		MORGAN.ClientSlider(),
		MORGAN.FullScreen();
	});

	// Document on Scrool
	$(window).on("scroll", function(){
		MORGAN.Counter(),
		MORGAN.HeaderFixed();
	});

	// Window on Resize
	$(window).on("resize", function(){
		MORGAN.FullScreen();
	});


})(jQuery);