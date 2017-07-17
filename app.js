$(window).scroll(function(e){

	wScroll = $(this).scrollTop();

	console.log(wScroll);

	if(wScroll < 2440) {
		var fwd = wScroll / 2
		$('.circle').css({
			'transform': 'translate('+ fwd +'px, '+ wScroll +'px)'
		});
	} else {
		var back = -(wScroll - 2440) + 1220;
		console.log("CHANGE DIRECTIONS");
		$('.circle').css({
			'transform': 'translate('+ back +'px, '+ wScroll +'px)'
		});
	}
});