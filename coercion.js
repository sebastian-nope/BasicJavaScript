//COERCION IMPLICITA

var a = 4 + "7";  //=47
//undefined
typeof a
//"string"


var b = 4 * "7";  //=24
//undefined 
typeof b
//"number"



//COERCION EXPLICITA

var c = 20;
var d = c + "";
//undefined
console.log(d);
//20
typeof d;
//"string"
var e = String(c);
//undefined
typeof e
//"string"
var f = Number(e);
//undefined
typeof f
//"number"