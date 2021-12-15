	var p = document.getElementsByTagName('p');
	// p
	//alert(p[0].innerHTML);
	//p[0].innerHTML = 'Manipulado via javascript'
	// for(var i = 0; i < p.length; i++) {
	// 	p[i].innerHTML = 'Manipulado via javascript - ' + i;
	// }

	for(var i = 0; i < p.length; i++) {
		p[0].innerHTML = p[0].innerHTML + '- algo - ';
	}
