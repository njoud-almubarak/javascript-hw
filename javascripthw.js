
//Calculate area of a rectangle.. 
let width=5;
let length=4;
let area = width * length;
console.log("The area of the rectangle is : " +area);



//The Temperature Converter..
console.log("The Temperature Converter: ")
let celsius1=11;
let  fahrenheit1= (celsius1 * 9) / 5 + 32;
console.log(celsius1+"C is: "+fahrenheit1+"F");
let fahrenheit2=22;
let celsius2 =(fahrenheit2 - 32) * 5 / 9;
console.log(fahrenheit2+"F is: "+celsius2+"C");



// Sum of all numbers of array..
let Numbers = [23,54,32,87,47];
let sum=0;
for(let i=0;i<Numbers.length;i++){
    sum+=Numbers[i];}
    console.log("sum of number : " +sum);



//Maximum number ..
let numbers2 =[16,4,2,0,19,6];
let max=numbers2[0];
for(let x=0;x<numbers2.length;x++){
    if (max<= numbers2[x])
    max=numbers2[x];}
console.log("The max number is: "+max);


//Reverse Array ..
let numbers3 =[1,2,3,4,5,6,7,8,9,10];
console.log("Reverse Array :[1,2,3,4,5,6,7,8,9,10]");
let len = numbers3.length;
for(let i=len-1;i>=0;i--){
console.log(numbers3[i]);}


//Stars pattern ..
let n = 5;
let star = "";
console.log("Stars pattern : ");
for (let i = 1; i <= n; i++) {
  for (let j = 0; j< i; j++) {
    star += "*";}
  star += "\n";}
console.log(star);





