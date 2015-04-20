$(document).ready(function() {
	$('.main-wrap').fullpage({
		scrollOverflow: true,
		sectionSelector: '.js-page'
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
