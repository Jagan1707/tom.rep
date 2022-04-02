

const cars = [
    {name : "Audi",color : "Red",cost:7000},
    {name : "BMW",color : "Wight",cost :8000},
    {name :"ROlls_Royals",color:"Black",cost : 2000}
]
  
carsName= (fourweeler)=> fourweeler.color;
const print = cars.map(carsName);
console.log(print);


function add(num1){
    return  function(num2){
    return num1+num2
    }
}
 let result = add(5);
 console.log(result(5));//Higher_order_functin

 const arr1 =[9,8,7,6,5];
 const [a,b,c,d,e] = arr1;
 console.log(b);//a=9,b=8,c=7,d=6,e=5


 var x = "hello";
 var y = "welcome";
 [x,y] = [y,x];
 console.log(y);//swapping of two values
 






