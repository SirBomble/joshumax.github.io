$(document).ready(function() {
		$('a[href*=#]').bind('click', function(e) {
				e.preventDefault(); // prevent hard jump, the default behavior

				var target = $(this).attr("href"); // Set the target as variable

				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 600, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});

				return false;
		});
});

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();
		var documentHeight = $(document).height();
		var windowHeight = $(window).height();

		var scrollPercent = (scrollDistance / (documentHeight - windowHeight)) * 100;
		var roundScroll = Math.round(scrollPercent);

		$(".scroll").css("width", (scrollPercent + '%'));

		// Show/hide menu on scroll
		if (scrollDistance >= 850) {
				$('nav').fadeIn("fast");
		} else {
				$('nav').fadeOut("fast");
		}

		// Assign active class to nav links while scolling
		$('.page-section').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.navigation a.active').removeClass('active');
						$('.navigation a').eq(i).addClass('active');
				}
		});
}).scroll();

$(".show-me").on("click", function() {
		$(".box").toggleClass("flip");
});
