let rectangleImperial = { length: 100, width: 50, height: 70 };  //create an object for rectangle with Imperial measurement

let rectangleMetric = { length: 100, width: 50, height: 70 }; //create an object for rectangle with Metric measurement

untiConverter("imperial", rectangleImperial); //Call function

untiConverter("metric", rectangleMetric); //Call function

function untiConverter(unit, object) {
	if (unit === "metric") {  //if it is metric, then do the following by dividing 2.54
		let newRectangle = {
			length: object.length / 2.54,
			width: object.width / 2.54,
			height: object.height / 2.54,
		};

		return newRectangle;
	} else if (unit === "imperial") {  //if it is imperial, then do the following by mulitplie 2.54
		let newRectangle = {
			length: object.length * 2.54,
			width: object.width * 2.54,
			height: object.height * 2.54,
		};
		return newRectangle;
	}
}
