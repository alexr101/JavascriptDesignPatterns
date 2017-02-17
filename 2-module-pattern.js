//MODULE PATTERN

//OBJECT LITERAL NOTATION MODULES 26

var myModule = {

	myProperty: "value",

	config: {
		language: "en",
		useCaching: true
	},

	method: function(){
		console.log("method");
	},

	getCache: function(){
		console.log(this.config)
	},

	newCache: function(newConfig){

		if(typeof newConfig === "object"){
			this.config = newConfig;
			this.getCache();
		}

	}
};

myModule.getCache();
myModule.newCache({language: "le french", useCaching: false});

//MODULE PATTERNS 27

//MODULE PATTERN

//Advantages 
//Cleaner for developers coming from an OOP background
//It supports private data
//No one can touch the private properties

//Disadvantages
//Because you access private variables differently, if you change it to public you have to change wherever it was used as well
//Can't access private variables to methods created later

//Easy
var module = function(){

	var privateVar = 1;

	function privateFunc(){
		//private
	}

	function publicFunc(){
		//public
	}

	return {
		publicFunc: publicFunc
	}

};

//MP - EXPORT VARIATION 32
var myModule = (function(){
	var module = {};

	module.privateProp = "private";

	module.privateFunc = function(){
		//private
	}

	module.publicFunc = function(){
		//public
	}

	return module;
})();


//REVEALING MODULE PATTERN

//ADVANTAGES
//You save yourself some typing, and the public functions are more readable

//DISADCANTAGES
//Difficulty with patching code when a private prop needs to access a public prop and vice-versa
var revealingModule = function(){

	var privateProp = "private";
	var publicProp = "public";

	function privateFunc(){};

	function publicFunc(){};

	return{
		publicProp: publicProp,
		publicFunc: publicFunc
	};

};














