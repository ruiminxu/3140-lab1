let rectangleImperial = { length: 100, width: 50, height: 70 };

let rectangleMetric = { length: 100, width: 50, height: 70 };

untiConverter("imperial", rectangleImperial);

untiConverter("metric", rectangleMetric);

function untiConverter(unit, object) {
	if (unit === "metric") {
		let newRectangle = {
			length: object.length / 2.54,
			width: object.width / 2.54,
			height: object.height / 2.54,
		};

		return newRectangle;
	} else if (unit === "imperial") {
		let newRectangle = {
			length: object.length * 2.54,
			width: object.width * 2.54,
			height: object.height * 2.54,
		};
		return newRectangle;
	}
}
