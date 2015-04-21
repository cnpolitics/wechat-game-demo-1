/*// by Yuyu Wang
function answer(arr){
	var k = 0,d = 0,w = 0,t = 0;
	var param = [["k","w","t","d"],["t","w","k","d"],["w","k","t","d"],["d","t","w","d"],["d","k","t","w"]]
	for (i=0; i<5; i++) {
		type = param[i][arr[i]];
		add(type);
	};
	a = [k,d,w,t];
	b = ["k","d","w","t"];
	max = a.indexOf(Math.max.apply(Math, a));
	console.log('answer');
	return max;
}

function add(type){
	if (type == "k"){
		k = k + 1;
	}
	else if (type == "d"){
		d = d + 1;
	}
	else if (type == "w"){
		w = w + 1;
	}
	else if (type == "t"){
		t = t + 1;
	}
}
*/

var k = 0,d = 0,w = 0,t = 0;

function add(type){
	if (type === "k"){
		k = k + 1;
	}
	else if (type === "d"){
		d = d + 1;
	}
	else if (type === "w"){
		w = w + 1;
	}
	else if (type === "t"){
		t = t + 1;
	}
}

function answer(arr){
	var param = [["k","w","t","d"],["t","w","k","d"],["w","k","t","d"],["d","t","w","d"],["d","k","t","w"]];
	var a = [k,d,w,t];
	var type;
	
	for (var i=0; i<5; i++) {
		type = param[i][arr[i]];
		add(type);
	}
//	console.log('answer');
	return a.indexOf(Math.max.apply(Math, a));
}


var myCast = [-1, -1, -1, -1, -1];
//var myCast = [0, 0, 0, 0, 0];

function initOption(optID, optNo) {
	$(optID + ' .opt').on('touchstart', function(){
		$(this).addClass('pressing');
	});
	
	$(optID + ' .opt').on('click touchend', function(){
		$(optID + ' .opt.active').removeClass('active');
		$(this).removeClass('pressing').addClass('active');
		myCast[optNo] = $(this).index();
	});
}


var myDir = -1;

$(document).ready(function() {
	var hashURL = window.location.hash;
//	console.log(hashURL);
	switch (hashURL) {
		case '#wenyi':
			$('#cover .director').addClass('dir-0');
			break;
			
		case '#kehuan':
			$('#cover .director').addClass('dir-1');
			break;
		
		case '#tuhao':
			$('#cover .director').addClass('dir-2');
			break;
		
		case '#dashi':
			$('#cover .director').addClass('dir-3');
			break;
		
		default: 
			$('#cover .director').addClass('default');
	}
});

$(document).ready(function() {
	$('.main-wrap').fullpage({
		scrollOverflow: true,
		sectionSelector: '.js-page',	
		onLeave: function(index, nextIndex, direction){
//			console.log(index);
			
			// Handle the `#omission` reminding message.
			switch (nextIndex) {
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
//						console.log(myDir);						
						
						// Manipulate hash URL
						switch (myDir) {
							case 0:
								window.location.hash = 'wenyi';
								document.title = '我是xxxxx这样的文艺型导演，你也来测测吧';
								break;
							case 1:
								window.location.hash = 'kehuan';
								document.title = '我是xxxxx这样的科幻型导演，你也来测测吧';
								break;
							case 2:
								window.location.hash = 'tuhao';
								document.title = '我是xxxxx这样的土豪型导演，你也来测测吧';
								break;
							case 3:
								window.location.hash = 'dashi';
								document.title = '我是xxxxx这样的大师型导演，你也来测测吧';
								break;
							default: 
								window.location.hash = '';
//								window.location.href.split('#')[0];
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
});

$(window).load(function() {
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
	});
});


