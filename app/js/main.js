$(function() {
	$('.related__cards').slick({
		slidesToShow: 4,
  	slidesToScroll: 1,
  	dots: false,
		arrows: false,
		// autoplay: true,
		autoplaySpeed: 5000,
	});
	$('#prev').on('click', function() {
  	$('.related__cards').slick('slickPrev');
	});
	$('#next').on('click', function() {
  	$('.related__cards').slick('slickNext');
	});
	$('.tabs__link').on('click', function(e){
		e.preventDefault();
		$('.tabs__link').removeClass('tabs__link--active');
		$(this).addClass('tabs__link--active');

		$('.tabs__body').removeClass('tabs__body--active');
		$($(this).attr('href')).addClass('tabs__body--active');
	})
	$('.product-details__num, .blog-aside__search-input').styler();
	$('.product-details__big').slick({
		asNavFor: '.product-details__thumb',
  	arrows: false,
  	fade: true,
		draggable: false  	
	});
	$('.product-details__thumb').slick({
		asNavFor: '.product-details__big',
		slidesToShow: 3,
  	slidesToScroll: 1,
  	dots: false,
		arrows: false,
  	focusOnSelect: true,
		vertical: true
		// draggable: false
	});
	$('.filter-item__title').on('click', function () {
		$(this).toggleClass('filter-item__title--active').next().slideToggle(300);
		})
	$('.user-nav__menu').on('click', function () {
		$('.catalog__cards').toggleClass('catalog__cards--list');
	})

	$(".recent__stars").rateYo({
		normalFill: "#d6d6d6",
		ratedFill: "#ffcc00",
		starWidth: "10px",
		spacing   : "6px",
		readOnly: true
  });

	$(".product-card__stars").rateYo({
		normalFill: "#d6d6d6",
		ratedFill: "#ffcc00",
		starWidth: "18px",
		spacing   : "12px",
		readOnly: true
  });

	$(".comments-form__stars").rateYo({
		normalFill: "#d6d6d6",
		ratedFill: "#ffcc00",
		starWidth: "18px",
		spacing   : "12px"
  });

	$('.filter-price__input').ionRangeSlider({
		prefix: "$",
		onStart: function (data) {
			$('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
		},
		onChange: function (data) {    
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
	}
	);

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

	$('.burger, .header__link').on('click', function () {
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
	// $('.footer__heading-js').on('click', function () {
	// 	if ($(window).width() <= 576) {
	// 			$(this).toggleClass('footer__heading-js--active').next().slideToggle(300);
	// 		} else {
	// 			$('.footer__list').css("display", "block");
	// 		}
	// 	})
	// if ($(window).width() <= 576) {
	// 	$('.footer__heading-js').on('click', function () {
	// 		$(this).toggleClass('footer__heading-js--active').next().slideToggle(300);
	// 	})} else {
	// 			$('.footer__list').css("display", "block");
	// 	}
	

	var mixer = mixitup('.design-cards', {
		animation: {
      duration: 300,
			effects: "fade translateZ(-100px)"
    },
		selectors: {
			control: '.design__mixitup-control'
    }
	});

	var mixer = mixitup('.product-cards', {
		animation: {
			duration: 300,
      effects: "fade translateZ(-100px)"
    },
		selectors: {
			control: '.week__mixitup-control'
    },
	});
});