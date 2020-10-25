$(function () {
	const canvasHTML = document.querySelector('.skill__value_HTML');
	const canvasCSS = document.querySelector('.skill__value_CSS');
	const canvasJs = document.querySelector('.skill__value_Javascript');
	const canvasJq = document.querySelector('.skill__value_jQuery');
	const canvasPs = document.querySelector('.skill__value_Passion');
	const 퍼센트값HTML =canvasHTML.dataset.arc;
	const 퍼센트값CSS  =canvasCSS.dataset.arc;
	const 퍼센트값Js =canvasJs.dataset.arc;
	const 퍼센트값Jq =canvasJq.dataset.arc;
	const 퍼센트값Ps =canvasPs.dataset.arc;
	const context = canvasHTML.getContext('2d');
	const contextCss = canvasCSS.getContext('2d');
	const contextJs = canvasJs.getContext('2d');
	const contextJq = canvasJq.getContext('2d');
	const contextPs = canvasPs.getContext('2d');
	let 각도값=0;
	let 각도값css=0;
	let 각도값Js=0;
	let 각도값Jq=0;
	let 각도값Ps=0;
	let count = true;
  function 라디안(각도){
    return 각도 * Math.PI/180;
	}
	
	function draw(){      
		if(count){
		console.log("")
		context.clearRect(0, 0, canvasHTML.width, canvasHTML.height);
		let brush = context.createLinearGradient(0, 0, canvasHTML.width, canvasHTML.height);
		brush.addColorStop(0.3,  "rgba(000,000,000, 0.8)");
		brush.addColorStop(0.5, "#94715c");
		context.strokeStyle = brush;
		context.lineWidth = 50;
		context.lineCap = "round";
		context.beginPath();
		context.arc( 250, 250, 150, 0, 라디안(각도값),false);
		context.stroke();


		contextCss.clearRect(0, 0, canvasCSS.width, canvasCSS.height);
	
		contextCss.strokeStyle = brush;
		contextCss.lineWidth = 50;
		contextCss.lineCap = "round";
		contextCss.beginPath();
		contextCss.arc( 250, 250, 150, 0, 라디안(각도값css),false);
		contextCss.stroke();
		
		contextJs.clearRect(0, 0, canvasJs.width, canvasJs.height);
		contextJs.strokeStyle = brush;
		contextJs.lineWidth = 50;
		contextJs.lineCap = "round";
		contextJs.beginPath();
		contextJs.arc( 250, 250, 150, 0, 라디안(각도값Js),false);
		contextJs.stroke();
		
		contextJq.clearRect(0, 0, canvasJq.width, canvasJq.height);
		contextJq.strokeStyle = brush;
		contextJq.lineWidth = 50;
		contextJq.lineCap = "round";
		contextJq.beginPath();
		contextJq.arc( 250, 250, 150, 0, 라디안(각도값Jq),false);
		contextJq.stroke();

		contextPs.clearRect(0, 0, canvasPs.width, canvasPs.height);
		// brush.addColorStop(1, "#fff");
		contextPs.strokeStyle = brush;
		contextPs.lineWidth = 50;
		contextPs.lineCap = "round";
		contextPs.beginPath();
		contextPs.arc( 250, 250, 150, 0, 라디안(	각도값Ps),false);
		contextPs.stroke();

		//  requestAnimationFrame(draw);
		if(각도값<퍼센트값HTML){
			각도값+=10;
			return;
		}
		if(각도값css<퍼센트값CSS){
			각도값css+=10;
			return;
		}
		if(각도값Js<퍼센트값Js){
			각도값Js+=10;
			return;
		}
		if(각도값Jq<퍼센트값Jq){
			각도값Jq+=10;
			return;
		}
		if(각도값Ps<퍼센트값Ps){
			각도값Ps+=10;
			return;
		}
		count=false;
		}
		
		if(count){
			return;
		}
	}

	//스크롤 이벤트	 
	const $menuBtn = document.querySelectorAll('#wrap > #navbar > .gnb > li');
	const $sectionArticle = document.querySelectorAll('#wrap > section > article');
	const $home = document.querySelector('#wrap #home');
	let visibleItem;

	window.addEventListener('scroll', () =>{
	// 	let aticleValue;
	// 	let boundingRect;
	// 
		let homebounding;
	// 	for(let i=0; i<$sectionArticle.length; i++){
	// 		aticleValue =  $sectionArticle[i];
	// 		boundingRect= aticleValue.getBoundingClientRect();
			homebounding = $home.getBoundingClientRect();
		
			
	// 		if(boundingRect.top > window.innerHeight * 0.1 && boundingRect.top < window.innerHeight * 0.9){
	// 			console.log("바운딩 탑",boundingRect )
	// 			console.log("인어 하이트 탑", window.innerHeight )
	// 			nowIdx = aticleValue.dataset.index;
	// 			nowIdx = parseInt(nowIdx);
				
	// 			if(visibleItem){
	// 				visibleItem.classList.remove('visible');
	// 				visibleMenu.classList.remove('on');
				
	// 			}
	// 			visibleItem  =$sectionArticle[nowIdx];
	// 			visibleItem.classList.add('visible');

	// 			visibleMenu = $menuBtn[nowIdx+1]
	// 			visibleMenu.classList.add('on');
	// 			if(nowIdx === 1){
	// 				requestAnimationFrame(draw);
	// 				setInterval(draw, 200);
	// 			}

	

	// 		}

			if(homebounding.top === 0){
				// visibleMenu.classList.remove('on');
						$menuBtn.forEach(li => {
				li.classList.remove('on')
			});
			}
	// 	}
	});

// IntersectionObserver 를 등록한다.
let nowIdx;
const io = new IntersectionObserver(entries => {
	console.log("io",io)
	entries.forEach(entry => {
		// 관찰 대상이 viewport 안에 들어온 경우 'tada' 클래스를 추가
    if (entry.intersectionRatio > 0) {
			nowIdx = entry.target.dataset.index ;
			nowIdx = parseInt(nowIdx)+1;
			$menuBtn.forEach(li => {
				li.classList.remove('on')
			});
			$menuBtn[nowIdx].classList.add('on')
      entry.target.classList.add('visible');
    }
    else {
			entry.target.classList.remove('visible');
    }
  })
})



// 관찰할 대상을 선언하고, 해당 속성을 관찰시킨다.
const $articlelist = document.querySelectorAll('article');
$articlelist.forEach((el) => {
	io.observe(el);
})





 const navberMenu =document.querySelector('.gnb');
	navberMenu.addEventListener('click', (event) => {
		event.preventDefault();
		const targetLink = event.target.parentNode.dataset.link;
		if (targetLink == null) {
			return;
		} else {
			navberMenu.classList.add('close');
			scrollIntoview(targetLink);
		}
	});

	function scrollIntoview(selecter) {
		const scrollTo = document.querySelector(selecter);
		scrollTo.scrollIntoView({ behavior: 'smooth' });

	}


	const $projects = $('#wrap > section > #project > .project-cover > .projects-cover > .projects');
	const $projectBtn = $('#wrap > section > #project > .project-cover > .project-tap-cover > button');
	let	projectBtnTarget = '';
	// 프로젝트 탭메뉴 
	$projectBtn.on('click', function(){
		$(this).addClass('on').siblings().removeClass('on');
		projectBtnTarget = $(this).data();
		$projects.removeClass('show');
		for(let i=0 ; i<$projects.length; i++){
			if(projectBtnTarget.filter ===  $projects.eq(i).data().type|| projectBtnTarget.filter === "*"){
				$projects.eq(i).addClass('show');
			}
		}
	})

	const sart = function () {
		////////////////////////////////////////////////////* 디바이스 확인 */
		let userDevice = 'pc';
		if ($(window).width() < 992) {
			userDevice = 'mobile';
		}
		////////////////////////////////////////////////////*  모바일일때 */
		if (userDevice === 'mobile') {
			console.log('모바일');
			$('#wrap').addClass('mobile').removeClass('pc');


			////////////////////////////////////////////////////*  피씨일일때 */
		} else {
			console.log('피씨');
			$('#wrap').addClass('pc').removeClass('mobile');
		}
	};

	$(document).ready(function () {
		sart();
		let delta = 400;
		let timer = null;
		$(window).on('resize', function () {
			clearTimeout(timer);
			timer = setTimeout(resizeDone, delta);
		});
		function resizeDone() {
			sart();
		}
	});

});
