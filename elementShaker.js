var shakeElements = [];

$(document).ready(function() {
	shakeElements = createShakeElements($('.shakeElement'));
	rotateElements = createRotateElements($('.rotateElement'));
	shakeAndRotateElements = createShakeAndRotateElements(
			$('.shakeAndRotateElement'));
	setInterval(tickElements, 33);
});

function tickShakers() {
	for (var ii = 0; ii < shakeElements.length; ii++) {
		
	}
}
