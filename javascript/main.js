$(document).ready(function() {
	$('.main-wrap').fullpage({
		scrollOverflow: true,
		sectionSelector: '.js-page',		
		onLeave: function(index, nextIndex, direction){
			console.log(index);
			
			// Handle the `#omission` reminding message.
			switch (nextIndex) {
				case 3:
					if (myCast[0] === -1) {
						$('#omission').addClass('active');
					} else {
						$('#omission').removeClass('active');
					}
					break;
				
				case 4:
					if (myCast[0] === -1 || myCast[1] === -1) {
						$('#omission').addClass('active');
					} else {
						$('#omission').removeClass('active');
					}
					break;
					
				case 5:
					if (myCast[0] === -1 || myCast[1] === -1 || myCast[2] === -1) {
						$('#omission').addClass('active');
					} else {
						$('#omission').removeClass('active');
					}
					break;
					
				case 6:
					if (myCast[0] === -1 || myCast[1] === -1 || myCast[2] === -1 || myCast[3] === -1) {
						$('#omission').addClass('active');
					} else {
						$('#omission').removeClass('active');
					}
					break;
				
				// Result page.
				case 7:
					if (myCast[0] === -1 || myCast[1] === -1 || myCast[2] === -1 || myCast[3] === -1 || myCast[4] === -1) {
						$('#omission').addClass('active');
					} else {
						$('#omission').removeClass('active');
					}
					
					// Fill the result info.
					$('#result .director').removeClass().addClass('director dir-' + myDir);
					break;
				
				default:
					$('#omission').removeClass('active');
			}
		}
	});
});

$(window).load(function() {
	// Initialize the options for all questions.
	initOption('#q1', 0);
	initOption('#q2', 1);
	initOption('#q3', 2);
	initOption('#q4', 3);
	initOption('#q5', 4);
	
	$('.page-nav').click(function(){
		$.fn.fullpage.moveSectionDown();
	});
	
	// Interactions and actions of the `.btn-share`
	$('.btn-share').on('touchstart', function(){
		$(this).addClass('pressing');
	});
	$('.btn-share').on('touchend', function(){
		$(this).removeClass('pressing');

		$('#share-guide').fadeIn(250);
		$('#share-guide').on('touchend', function(){
			$(this).fadeOut(250);
		});
	});
	
	// Interactions of the `.hosts` 
	$('.host').on('touchstart', function(){
		$(this).addClass('pressing');
	});
	$('.host').on('click touchend', function(){
		$(this).removeClass('pressing');
	});
});
