var arr = [1, 3, 5, 7, 8, 9];

//------- MAP -------
const tripled = arr.map(n => n * 3);

console.log("TRIPLED: " + tripled);

//------- FILTER -------
var evens = tripled.filter(n => n % 2 === 0);
var odds = tripled.filter(n => n % 2 !== 0);

console.log("EVENS: " + evens);
console.log("ODDS: " + odds);

const shapes = [
	{ shape: "circle", color: "blue", size: 10 },
	{ shape: "triangle", color: "green", size: 5 },
	{ shape: "square", color: "red", size: 20 },
	{ shape: "oval", color: "yellow", size: 30 }
];

console.log(shapes.filter(shape => shape.size > 10));

//------- REDUCE -------
const workers = [
	{ name: "don", shift: "1", hours: 10 },
	{ name: "don", shift: "2", hours: 5 },
	{ name: "tina", shift: "1", hours: 8 },
	{ name: "george", shift: "3", hours: 6 }
];

var hoursWorked = workers.reduce(function(obj, worker) {
	if (!obj[worker.name]) {
		obj[worker.name] = worker.hours;
	} else {
		obj[worker.name] += worker.hours;
	}

	return obj;
}, {});

console.log(hoursWorked);