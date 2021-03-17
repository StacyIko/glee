$(function() {
	// $('.burger, .menu a').on('click', function () {
	// 	$('.menu').toggleClass('menu--active');
	// })

	$('.intro').slick({
		dots: true,
		arrows: false
	});

	$('.partners__items').slick({
		dots: false,
		arrows: false,
		slidesToShow: 5,
		infinite: true,
		slidesToScroll: 5,
	});

	var mixer = mixitup('.product-cards', {
		animation: {
        duration: 300
    }
	});

	var mixer = mixitup('.design-cards', {
		animation: {
        duration: 300
    }
	});
});