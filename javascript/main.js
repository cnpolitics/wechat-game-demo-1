var myDir = -1;

// Read cookie.
/*var cMyDir = $.cookie('cMyDir');
var cMyCast = $.cookie('cMyCast');*/

$(document).ready(function() {
	var hashURL = window.location.hash;
//	console.log(hashURL);
	switch (hashURL) {
		case '#kehuan':
			$('#cover .director').addClass('dir-0');
			break;
			
		case '#dashi':
			$('#cover .director').addClass('dir-1');
			break;
		
		case '#wenyi':
			$('#cover .director').addClass('dir-2');
			break;
		
		case '#tuhao':
			$('#cover .director').addClass('dir-3');
			break;
		
		default: 
			$('#cover .director').addClass('default');
			$('.emblem-threebody').show();
	}
});

$(document).ready(function() {
	$('.main-wrap').fullpage({
		scrollOverflow: true,
		sectionSelector: '.js-page',	
		onLeave: function(index, nextIndex, direction){
			
			// Handle the `#omission` reminding message.
			switch (nextIndex) {
				case 2:
					if (direction === 'down') {
						// Baidu Analytics
						_hmt.push(['_trackEvent', 'santi', 'santi_click', 'santi_test']);
					}
					$('#omission-message').removeClass('active');
					break;
				
				case 3:
					if (myCast[0] === -1) {
						$('#omission-message').addClass('active');
					} else {
						$('#omission-message').removeClass('active');
					}
					break;
				
				case 4:
					if (myCast[0] === -1 || myCast[1] === -1) {
						$('#omission-message').addClass('active');
					} else {
						$('#omission-message').removeClass('active');
					}
					break;
					
				case 5:
					if (myCast[0] === -1 || myCast[1] === -1 || myCast[2] === -1) {
						$('#omission-message').addClass('active');
					} else {
						$('#omission-message').removeClass('active');
					}
					break;
					
				case 6:
					if (myCast[0] === -1 || myCast[1] === -1 || myCast[2] === -1 || myCast[3] === -1) {
						$('#omission-message').addClass('active');
					} else {
						$('#omission-message').removeClass('active');
					}
					break;
				
				// Result page.
				case 7:
					if (myCast[0] === -1 || myCast[1] === -1 || 
						myCast[2] === -1 || myCast[3] === -1 || myCast[4] === -1) {
						$('#omission-message, #omission-guide').addClass('active');
						
						// Actions of the `.btn-return`
						$('.btn-return').on('touchend', function(){
							if (myCast[0] === -1) {
								$.fn.fullpage.moveTo(2);
							} else if (myCast[1] === -1) {
								$.fn.fullpage.moveTo(3);
							} else if (myCast[2] === -1) {
								$.fn.fullpage.moveTo(4);
							} else if (myCast[3] === -1) {
								$.fn.fullpage.moveTo(5);
							} else {
								$.fn.fullpage.moveTo(6);
							}
						});
					} else {
						myDir = answer(myCast);
//						console.log('Test result: ' + myDir + ', ' + myCast);
						
						// Set cookie.
						/*$.cookie('cMyCast', myCast, { expires: 1 });
						$.cookie('cMyDir', myDir, { expires: 1 });*/
						
						// Manipulate hash URL
						switch (myDir) {
							case 0:
								window.location.hash = 'kehuan';
								document.title = '我被鉴定为诺兰这样的科幻型导演，你也来测测吧';
								break;
							case 1:
								window.location.hash = 'dashi';
								document.title = '我被鉴定为乔治卢卡斯伦这样的大师型导演，你也来测测吧';
								break;
							case 2:
								window.location.hash = 'wenyi';
								document.title = '我被鉴定为李安这样的文艺型导演，你也来测测吧';
								break;
							case 3:
								window.location.hash = 'tuhao';
								document.title = '我被鉴定为卡梅伦这样的土豪型导演，你也来测测吧';
								break;
							default: 
								window.location.hash = '';
								document.title = '测测我是什么类型的导演';
						}
						
						$('#result-info').addClass('active');
						$('#omission-message, #omission-guide').removeClass('active');
					}
					// Fill the result info.
					$('#result .director').removeClass().addClass('director dir-' + myDir);
					break;
				
				default:
					$('#omission-message').removeClass('active');
			}
		}
	});
	
/*	if (typeof cMyDir != 'undefined' && typeof cMyDir != 'undefined') {
		myDir = cMyDir;
		myCast = cMyCast;
		console.log(myDir);
		console.log(myCast);
		$.fn.fullpage.moveTo(7);
		return;
	}*/
});

$(document).ready(function() {
	// Initialize the options for all questions.
	initOption('#q1', 0);
	initOption('#q2', 1);
	initOption('#q3', 2);
	initOption('#q4', 3);
	initOption('#q5', 4);
	
	$('.page-nav, .btn-start').on('click touchedn', function() {
		$.fn.fullpage.moveSectionDown();
	});
	
	// Interactions of the `.btn-hex`
	$('.btn-hex').on('touchstart', function() {
		$(this).addClass('pressing');
	});
	$('.btn-hex').on('touchend', function() {
		$(this).removeClass('pressing');
	});
	
	// Interactions of the `.hosts` 
	$('.host').on('touchstart', function() {
		$(this).addClass('pressing');
	});
	$('.host').on('click touchend', function() {
		$(this).removeClass('pressing');
	});
	
	// Actions of the `.btn-share`
	$('.btn-share').on('touchend', function() {
		$('#share-guide').fadeIn(250);
		$('#share-guide').on('touchend', function() {
			$(this).fadeOut(250);
		});
		
		// Baidu Analytics
		_hmt.push(['_trackEvent', 'santi', 'santi_click', 'santi_share']);
	});
	
	// Baidu Analytics for `follow` clicks.
	$('#host-threebody').click(function() {
		_hmt.push(['_trackEvent', 'santi', 'santi_click', 'santi_follow_3b']);
	});
	$('#host-mzread').click(function() {
		_hmt.push(['_trackEvent', 'santi', 'santi_click', 'santi_follow_mz']);
	});
});
