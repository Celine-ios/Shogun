$(document).ready(function(){
 
	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.10);
		
		$('body').css({
			'background-position': '0 -' + posicion + 'px',
			'background': '-moz-linear-gradient(left, rgba(61,13,255,1) 0%, rgba(255,76,76,1) 100%)'
		});
 
	});
 
});