/****************************************HOME PAGE******************************************/

$(document).ready(function () {
	// wow.js
	new WOW().init();

	// sticky.js
	$('#mainPrimary').sticky({ topSpacing: 0 });

	//slick carousel
	$('.slide').slick({
		slidesToShow: 1,
		autoplaySpeed: 5000,
		autoplay: false,
		dots: true,
		infinite: true,
		speed: 300,
		fade: true,
		arrows: false,
	});

	// counter up 2 js initialize
	jQuery(function ($) {
		'use strict';
		var counterUp = window.counterUp['default']; // import counterUp from "counterup2"
		var $counters = $('.counter');
		/* Start counting, do this on DOM ready or with Waypoints. */
		$counters.each(function (ignore, counter) {
			var waypoint = new Waypoint({
				element: $(this),
				handler: function () {
					counterUp(counter, {
						duration: 5000,
						delay: 16,
					});
					this.destroy();
				},
				offset: 'bottom-in-view',
			});
		});
	});
});

/****************************************HOME PAGE 2******************************************/

$(document).ready(function () {
	// sticky.js
	$('.pg2-primarymenu').sticky({ topSpacing: 0 });

	//slick carousel
	$('.pg2-slide').slick({
		slidesToShow: 1,
		autoplaySpeed: 5000,
		autoplay: false,
		dots: true,
		infinite: true,
		speed: 300,
		fade: true,
	});

	// counterup.js
	$('.counter1').counterUp({
		delay: 20,
		time: 1500,
	});
});
