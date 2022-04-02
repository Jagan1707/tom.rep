

function add(x,y){
  var z=x+y;
  document.write(z);
}


function print(){
    var prin = document.getElementById("num1").value;
    alert("welcome "+prin);
}
 function gen(){
   var gend = document.getElementsByName("gender");
   alert ("total : " + gend.length);
 }

 function tagcount(){
   var tag=document.getElementsByTagName("h1");
   alert("total tags : " + tag.length);
 }



jagan={
age:21,
qul : "bsc",
};
document.write(jagan.age + "</br>");
var jagan1 = new Object();
jagan1.id=7777;
document.write(jagan1.id);
function jagan2(age,id,qul){
    this.age=age;
    this.id =  id;
    this.qul=qul;
}
j=new jagan2(21,98998,"bsc");
document.write(j.id);


var arr = [5,2,3,4];
var y = new Array();
y[0] = "J";
y[1] = "P";
 for(var x =0;x<y.length;x++){
document.writeln(y[x]);
 }

