let score = "33" //String
// let score = 33 //Integer or number


//to see which datatype they belong to
console.log(typeof score);
// console.log(typeof (score)); //as a method

//ALL SCENARIOS WITH THIS IN MIND-> type convert from String to Numbers - if you are sure that you are going to do operations on numbers only but get input as string

let valueInNumber  = Number(score)
console.log(typeof valueInNumber);

// if we have value as "33abcxyz" instead of 33
// console.log(valueInNumber); -> we get NaN(not a number) but it's type is number

//if we put null then it gives 0

//if we put undefined then it gives NaN again

//if we give boolean value then it gives 0(false) and 1(true)


//IF We try to convert 1/0 into boolean
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//empty string = false
//random string = true

//Number back to String
let stringNumber = String(valueInNumber)
console.log(stringNumber)
