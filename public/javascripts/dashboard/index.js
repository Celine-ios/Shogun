var trigLine = () => {
	document.getElementsByClassName('line')[0].style.width = '100%';
};
(
() => {
	var items = document.getElementsByClassName('item');
	var itemsL = items.length;
	for(var i = 0; i < itemsL; ++i) {
	    items[i].addEventListener('click', (e) => {
	      	trigLine();
	    });
	}
	// set Event for Logout Confirm Box
	document.getElementById('confirm').addEventListener('click', (e) => {
	  ons.notification.confirm({
	  	message: '¿Está seguro de Salir?',
	  	callback: function(answer) {
	  		if (answer == 1) {
	  			location.href = '/logout';
	  		}
	  	}
	  });

	});

})();