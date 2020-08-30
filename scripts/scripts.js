jQuery(function () {

	$('.burger').click(function(){
		$(this).toggleClass('_active');
		$('.menu').toggleClass('_active');
	});


	if($('html').width()>1200){
slider_4 = $('#slider_4').bxSlider({
		slideMargin: 30,
		infiniteLoop: false,
		adaptiveHeight: true,
		controls: true,
		minSlides: 1,
		maxSlides: 3,
		nextSelector: $('#slider_4_next'),
		prevText: '',
		nextText: '',
		prevSelector: $('#slider_4_prev'),
		moveSlides: 1,
		swipeThreshold: 50,
		slideWidth: 330,
		responsive: true,
	});
	}
	if($('html').width()<1200){
		 $('#slider_4').bxSlider({
			slideMargin: 30,
			infiniteLoop: false,
			adaptiveHeight: true,
			controls: true,
			minSlides: 1,
			maxSlides: 1,
			nextSelector: $('#slider_4_next'),
			prevText: '',
			nextText: '',
			prevSelector: $('#slider_4_prev'),
			moveSlides: 1,
			swipeThreshold: 50,
			slideWidth: 258,
			responsive: true,
		});
	}

	
	if($('html').width()>1200){
		$('#h_1').css({
			'margin-top':$('#i_1').innerHeight() - 80
		});
		$('#h_2').css({
			'margin-top':$('#i_2').innerHeight() - 80
		});
		$('#l_h_1').height( $('#r_p_1').innerHeight() - $('#h_p_1').innerHeight());
		$('#l_h_2').height( $('#r_p_2').innerHeight() - $('#h_p_2').innerHeight());

	} else {

	}
	
	$('#slider_1').bxSlider({
		slideMargin: 0,
		infiniteLoop: false,
		adaptiveHeight: true,
		controls: true,
		minSlides: 1,
		maxSlides: 1,
		nextSelector: $('#next_slider_1'),
		prevText: '',
		nextText: '',
		prevSelector: $('#prev_slider_1'),
		moveSlides: 1,
		swipeThreshold: 50,
		responsive: true,
	});
	$('#slider_2').bxSlider({
		slideMargin: 0,
		infiniteLoop: false,
		adaptiveHeight: true,
		controls: true,
		minSlides: 1,
		maxSlides: 1,
		nextSelector: $('#next_slider_2'),
		prevText: '',
		nextText: '',
		prevSelector: $('#prev_slider_2'),
		moveSlides: 1,
		swipeThreshold: 50,
		responsive: true,
	});

	$('#down').click(function(){
		 $('html, body').animate({
		        scrollTop: $("#to_scroll").offset().top
		    }, 1000);
	});
	
});


