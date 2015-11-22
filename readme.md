#The problem of js context and this keyword

these little sources explain how to create an object and avoid common mistake about context and this. It's clear that this is not the only way to create an object.

In details the problem is this:

look at the following code (the test):


	function setObjVal(fn,val){
		fn(val);
	}

this is a simple function that call a method in object.

well there's different way to create an object. I've found this way that works:

	module.exports = (function(){

		var self = {

			var1: "unmod",
			setVar1: function(val){

				self.var1 = val;
			}	
		}

		return self;

	})();

attention also to typescript code generator:

	class Tst {

	var1: string;

	constructor(){
		this.var1 = "unmod";
	}

	setVar1(){
		
		this.var1 = "OK";
	}



	}

this will be transcompiled in this

	var Tst = (function () {
    function Tst() {
        this.var1 = "unmod";
    }
    Tst.prototype.setVar1 = function () {
        this.var1 = "OK";
    };
    return Tst;
	})();
	module.exports= new Tst();

which also fail the test.

To execute test install Nodejs