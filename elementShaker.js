var TIME_BETWEEN_FRAMES = 33;

var shakeObjects = [];
var rotateObjects = [];
var shakeAndRotateObjects = [];

$(document).ready(function() {
	shakeObjects = createShakeObjects($('.shakeElement'));
	rotateObjects = createRotateObjects($('.rotateElement'));
	shakeAndRotateObjects = createShakeAndRotateObjects(
			$('.shakeAndRotateElement'));
	setInterval(tickElements, TIME_BETWEEN_FRAMES);
});

function createShakeObjects(elements) {
	for (var ii = 0; ii < elements.length; ii++) {
		shakeObjects.push(objectFactory(elements[ii]));
	}
}

function createRotateObjects(elements) {
	for (var ii = 0; ii < elements.length; ii++) {
		rotateObjects.push(objectFactory(elements[ii]));
	}
}

function createShakeAndRotateObjects(elements) {
	for (var ii = 0; ii < elements.length; ii++) {
		shakeAndRotateObjects.push(objectFactory(elements[ii]));
	}
}

function objectFactory(element) {
	var object = {
		width: $(element).width(),
		height: $(element).height(),
		moveDirections: [Math.random() >= 0.5 ? true : false,
				Math.random() >= 0.5 ? true : false],
		moveMax: [$(element).width() / 2, $(element).height() / 2],
		moveVector: [0, 0],
		rotation: 0,
		element: element
	};

	return object;
}

function tickObjects() {
	tickShakers(shakeObjects);
	tickRotators(rotateObjects);
	tickShakeAndRotators(shakeAndRotateObjects);
}

function tickShakers(objects) {
	for (var ii = 0; ii < objects.length; ii++) {
		var object = objects[ii];
		if (object.moveDirections[0]) {
			object.moveVector[0]--;
		} else {
			object.moveVector[0]++;
		}

		if (object.moveDirections[1]) {
			object.moveVector[1]--;
		} else {
			object.moveVector[1]++;
		}

		var transform = "translate(" + object.moveVector[0] + "px, " + 
				object.moveVector[1] + "px)";

		object.element.transform = transform;

		if (object.moveVector[0] <= object.moveMax[0] * -1 ||
				object.moveVector[1] >= object.moveMax[0]) {
			object.moveDirections[0] = !object.moveDirections[0];
		}
		if (object.moveVector[1] <= object.moveMax[1] * -1 ||
				object.moveVector[1] >= object.moveMax[0]) {
			object.moveDirections[1] = !object.moveDirections[1];
		}
	}
}

function tickRotators (objects) {
	for (var ii = 0; ii < objects.length; ii++) {

	}
}

function tickShakeAndRotators(objects) {
	for (var ii = 0; ii < objects.length; ii++) {

	}
}
