$(function() {
	// $('.burger, .menu a').on('click', function () {
	// 	$('.menu').toggleClass('menu--active');
	// })

	$('.intro').slick({
		dots: true,
		arrows: false
	});

	var mixer = mixitup('.product-cards', {
		animation: {
        duration: 300
    }
	});
});