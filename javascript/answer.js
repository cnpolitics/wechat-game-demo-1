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
