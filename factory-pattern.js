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
vehicleFactory.prototype.vehicleClass = Car;

vehicleFactory.prototype.createVehicle = function(options){
	
	if(options.vehicleType === "car") this.vehicleClass = Car;
	else this.vehicleClass = Truck;

	return new this.vehicleType(options);
}


//Instantiate the factory
var carFactory = new vehicleFactory();

carFactory.createVehicle({
	vehicleType: "car",
	color: "yellow"
});


//CREATE A SUBCLASS FOR TRUCKS ONLY!!
function TruckFactory(){}

//Here's the interesting part...
//You copy the Vehicle Factory Class to this empty prototype!

TruckFactory.prototype.vehicleClass = Truck;

TruckFactory.prototype.createVehicle = 










