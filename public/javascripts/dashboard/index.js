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
	
})();