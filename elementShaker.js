var TIME_BETWEEN_FRAMES = 33;

var shakeObjects = [];
var rotateObjects = [];
var shakeAndRotateObjects = [];

$(document).ready(function() {
	createShakeObjects($('.shakeElement'));
	createRotateObjects($('.rotateElement'));
	createShakeAndRotateObjects($('.shakeAndRotateElement'));
	setInterval(tickObjects, TIME_BETWEEN_FRAMES);
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
		moveDirections: [Math.random() >= 0.5 ? true : false,
				Math.random() >= 0.5 ? true : false],
		moveMax: $(element).height(),
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
			object.moveVector[0] -= 2;
		} else {
			object.moveVector[0] += 2;
		}

		if (object.moveDirections[1]) {
			object.moveVector[1] -= 2;
		} else {
			object.moveVector[1] += 2;
		}

		var transform = "translateX(" + object.moveVector[0] + "px) " + 
				"translateY(" + object.moveVector[1] + "px)";

		object.element.style.transform = transform;

		var distanceToMax = [1 - object.moveVector[0] / object.moveMax,
				1 - object.moveVector[1] / object.moveMax];

		if (object.moveVector[0] < -1 * object.moveMax ||
				object.moveVector[1] > object.moveMax) {
			object.moveDirections[0] = !object.moveDirections[0];
		}
		if (object.moveVector[1] < -1 * object.moveMax ||
				object.moveVector[1] > object.moveMax) {
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
