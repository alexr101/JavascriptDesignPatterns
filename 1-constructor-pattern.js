//CONSTRUCTOR PATTERN


//OBJECT CREATION

//2 BASIC WAYS
//this
var obj = {};

//is the same as
var obj2 = new Object();

console.log(obj);

console.log(obj2);




//4 WAYS TO DEFINE PROPERTIES

//Dot syntax
obj.prop1 = "prop1";

//Square bracket syntax // array-like
obj["prop2"] = "prop2";

//Define Property 
Object.defineProperty(obj, "prop3", {
	value: "prop3",
	writable: false,
	enumerable: true,
	configurable: true
});

//Define Properties

Object.defineProperties(obj, {
	"prop4": {
		value:"prop4",
		writable: true,
		enumerable: false,
		configurable: true
	},

	"prop5": {
		value: "prop5",
		writable: false,
		enumerable: true,
		configurable: false
	},

	//defaul values
	//writable: true, enumerable: false, configurable: true
	"prop6": {
		value: "prop6"
	},

	"prop7": {
		value: "prop7",
		writable: true,
		enumerable: true
	}
});

//will not go through
//writable false
obj.prop5 = "new";

//writable true
obj.prop7 = "new";

//Loop through the properties
for(var prop in obj){
	console.log("key:   " + prop);
	console.log("value: " + obj[prop]);
};



//INHERITANCE
var person = {
	name: "Alex",
}

//Doesn't work with function constructors
var driver = Object.create(person);
Object.defineProperty(driver, "car", {
	value: "Hyundai",
	writable: true,
	enumerable: true,
	configurable: true
});

for(var prop in driver){
	console.log(driver[prop]);
}



//CONSTRUCTORS WITH PROTOTYPES
//Easy

function Me(){
	this.name = "Alex";
}

//The advantage of this as opposed to creating it in the constructor function is that
//it will be shared by all instances.
Me.prototype.greet = function(){
	console.log("hello my name is " + this.name);
}

var me = new Me();

me.greet();







