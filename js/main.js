$(document).ready(function() {
	
	var flag=false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 40){
			$("#transparent").css({"background-color": "#2A3541", "height": "90", "margin":"0"});
			$(".navbar-collapse").css({"background-color":"#2A3541"});
		}else{
			$("#transparent").css({"background-color": "transparent", "height":"50"});
			$(".navbar-collapse").css({"background-color":"transparent"});
		}


	});
	$(".windows").css({"height": $(window).height() + "px"});

	$('#transparent .navbar-nav li>a').click(function(){
	var link = $(this).attr('href');
	var posi = $(link).offset().top;
	$('body,html').animate({scrollTop:posi},700);
});

});