$(function(){
	$(window).bind("scroll", function () {

		var top = $(document).scrollTop();//距离顶部高度

		if (top >= 130) {

			$(".music_box").addClass('aNow');

		} else {

			$(".music_box").removeClass('aNow');

		}

	});



//





//$(window).scroll(function(){

//	if($(window).scrollTop()>38){

//		$('.indexNav01').show();

//	});

//});

	//

	

})
