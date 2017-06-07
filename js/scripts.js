window.onload = function() {
	console.log('The page is fully loaded.');
	console.log(document);
	console.log(location);

	var list = document.getElementById('list'),
		add = document.getElementById('addElem'),
		count = document.getElementsByTagName('li');

	add.addEventListener('click', function(e) {
		var element = document.createElement('li');
		element.innerHTML = 'Item ' + count.length;
		list.appendChild(element);
	});
};