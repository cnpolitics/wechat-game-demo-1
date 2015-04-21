var myCast = [-1, -1, -1, -1, -1];
//var myCast = [0, 0, 0, 0, 0];

function initOption(optID, optNo) {
	$(optID + ' .opt').on('touchstart', function(){
		$(this).addClass('pressing');
	});
	
	$(optID + ' .opt').on('click touchend', function(){
		$(optID + ' .opt.active').removeClass('active');
		$(this).removeClass('pressing').addClass('active');
		myCast[optNo] = $(this).index(optID + ' .opt');
//		console.log(myCast);
	});
}
