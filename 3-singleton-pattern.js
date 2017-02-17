//SINGLETON

//The presence of a singleton in a project can signal
//modules could be either overly spread or tightly couple
//You don't want to have a lot of these really

//Creates ONLY 1 single instance of an object
//through singleton.getInstance()
var mySingleton = (function(){

	var instance;

	var init = function(){
		var privateProp = 0;

		return {
			publicProp: 0,
			publicFunc: function(){ return ++this.publicProp; }
		};
	}

	return {
		getInstance: function(){

			if(!instance){
				instance = init();
			}

			return instance;
		}
	};

})();

var singleton = mySingleton.getInstance();
var singleton2 = mySingleton.getInstance();

singleton.publicFunc(); //increase singleton 1
console.log(singleton2.publicProp); //singleton2 shares the same reference as singleton 1


//MODIFIABLE SINGLETON
//COOOL!
var mySingletonModifiable = (function(){

	var instance;

	function singleton(options){	

		var everything = options || {option1: true}

		return everything;
	}

	return {
		createInstance: function(options){

			if(!instance){
				instance = singleton(options);
			}

			return instance;
		}
	}

})();








