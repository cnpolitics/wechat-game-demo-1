$(document).ready(function() {
	$('.main-wrap').fullpage({
		scrollOverflow: true,
		sectionSelector: '.js-page'
	});
});

var myCast = [-1, -1, -1, -1, -1];

function touchOption(optID, optNo) {
	$(optID + ' .opt').on('touchstart', function(){
		$(this).addClass('pressing');
	});
	
	$(optID + ' .opt').on('click touchend', function(){
		$(optID + ' .opt.active').removeClass('active');
		$(this).removeClass('pressing').addClass('active');
		myCast[optNo] = $(this).index();
		console.log(myCast);
	});
}

$(window).load(function() {
	touchOption('#q1', 0);
	touchOption('#q2', 1);
	touchOption('#q3', 2);
	touchOption('#q4', 3);
	touchOption('#q5', 4);
});