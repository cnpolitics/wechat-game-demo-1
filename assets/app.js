function answer(s){for(var a=0,e=0,t=0,i=0,o=[["k","w","t","d"],["t","w","k","d"],["w","k","t","d"],["d","t","w","k"],["d","k","t","w"]],n,c=0;5>c;c++)switch(n=o[c][s[c]]){case"k":a++;break;case"d":e++;break;case"w":t++;break;case"t":i++}var r=[a,e,t,i];return r.indexOf(Math.max.apply(null,r))}function initOption(s,a){$(s+" .opt").on("touchstart",function(){$(this).addClass("pressing")}),$(s+" .opt").on("click touchend",function(){$(s+" .opt.active").removeClass("active"),$(this).removeClass("pressing").addClass("active"),myCast[a]=$(this).index(s+" .opt")})}var myCast=[-1,-1,-1,-1,-1],myDir=-1;$(document).ready(function(){var s=window.location.hash;switch(s){case"#kehuan":$("#cover .director").addClass("dir-0");break;case"#dashi":$("#cover .director").addClass("dir-1");break;case"#wenyi":$("#cover .director").addClass("dir-2");break;case"#tuhao":$("#cover .director").addClass("dir-3");break;default:$("#cover .director").addClass("default"),$(".emblem-threebody").show()}}),$(document).ready(function(){$(".main-wrap").fullpage({scrollOverflow:!0,sectionSelector:".js-page",onLeave:function(s,a,e){switch(a){case 2:"down"===e&&_hmt.push(["_trackEvent","santi","santi_click","santi_test"]);break;case 3:-1===myCast[0]?$("#omission-message").addClass("active"):$("#omission-message").removeClass("active");break;case 4:-1===myCast[0]||-1===myCast[1]?$("#omission-message").addClass("active"):$("#omission-message").removeClass("active");break;case 5:-1===myCast[0]||-1===myCast[1]||-1===myCast[2]?$("#omission-message").addClass("active"):$("#omission-message").removeClass("active");break;case 6:-1===myCast[0]||-1===myCast[1]||-1===myCast[2]||-1===myCast[3]?$("#omission-message").addClass("active"):$("#omission-message").removeClass("active");break;case 7:if(-1===myCast[0]||-1===myCast[1]||-1===myCast[2]||-1===myCast[3]||-1===myCast[4])$("#omission-message, #omission-guide").addClass("active"),$(".btn-return").on("touchend",function(){$.fn.fullpage.moveTo(-1===myCast[0]?2:-1===myCast[1]?3:-1===myCast[2]?4:-1===myCast[3]?5:6)});else{switch(myDir=answer(myCast)){case 0:window.location.hash="kehuan",document.title="我被鉴定为诺兰这样的科幻型导演，你也来测测吧";break;case 1:window.location.hash="dashi",document.title="我被鉴定为乔治卢卡斯伦这样的大师型导演，你也来测测吧";break;case 2:window.location.hash="wenyi",document.title="我被鉴定为李安这样的文艺型导演，你也来测测吧";break;case 3:window.location.hash="tuhao",document.title="我被鉴定为卡梅伦这样的土豪型导演，你也来测测吧";break;default:window.location.hash="",document.title="测测我是什么类型的导演"}$("#result-info").addClass("active"),$("#omission-message, #omission-guide").removeClass("active")}$("#result .director").removeClass().addClass("director dir-"+myDir);break;default:$("#omission-message").removeClass("active")}}})}),$(document).ready(function(){initOption("#q1",0),initOption("#q2",1),initOption("#q3",2),initOption("#q4",3),initOption("#q5",4),$(".page-nav, .btn-start").on("click touchedn",function(){$.fn.fullpage.moveSectionDown()}),$(".btn-hex").on("touchstart",function(){$(this).addClass("pressing")}),$(".btn-hex").on("touchend",function(){$(this).removeClass("pressing")}),$(".host").on("touchstart",function(){$(this).addClass("pressing")}),$(".host").on("click touchend",function(){$(this).removeClass("pressing")}),$(".btn-share").on("touchend",function(){$("#share-guide").fadeIn(250),$("#share-guide").on("touchend",function(){$(this).fadeOut(250)}),_hmt.push(["_trackEvent","santi","santi_click","santi_share"])}),$("#host-threebody").click(function(){_hmt.push(["_trackEvent","santi","santi_click","santi_follow_3b"])}),$("#host-mzread").click(function(){_hmt.push(["_trackEvent","santi","santi_click","santi_follow_mz"])})});