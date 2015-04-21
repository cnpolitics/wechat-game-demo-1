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
	console.log('answer');
	return a.indexOf(Math.max.apply(Math, a));
}


var myCast = [-1, -1, -1, -1, -1];
//var myCast = [0, 0, 0, 0, 0];
var myDir = -1;

function initOption(optID, optNo) {
	$(optID + ' .opt').on('touchstart', function(){
		$(this).addClass('pressing');
	});
	
	$(optID + ' .opt').on('click touchend', function(){
		$(optID + ' .opt.active').removeClass('active');
		$(this).removeClass('pressing').addClass('active');
		myCast[optNo] = $(this).index();
		
		myDir = answer(myCast);
		console.log(myDir);
	});
}


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


