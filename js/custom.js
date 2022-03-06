$(document).ready(function () {
	// serchbox-content show
	$('.topbar-serch').click(function () {
		$('.serchbox-content').toggleClass('display-b');
	});

	// menu show
	$('.menu-bar').click(function () {
		$('.menu').toggleClass('display-b');
	});

	// submenu show
	$('.submenu-show').click(function () {
		event.preventDefault();
		$(this).closest('a').next().toggleClass('display-b');
	});

	// add active class
	$('.slide2.slick-current.slick-active').parents('.slide').find('.slick-dots').addClass('active');

	// scrollup own
	$(window).scroll(function () {
		if ($(this).scrollTop() > 400) {
			$('#scroll-top').css('display', 'block');
		} else {
			$('#scroll-top').css('display', 'none');
		}
	});
	$('#scroll-top').click(function () {
		$('html,body').animate({ scrollTop: 0 }, 3000);
	});
});

// loader
var loader = document.getElementById('loading');
window.addEventListener('load', function () {
	setTimeout(function () {
		loader.style.display = 'none';
	}, 5000);
});
