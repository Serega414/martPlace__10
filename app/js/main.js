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

	var mixer = mixitup('.products__inner');
});
