/*
	Template:  websiteUtil - Personal Portfolio Template
	Author: mital_04
	Design and Developed by: mital_04
*/
(function($){
	"use strict"
	var websiteUtil = {};
	
	/*--------------------
		* Skill
	----------------------*/
	websiteUtil.SkillBar = function() {
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
	websiteUtil.WebLoad = function(){
		document.getElementById("loading").style.display = "none"; 
	}

	websiteUtil.HeaderScroll = function(){
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
	websiteUtil.mTypeIt = function(){
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
	websiteUtil.HeaderFixed = function(){
		if ($(window).scrollTop() >= 70) {
	       $('header').addClass('fixed-header');
				 $('body').addClass('fixed-header-body');
				 $('footer').addClass('footer-visible');
	    }
	    else {
	       $('header').removeClass('fixed-header');
				 $('body').removeClass('fixed-header-body');
				$('footer').removeClass('footer-visible');
	    }
	}
	/*--------------------
		* Header Fixed
	----------------------*/
	websiteUtil.FullScreen = function(){
		$(".full-screen").height($(window).height());	
	}

	/*--------------------
		* Counter JS
	----------------------*/
	var a = 0;
	websiteUtil.Counter = function(){
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
	websiteUtil.PortfolioSlider = function(){
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

	websiteUtil.ClientSlider = function(){
		var testimonials_slider = $('#client-slider-single');
	    testimonials_slider.owlCarousel({
	        loop: true,
	        margin: 0,
	        nav:false,
	        items:1
	    });
	}

	/*--------------------
		* websiteUtil function
	----------------------*/
	// Window on Load
	$(window).on("load", function(){
		websiteUtil.WebLoad();
	});
	// Document on Ready
	$(document).on("ready", function(){
		websiteUtil.mTypeIt(),
		websiteUtil.HeaderScroll(),
		websiteUtil.SkillBar(),
		websiteUtil.PortfolioSlider(),
		websiteUtil.ClientSlider(),
		websiteUtil.FullScreen();
	});

	// Document on Scrool
	$(window).on("scroll", function(){
		websiteUtil.Counter(),
		websiteUtil.HeaderFixed();
	});

	// Window on Resize
	$(window).on("resize", function(){
		websiteUtil.FullScreen();
	});


})(jQuery);