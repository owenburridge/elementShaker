var TIME_BETWEEN_FRAMES = 50;

var shakeObjects = [];
var rotateObjects = [];
var shakeAndRotateObjects = [];

var SHAKE_INCREMENT = 1.5;
var SHAKE_MAX_PERCENT_OF_ELEMENT_HEIGHT = 0.33;

var ROTATE_INCREMENT = 5;
var ROTATE_MAX = 35;

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
		moveMax: $(element).height() * SHAKE_MAX_PERCENT_OF_ELEMENT_HEIGHT,
		moveVector: [0, 0],
		translateTransform: '',
		rotatePositive: Math.random() >= 0.5 ? true : false,
		rotation: 0,
		rotationTransform: '',
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
			object.moveVector[0] += SHAKE_INCREMENT;
		} else {
			object.moveVector[0] -= SHAKE_INCREMENT;
		}

		if (object.moveDirections[1]) {
			object.moveVector[1] += SHAKE_INCREMENT;
		} else {
			object.moveVector[1] -= SHAKE_INCREMENT;
		}

		object.translateTransform = "translateX(" + object.moveVector[0] + "px) " + 
					"translateY(" + object.moveVector[1] + "px)";

		updateTransform(object, 
				[object.translateTransform, object.rotationTransform]);

		var distanceToMax = [
				Math.min(1, Math.abs(object.moveVector[0] / object.moveMax)),
				Math.min(1, Math.abs(object.moveVector[1] / object.moveMax))];

		if (Math.random() < distanceToMax[0]) {
			object.moveDirections[0] = !object.moveDirections[0];
		}
		if (Math.random() < distanceToMax[1]) {
			object.moveDirections[1] = !object.moveDirections[1];
		}
	}
}

function tickRotators (objects) {
	for (var ii = 0; ii < objects.length; ii++) {
		var object = objects[ii];
		var distanceToMaxRotate;
		if (object.rotatePositive) {
			object.rotation += ROTATE_INCREMENT;
		} else {
			object.rotation -= ROTATE_INCREMENT;
		}

		distanceToMaxRotate = ROTATE_MAX - Math.abs(object.rotation);

		object.rotationTransform = "rotate(" + object.rotation + "deg)";

		updateTransform(object,
				[object.translateTransform, object.rotationTransform]);

		var percentageOfMax = 
				Math.min(1, Math.abs(1 / distanceToMaxRotate * 1.1 + 0.0000001));

		if (Math.random() < percentageOfMax) {
			object.rotatePositive = !object.rotatePositive;
		}
	}
}

function tickShakeAndRotators(objects) {
	tickRotators(objects);
	tickShakers(objects);
}

function updateTransform(object, transforms) {
	var transformString = '';
	for (var ii = 0; ii < transforms.length; ii++) {
		transformString += transforms[ii] + ' ';
	}

	object.element.style.transform = transformString;
}
