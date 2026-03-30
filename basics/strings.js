// console.log("A" + "B"); - string concat

//backtics - string interpolation - it's like fstring in python.

let name = "Shrey"
console.log(`Hey! my name is ${name} and this is my codespace`); //${} <- string interpolation, `` <- backticks


//STRING DECLARATION
//declaring a string as object
// const gameName = shrey_77 is written as:- 
const gameName = new String('shrey_77')

//you can use length property and a lot more using it since it is a String object...It's a key value pair of it's index and the character like [0:s, 1:h, 2:r, 3:e..] and so on.

//======================================

console.log(gameName[1]);
// console.log(gameName.__proto__); //access objects //depricated feature

//Some Methods
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('r'));

//slicing
const newString = gameName.substring(0,5); //the last value doesnt get included

const anotherString = gameName.slice(0,5);//we can give negative values- it will slice from the last


//trim and replace
const newStringOne = "     shrey       "; //the string has a lot of whitespaces

console.log(newStringOne.trim()) //removes starting and ending spaces

//======================================
const url = "https://shrey.com/hey%20shrey";
console.log(url.replace('%20','-'));

//includes
console.log(url.includes('shrey'));

//splitting
console.log(gameName.split('_'));