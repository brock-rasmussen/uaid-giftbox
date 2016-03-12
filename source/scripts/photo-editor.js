var canvas = new fabric.Canvas('photo-editor', { backgroundColor: 'white', controlsAboveOverlay: true });

function customizerFinished (el) {
	if (el.checked) {
		if (canvas.item(0)) {
			canvas.item(0).selectable = false;
		}
		canvas.interactive = false;
		document.getElementById('photo-raw').disabled = true;
	} else {
		if (canvas.item(0)) {
			canvas.item(0).selectable = true;
		}
		canvas.interactive = true;
		document.getElementById('photo-raw').disabled = false;
    }
}

document.getElementById('photo-raw').addEventListener('change', function(e) {
	'use strict';
	canvas.clear();
	var reader = new FileReader();
	reader.onload = function(event) {
		var img = new Image();
		img.crossOrigin = 'anonymous';
		img.src = event.target.result;
		img.onload = function() {
		var image = new fabric.Image(img, {crossOrigin: 'anonymous'});
		canvas.add(image);
		};
	};
	if (e.target.files[0]) {
		reader.readAsDataURL(e.target.files[0]);
	}
});

document.getElementById('agreement').addEventListener('change', function() {
	'use strict';
	document.getElementById('photo').value = canvas.toDataURL({ format: 'jpg' });
	customizerFinished(this);
});

customizerFinished(document.getElementById('agreement'));