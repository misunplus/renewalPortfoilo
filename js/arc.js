
// document.addEventListener('DOMContentLoaded', function(){
//   const canvas = document.querySelector('.skill__value');
//   const context = canvas.getContext('2d');
//   let 퍼센트값 =canvas.dataset.arc;
 
//   let 각도값 =0;

//   function 라디안(각도){
//     return 각도 * Math.PI/180;
//   }

//   function draw(){
//     // context.clearRect(0, 0, canvas.width, canvas.height);
//     context.strokeStyle = '#94715c';
//     context.lineWidth = 20;
//     context.lineCap = "round";
//     context.beginPath();
//     context.arc( 200, 200, 50, 0, 라디안(각도값),false);
//     context.stroke();
    
//     requestAnimationFrame(draw);
//     if(각도값<퍼센트값){
//       각도값+=10;
//       return;
//     }
//   }

//   draw();
  
// });
//   //inview 이벤트는 화면이 요소가 출현했을 때 작동
// 	$("#skills").on("inview", function(evt, visible){
// 		if(visible==true){
// 			console.log("inview 이벤트 작동완료");
// /*			
// 			$("#skills .bar").each(function(){
// 				$(this).css({
// 				//	"width" : $(this).children("span").text()
				
// 					"width" : $(this).parent().attr("data-bar")+"%"
// 				});
// 			});
// */		

// 			for(var i=0;i<=5;i++){
// 				var $that = $("#skills .bar").eq(i);
// 				$that.css({
// 					"width" : $that.parent().attr("data-bar")+"%"
// 				});
// 			}
// 		}
// 	});
	
	
// 	$(window).on("scroll", function(){
// 		if($(this).scrollTop() < $("#skills").offset().top-$(this).height()){
			
// 			$("#skills .bar").width(0);
// 		}
// 	});

	
// 	$(".circle").on("inview", function(evt, visible){
		
// 		if(visible==true){
			
// 			$('.chart').easyPieChart({
// 				//your configuration goes here
// 				easing: 'easeInOutCubic',
// 				delay: 3000,
// 				barColor:'#68c3a3',
// 				trackColor:'rgba(255,255,255,0.2)',
// 				scaleColor: false,
// 				lineWidth: 8,
// 				size: 140,
// 				animate: 2000,
// 				onStep: function(from, to, percent) {
// 					this.el.children[0].innerHTML = Math.round(percent);
// 				}

// 			});
			
			
// 		}
		
// 	});
	