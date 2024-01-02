var num = 5;
var result = num % 2;
var resultValue = result == 0 ? " Given number is Even " : "It is Odd number"; 
console.log(resultValue);

var n1 = "100";
var n2 = 100;
var result = n1 == n2 ;
console.log(` Comparision using == operator ==> ${ result } `);


var result = n1 === n2 ;
console.log(` Comparision using === operator ==> ${ result } `);


console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>Operators and NaN>>>>>>>>>>>>>>>>>>>>>>>>")

var a=10;
var b=a++;
console.log(b);

var c= 20;
var d= ++c;
console.log(d);


var result=0/0;
console.log(result);

var result=100+true;
console.log(result);


var s1="101";
console.log(typeof s1)

var s2=+s1;
console.log(s2);
console.log(typeof s2);

var z=+"sayali"
console.log(z);

var d=Number("101");
console.log(typeof d);

var s1="200A";
var res=Number(s1);
console.log(typeof res);
console.log(res);


var a;
console.log(a);
console.log(typeof a);


var p=Boolean(10);
console.log(p);