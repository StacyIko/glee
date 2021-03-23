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
		autoplaySpeed: 1000,
		responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3
      }
    },
		{
      breakpoint: 576,
      settings: {
        slidesToShow: 2
      }
    }
	]
	});

	$('.burger, .header__nav a').on('click', function () {
		$('.header__nav').toggleClass('header__nav--active');
	})

	// Скрываем user-nav при скролле
	$(window).on("scroll", function (event) {
		var scroll = $(window).scrollTop();
		if ((scroll > 200) & !$('.header__nav').hasClass('header__nav--active')) {
			$(".user-nav").css("opacity", "0");
		} else {
			$(".user-nav").css("opacity", "1");
		}
	});

	// Спойлер
	$('.footer__heading-js').on('click', function () {
		$(this).toggleClass('footer__heading-js--active').next().slideToggle(300);
	});

	var mixer = mixitup('.design-cards', {
		animation: {
      duration: 300,
			effects: "fade translateZ(-100px)"
    },
		selectors: {
      // target: '[data-ref="design-card"]',
			control: '.design__mixitup-control'
    }
	});

	var mixer = mixitup('.product-cards', {
		animation: {
      effects: "fade translateZ(-100px)"
    },
		selectors: {
      // target: '[data-ref="week-card"]',
			control: '.week__mixitup-control'
    },
	});
});