
$(function () {
	$('.logo').animate({ top: 20 }, 1000, 'easeOutBounce');
	$('.footer').animate({ bottom: 0 }, 1000, 'easeOutBounce', function () {
		setTimeout(function () {
			$('.coming-soon').fadeIn(1000);
			setTimeout(function () {
				$('.twitter-timeline-wrapper').animate({ bottom: 150 }, 1000, 'easeOutQuint');
			}, 500);
		}, 300);
	});
})