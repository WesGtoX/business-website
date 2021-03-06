jQuery(document).ready(function() {
	smoothScroll();
	onScroll();
	mobileMenu();
});

function smoothScroll() {
	jQuery("a[href^='#']").click(function() {	// all 'href' containing '#'.

		mainMenuHeight = jQuery('.main-menu').innerHeight();

		jQuery('html, body').animate({
			scrollTop: jQuery(jQuery(this).attr('href')).offset().top - mainMenuHeight
		}, 1000);
	});
}

function onScroll() {
	let sections = jQuery('.section');
	let mainMenu = jQuery('.main-menu');
	let mainMenuHeight = jQuery('.main-menu').innerHeight();

	jQuery(window).on('scroll', function() {
		let cur_pos = jQuery(this).scrollTop();


		sections.each(function() {
			let top = jQuery(this).offset().top - mainMenuHeight;


			if (cur_pos >= top) {
				mainMenu.find('a').removeClass('active');
				mainMenu.find('a[href="#' + jQuery(this).attr('id') + '"]').addClass('active');
			}
		})
	});
}

function mobileMenu() {
	jQuery('.menu-icon').on('click', function() {
		jQuery('.menu-icon').toggleClass('change');
		jQuery('.mobile-nav').toggleClass('active');
	});

	jQuery('ul.mobile-nav li a').on('click', function() {
		jQuery('.menu-icon').removeClass('change');
		jQuery('.mobile-nav').removeClass('active');
	})
}