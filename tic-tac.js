let block = true;
let count = 0;
document.getElementById('player').innerHTML = 'Current Player \u2661';
function box(event, boxNum) {
	let boxn = document.getElementById(boxNum);

	val = boxn.innerText;
	if (!val) {
		count++;
		if (block) {
			document.getElementById(boxNum).innerHTML = "<span class='value' style='color:blue;'>\u2661</span> ";
			block = false;
			checking(boxNum);
			document.getElementById('player').innerHTML = 'Current Player O';
		} else {
			document.getElementById(boxNum).innerHTML = "<span class='value' style='color:yellow'>O</span>";
			block = true;
			checking(boxNum);
			document.getElementById('player').innerHTML = 'Current Player \u2661';
		}
	}
}

function checking(boxNum) {
	let one = document.getElementById('one').innerText;
	let two = document.getElementById('two').innerText;
	let three = document.getElementById('three').innerText;
	let four = document.getElementById('four').innerText;
	let five = document.getElementById('five').innerText;
	let six = document.getElementById('six').innerText;
	let seven = document.getElementById('seven').innerText;
	let eight = document.getElementById('eight').innerText;
	let nine = document.getElementById('nine').innerText;

	if ((one == '\u2661' || one == 'O') && (one == two && two == three)) {
		result(one);
	} else if ((one == '\u2661' || one == 'O') && (one == four && four == seven)) {
		result(one);
	} else if ((nine == '\u2661' || nine == 'O') && (nine == eight && eight == seven)) {
		result(nine);
	} else if ((nine == '\u2661' || nine == 'O') && (nine == six && six == three)) {
		result(nine);
	} else if ((four == '\u2661' || four == 'O') && (four == five && five == six)) {
		result(four);
	} else if ((eight == '\u2661' || two == 'O') && (two == five && five == eight)) {
		result(eight);
	} else if ((one == '\u2661' || one == 'O') && (one == five && five == nine)) {
		result(one);
	} else if ((seven == '\u2661' || seven == 'O') && (seven == five && five == three)) {
		result(seven);
	} else {
		if (count == 9) {
			setTimeout(() => {
				alert('Match Draw');
				reset();
			}, 100);
		}
	}
}

function result(val) {
	setTimeout(() => {
		alert(val + ' win');
		reset();
	}, 100);
}

function reset() {
	document.getElementById('one').innerText = '';
	document.getElementById('two').innerText = '';
	document.getElementById('three').innerText = '';
	document.getElementById('four').innerText = '';
	document.getElementById('five').innerText = '';
	document.getElementById('six').innerText = '';
	document.getElementById('seven').innerText = '';
	document.getElementById('eight').innerText = '';
	document.getElementById('nine').innerText = '';
	count = 0;
}


