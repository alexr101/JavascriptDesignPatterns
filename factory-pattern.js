//Factory Pattern

//Advantages
//Abstract away object creation
//Beneficial when object creation is complex
//Beneficial when you are creating a lot of objects with common factors

//Disadvantages
//Might make object creation more complex than needed
//It can introduce problems with unit testing if code is too complex

//Basic constructors
function Car(options){
	this.color = options.color || "white";
	this.wheels = options.wheels || 4;
	this.size = options.size || "compact";
}

function Truck(options){
	this.color = options.color || "white";
	this.wheels = options.wheels || 4;
	this.size = options.size || "large";
}

//The factory
function VehicleFactory(){};

//Ensure that you're not creating a bunch of properties each time you 
//create a factory
VehicleFactory.prototype.vehicleClass = Car;

VehicleFactory.prototype.createVehicle = function(options){
	
	if(options.vehicleType === "car") this.vehicleClass = Car;
	else this.vehicleClass = Truck;

	return new this.vehicleClass(options);
}


//Instantiate the factory
var carFactory = new VehicleFactory();

var myCar = carFactory.createVehicle({
	vehicleType: "car",
	color: "yellow"
});

console.log(myCar instanceof Car); 
console.log(myCar);




//CREATE A SUBCLASS FOR TRUCKS ONLY!!
function TruckFactory(){}

//Here's the interesting part...
//You copy the Vehicle Factory Class to this empty prototype!
TruckFactory.prototype = new VehicleFactory();

TruckFactory.prototype.vehicleClass = Truck;

var truckFactory = new TruckFactory();

var myTruck = truckFactory.createVehicle({
	color: "grey"
});

console.log(myTruck instanceof Truck);
console.log(myTruck);



//create another one quick...

function Button(options){
	color: options.color || "native";
	size: options.size || "medium";
}

function ImageButton(options){
	color: options.color || "transparent";
	size: options.size || "medium";
}

function WidgetFactory(){}

ButtonFactory.prototype.buttonType = Button;

ButtonFactory.prototype.createButton = function(options){

	if(options.buttonType === "button") this.buttonType = Button;
	else this.buttonType = ImageButton;

	return  new this.buttonType();
}

var buttonFactory = new ButtonFactory();

var myButton = buttonFactory.createButton({
	color: "green",
	size: "large"
});

console.log(myButton);















