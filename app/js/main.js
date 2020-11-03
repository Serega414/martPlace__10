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

	$('.icon-th').on('click', function(){
		$('.product__item').removeClass('list');
		$('.icon-th').addClass('active');
        $('.icon-server').removeClass('active');
	});
	$('.icon-server').on('click', function(){
		$('.product__item').addClass('list');
		$('.icon-server').addClass('active');
        $('.icon-th').removeClass('active');
		
	});
	
	var mixer = mixitup('.products__inner');
});
