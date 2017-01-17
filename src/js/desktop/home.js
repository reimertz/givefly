/**
 * @depend /third-party/jquery.js
 * @depend /third-party/bootstrap/transition.js
 * @depend /third-party/bootstrap/collapse.js
 * @depend /third-party/bootstrap/dropdown.js
 * @depend /third-party/bootstrap/button.js
 * @depend /third-party/bootstrap/tab.js
 * @depend /third-party/bootstrap/modal.js
 * @depend /third-party/underscore.js
 */

$(function(){

	//Slider
	var previousTab = null;
	
	$('div[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		if(previousTab){
			$(previousTab).removeClass("active");
		}
		previousTab = e.target;
		$(e.target).addClass("active");
	});

	//Masthead


	var masthead = $('.navbar'),
			mastheadHeight = masthead.height,
			lastScroll = $(window).scrollTop(),
			isVisible = true;


	function checkMastHeadScroll() {
		var scrollTop = $(window).scrollTop();

		if((scrollTop - 25) > lastScroll && isVisible) {
			$(masthead).animate({marginTop: '-60px', queue:false}, 200);
			isVisible = false;
		} else if ((scrollTop + 50)  < lastScroll || (scrollTop < 5) && !isVisible){
			$(masthead).animate({marginTop: 0, queue:false}, 200);
			isVisible = true;
			
		}
	
		lastScroll = scrollTop;
		
	}

	$(window).scroll(_.throttle(checkMastHeadScroll, 100));




});