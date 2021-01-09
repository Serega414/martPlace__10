$(function () {
	$('.rate-star').rateYo({
		rating: 5,
        starWidth: '12px',
        readOnly: true
	});

	$('.featured__anim').slick({});

	$('.products__container-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
	});

	$(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 400,
        from: 30,
        to: 300,
        prefix: "$"
	});

	$('.lnr.lnr-frame-expand').on('click', function(){
		$('.product__item').removeClass('list');
		$('.lnr.lnr-frame-expand').addClass('active');
        $('.lnr.lnr-list').removeClass('active');
	});
	$('.lnr.lnr-list').on('click', function(){
		$('.product__item').addClass('list');
		$('.lnr.lnr-list').addClass('active');
        $('.lnr.lnr-frame-expand').removeClass('active');
		
	});
	
	$('.category__btn-list').on('click', function(){
		$('.category__list').slideToggle();
	});
	$('.filter__btn-list').on('click', function(){
		$('.filter__list').slideToggle();
	});
	$('.price__btn-list').on('click', function(){
		$('.price-range__list').slideToggle();
	});

	$('.menu__btn').on('click', function(){
		$('.menu__list').slideToggle();
	});
	$('.header__btn-menu').on('click', function(){
		$('.header-box').toggleClass('active');
	});

	var mixer = mixitup('.products__inner');
});
