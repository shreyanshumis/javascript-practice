// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(1 != 1);

//AVOID THESE CONVERSIONS AT ALL COSTS

console.log("2" > 1); //true (datatype converts to number)
console.log("02" > 1); //true (datatype converts to number)


//Checking with nulls
console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true - value conversion problem:- the reason is that an equality check == and comparisons > < >= <= work differently. Comparisons(>,<...etc.) convert null to a number(treated as 0). thats why null>= 0 is true and null>0 is false.

//checking with undefined
console.log(undefined==0); //it gives false in all 3 cases as above

// === strict check -  it checks the datatypes as well. The below examples will be treated differently.
console.log("2" == 2);
console.log("2" === 2);