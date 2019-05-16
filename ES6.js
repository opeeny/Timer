function letTest(){
	//Block-level scope means that avariable is only available in that block(if, for, while, etc)
	let x = 31;//local variable
	if(true){
	let x = 71;//different variables
	console.log(x);//logs 71
	}
	console.log(x); //31
}
function Polygon(height, width){
	this.height = height;
	this.width = width;
	this.area = this.calcArea();
}
Polygon.prototype.calcArea = function(){
	return this.height * this.width;
};
const rectangle = new Ploygo(10, 5);
console.log(rectangle.area);

function Square(sideLength){
	Polygon.call(this, sideLength, sideLength);
}
square.prototype = new Polygon();
const square = new Square(5);
console.log(square);
square.prototype.constructor = square;
const square2 = new square(6);
square2.constructor
//class Polygon
class Polygon{
	constructor(height, width){
		this.height = height;
		this.width = width;
	}
	getArea(){
	return this.calcArea();	
	}
	calcArea(){
		return this.height * this.width;
	}
}
//Inheritance
class Square extends Polygon{
	constructor(sideLength){
		super(sideLength, sideLength)
	}
}
const mysquare = new Square(5);
nysquare.constructor;
mysquare.area;

//Arrow functions provide a cleaner syntax for declaring anonymous functions
//Arrow functions inherit the value of this from the context in which they're defined
const greet = (greeting, person) => {
	return greeting + ', '+person+ '!';
};
//
greet('Hello', 'Marv');
var a = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
//compare
var a2 = a.map(function(s){return s.length});

//class
class Person{
	constructor(name){
		this.name = name;
	}
	greet(){
		console.log('Hello, my name is &{this.name}');
	}
	async function doAsyncOp(){
		var val = await asynchronousOperation();
		console.log(val);
		return val;
	}
}