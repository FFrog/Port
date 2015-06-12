$( document ).ready(function() {
function heightDetect() {
	$("#man").css("height", $(window).height());
	$("#man").css("width", $(window).height());
	
	if($(window).width() < 900){
		$("#man").css("height", $(window).width()-150);
		$("#man").css("width", $(window).width()-150);

	}
};
heightDetect();
$(window).resize(function() {
	heightDetect();
});
});

