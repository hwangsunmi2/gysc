$(function(){



	//resize: 브라우저 창 너비의 변경된 값을 width 변수에 저장
	$(window).resize(function () {
		var width = $(window).width();
		if (width<=720) {
			$(".table-wrap").mouseover(function(){
				$(this).addClass("scroll");
			});
			$(".table-wrap").scroll(function(){
				$(this).addClass("scroll");
			});
			// $(".table__inner").mouseout(function(){
			// 	$(this).removeClass("scroll");
			// });
		} 
		
	});

	$(window).trigger("resize"); //강제로 호출하는 함수


});