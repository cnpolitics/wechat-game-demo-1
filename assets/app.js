function add(s){"k"===s?k+=1:"d"===s?d+=1:"w"===s?w+=1:"t"===s&&(t+=1)}function answer(s){for(var a=[["k","w","t","d"],["t","w","k","d"],["w","k","t","d"],["d","t","w","d"],["d","k","t","w"]],e=[k,d,w,t],i,o=0;5>o;o++)i=a[o][s[o]],add(i);return e.indexOf(Math.max.apply(Math,e))}function initOption(s,a){$(s+" .opt").on("touchstart",function(){$(this).addClass("pressing")}),$(s+" .opt").on("click touchend",function(){$(s+" .opt.active").removeClass("active"),$(this).removeClass("pressing").addClass("active"),myCast[a]=$(this).index()})}var k=0,d=0,w=0,t=0,myCast=[-1,-1,-1,-1,-1],myDir=-1;$(document).ready(function(){var s=window.location.hash;switch(s){case"#wenyi":$("#cover .director").addClass("dir-0");break;case"#kehuan":$("#cover .director").addClass("dir-1");break;case"#tuhao":$("#cover .director").addClass("dir-2");break;case"#dashi":$("#cover .director").addClass("dir-3");break;default:$("#cover .director").addClass("default")}}),$(document).ready(function(){$(".main-wrap").fullpage({scrollOverflow:!0,sectionSelector:".js-page",onLeave:function(s,a,e){switch(a){case 3:-1===myCast[0]?$("#omission-message").addClass("active"):$("#omission-message").removeClass("active");break;case 4:-1===myCast[0]||-1===myCast[1]?$("#omission-message").addClass("active"):$("#omission-message").removeClass("active");break;case 5:-1===myCast[0]||-1===myCast[1]||-1===myCast[2]?$("#omission-message").addClass("active"):$("#omission-message").removeClass("active");break;case 6:-1===myCast[0]||-1===myCast[1]||-1===myCast[2]||-1===myCast[3]?$("#omission-message").addClass("active"):$("#omission-message").removeClass("active");break;case 7:if(-1===myCast[0]||-1===myCast[1]||-1===myCast[2]||-1===myCast[3]||-1===myCast[4])$("#omission-message, #omission-guide").addClass("active"),$(".btn-return").on("touchend",function(){$.fn.fullpage.moveTo(-1===myCast[0]?2:-1===myCast[1]?3:-1===myCast[2]?4:-1===myCast[3]?5:6)});else{switch(myDir=answer(myCast)){case 0:window.location.hash="wenyi",document.title="我是xxxxx这样的文艺型导演，你也来测测吧";break;case 1:window.location.hash="kehuan",document.title="我是xxxxx这样的科幻型导演，你也来测测吧";break;case 2:window.location.hash="tuhao",document.title="我是xxxxx这样的土豪型导演，你也来测测吧";break;case 3:window.location.hash="dashi",document.title="我是xxxxx这样的大师型导演，你也来测测吧";break;default:window.location.hash="",document.title="测测我是什么类型的导演"}$("#result-info").addClass("active"),$("#omission-message, #omission-guide").removeClass("active")}$("#result .director").removeClass().addClass("director dir-"+myDir);break;default:$("#omission-message").removeClass("active")}}})}),$(window).load(function(){initOption("#q1",0),initOption("#q2",1),initOption("#q3",2),initOption("#q4",3),initOption("#q5",4),$(".page-nav, .btn-start").on("click touchedn",function(){$.fn.fullpage.moveSectionDown()}),$(".btn-hex").on("touchstart",function(){$(this).addClass("pressing")}),$(".btn-hex").on("touchend",function(){$(this).removeClass("pressing")}),$(".host").on("touchstart",function(){$(this).addClass("pressing")}),$(".host").on("click touchend",function(){$(this).removeClass("pressing")}),$(".btn-share").on("touchend",function(){$("#share-guide").fadeIn(250),$("#share-guide").on("touchend",function(){$(this).fadeOut(250)})})});