$(function() {
	// $('.burger, .menu a').on('click', function () {
	// 	$('.menu').toggleClass('menu--active');
	// })

	$('.intro').slick({
		dots: true,
		arrows: false,
		fade: true
	});

	$('.partners__items').slick({
		dots: false,
		arrows: false,
		slidesToShow: 5,
		infinite: true,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1000
	});

	var mixer = mixitup('.product-cards', {
		animation: {
        duration: 300,
				effects: 'fade translateZ(-100px)'
    },
		selectors: {
      target: '[data-ref="week-card"]',
			control: '.week__mixitup-control'
    }
	});

	$('.burger, .header__nav a').on('click', function () {
		$('.header__nav').toggleClass('header__nav--active');
	})

	$(window).on("scroll", function (event) {
		var scroll = $(window).scrollTop();
		if (scroll > 200) {
			$(".user-nav").css("opacity", "0");
		} else {
			$(".user-nav").css("opacity", "1");
		}
	});

	var mixer = mixitup('.design-cards', {
		animation: {
      duration: 300
    },
		selectors: {
      target: '[data-ref="design-card"]',
			control: '.design__mixitup-control'
    }
	});
});