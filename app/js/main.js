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
	
	var mixer = mixitup('.products__inner');
});
