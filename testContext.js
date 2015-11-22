var obj1 = require("./objtst1.js");
var cobj2 = require("./objtst2.js");var obj2 = new cobj2();
var obj3 = require("./objtst3.js");
var objts = require("./a.js");


/**
	assign function
*/
function setObjVal(fn,val){
	fn(val);
}


console.log("\n**Test context in js es5**\n\n");
console.log("this example show how correctly create an object");
console.log("and problem with context\n\n");
//Object 1////////////////////////////////////////
console.log("\n\nTEST OBJ1");
setObjVal(obj1.setVar1,"OK");

console.log("var1 value: "+obj1.var1);

if(obj1.var1==="OK")
	console.log("var1 is set with success.");
else
	console.log("var1 is set with NO success.");

//Object 2////////////////////////////////////////
console.log("\n\nTEST OBJ2");
setObjVal(obj2.setVar1,"OK");

console.log("var1 value: "+obj2.var1);

if(obj2.var1==="OK")
	console.log("var1 is set with success.");
else
	console.log("var1 is set with NO success.");

//Object 3////////////////////////////////////////
console.log("\n\nTEST OBJ3");
setObjVal(obj3.setVar1,"OK");

console.log("var1 value: "+obj3.var1);

if(obj3.var1==="OK")
	console.log("var1 is set with success.");
else
	console.log("var1 is set with NO success.");
	
	
//Object 4////////////////////////////////////////
console.log("\n\nTEST OBJ4 from typescript");
setObjVal(objts.setVar1,"OK");

console.log("var1 value: "+objts.var1);

if(objts.var1==="OK")
	console.log("var1 is set with success.");
else
	console.log("var1 is set with NO success.");	