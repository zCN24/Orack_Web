jQuery(document).ready(function () {

    // use sctict mode js
	"use strict";

	/*** =====================================
    * Client Carousel
    * =====================================***/
	$(".client-carousel").owlCarousel({
		items:4,
		responsive:{
			0:{
				items:1,
			},
			480:{
				items:2,
			},
			991:{
				items:4,
			}
		}
	});
	/*** =====================================
    * Testimonial Carousel
    * =====================================***/
	$(".testimonial-carousel").owlCarousel({
		items:4,
		responsive:{
			0:{
				items:1,
			},
			480:{
				items:1,
			},
			991:{
				items:1,
			}
		}
	});
	/** =====================================
    *   Search Box
    * =====================================**/
   	$('.search-box .search-icon').on('click', function(e) {
        e.preventDefault();
        $('.top-search-input-wrap').addClass('show');
   	});
   	$(".top-search-input-wrap .top-search-overlay, .top-search-input-wrap .close-icon").on('click', function(){
        $('.top-search-input-wrap').removeClass('show');
   	});

	/*** =====================================
    * Sidebar Toggle
    * =====================================***/
	$('#humbarger a').on('click',function(){
         $('.hidden-sidebar').animate().toggleClass('sidebar-show');
    });
	$('#hidden-sidebar-close i').on('click', function(){
		$('.hidden-sidebar').animate().removeClass('sidebar-show');
	});
    var windowHeight = $(window).height();
    $(".hidden-sidebar").css({"height": windowHeight});

    $(window).on('resize',function(){
		var windowHeight = $(window).height();
	    $(".hidden-sidebar").css({"height": windowHeight});
    });

	/*** =====================================
    * Prallex
    * =====================================***/
	if( $('.testimonail-area').length ){
		$('.testimonail-area').parallax("50%", 0.3);
	}

	/*** =====================================
    * Nice Scroll
    * =====================================***/
	if( $('.hidden-sidebar').length ){
		$(".hidden-sidebar").niceScroll({
		    cursorcolor: "#94c501", // change cursor color in hex
		    cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
		    cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
		    cursorwidth: "0", // cursor width in pixel (you can also write "5px")
		    cursorborder: "0px solid #fff", // css definition for cursor border
		    cursorborderradius: "0px", // border radius in pixel for cursor
		});
	};
	/*** =====================================
    * RoundSlider
    * =====================================***/
	function roundSliderActive() {
         var roundSlider = $('.roundslider-active');
         var len = roundSlider.length;
         for (var i = 0; i < len; i++) {
             var roundId = '#' + roundSlider[i].id;
             var dataValue = $(roundId).attr('data-value');
             $(roundId).roundSlider({
				radius: 65,
		 	    width: 4,
		 		startAngle:-90,
		 		editableTooltip:false,
		 		readOnly:true,
				value: dataValue,
		 	    sliderType: "min-range"
             });
         }
     }
	 if($('.roundslider-active').length){
 		roundSliderActive();
 	}
	/*** =====================================
    * 	Mobile Menu
    * =====================================***/
	$('.mobile-background-nav .has-submenu').on('click',function(e) {
	  	e.preventDefault();

	    var $this = $(this);

	    if ($this.next().hasClass('menu-show')) {
	        $this.next().removeClass('menu-show');
	        $this.next().slideUp(350);
	    } else {
	        $this.parent().parent().find('li .dropdown').removeClass('menu-show');
	        $this.parent().parent().find('li .dropdown').slideUp(350);
	        $this.next().toggleClass('menu-show');
	        $this.next().slideToggle(350);
	    }
	});
	$('.mobile-menu-close i').on('click',function(){
	     $('.mobile-background-nav').removeClass('in');
	});

	$('.mobile-logo-search-humbarger .humbarger-button i').on('click',function(){
	     $('.mobile-background-nav').toggleClass('in');
	});

	var windowHeight = $(window).height();
	$(".mobile-background-nav .mobile-inner").css({"height": windowHeight});
	$(window).on('resize',function(){
	    var windowHeight = $(window).height();
		var windowWidth = $(window).width();
	    if (windowWidth < 991) {
	        $(".mobile-background-nav .mobile-inner").css({"height": windowHeight});
	    }
	});

	/** =====================================
	*  Popup Video
	* ===================================== **/
	if($('.play-icon').length){
		$('.play-icon i').magnificPopup({
			items: {
		 		src: 'https://www.youtube.com/watch?v=UAJyJt_lnKA'
			},
			type: 'iframe', // this is default type
		});
	}

	/**
    * =====================================
    * wow Js
    * =====================================
    */
    var wow=new WOW( {
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: false, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function(box) {}
        , scrollContainer: true // optional scroll container selector, otherwise use window
    }
    );
    wow.init();

	jQuery(window).on('load', function() {
		/** =====================================
	  * Preloder
	  * =====================================*/
	    $('.preloader').fadeOut();
	});

	/*** =====================================* Contact Form submission* =====================================*/
	$(function() {
		$('form#contact').on('submit', function(e) {
			e.preventDefault();
			$.post('post-contact-form.php', $(this).serialize()).done(function(data) {
				$('.comment-form').fadeOut('slow', function() {
					$('.comment-form').fadeIn('slow').html(data);
				});
			}).fail(function() {
				alert('Failed to submit. Please Try again.');
			});
		});
	});

	/** =====================================
    *  Gallery Post
    * ===================================== **/
    $(".blog-gallery-post").owlCarousel({
		'items':1,
        'autoplay':true,
        'autoplayTimeout':4000,
		'loop':true,
		'nav':200,
		'dots':false,
		'navText': [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"
		],
	});
	/** =====================================
    *  Color Swicher
    * ===================================== **/
	$('.swhicher-button button').on('click', function(){
		var buttonAttr = $(this).attr('data-att');
		var link = $('link[data-style="color-style"]').attr('href','css/'+buttonAttr+'.css');
	});
	$('.setting-button-wrapper .setting-button').on('click', function(){
		$('.color-shicher-wraper').toggleClass('show-color');
	});

});
