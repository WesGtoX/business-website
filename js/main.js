jQuery(document).ready(function() {
	smoothScroll();
});

function smoothScroll() {
	jQuery("a[href^='#']").click(function() {

		mainMenuHeight = jQuery('.main-menu').innerHeight();

		jQuery('html, body').animate({
			scrollTop: jQuery(jQuery(this).attr('href')).offset().top - mainMenuHeight
		}, 1000);
	});
}