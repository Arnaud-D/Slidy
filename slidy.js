var Library = {
	//Create a slider system in .book for every .page
	pageSlider : function(){
		var pages_number = $('.page-slider').length;
		var i = 0;
		var top = 0;
		for(i = 0; i < pages_number; i++){
			if(!i == 0){
				top += 100;
				$('.page-slider:eq('+ i +')').css('top', top + '%');
			}
		}
	},

	//Create a slow scrolling about body
	slowScrolling : function(timing){
		//Default value
		if(typeof(timing) == 'undefined'){
			timing = 'slow';
		}

		$('a[href^="#"]').click(function(){
			var the_id = $(this).attr("href");

			$('html, body').animate({
				scrollTop:$(the_id).offset().top
			}, timing);
			return false;
		});
	}
}