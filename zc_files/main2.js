$(document).ready(function () {
	$("li.donation-level-list").click(function(){
		$("li.donation-level-list").removeClass("active");
		$(this).addClass("active");
	})
	$("#main-menu").click(function(){
		$(".mobile-menu").toggle(400);
		
	});
});



