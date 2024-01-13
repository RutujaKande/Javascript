// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); //f
console.log(null == 0);//f

console.log(null >= 0);//t
// comparisons converts the null to 0 but only equals(==) will not do that
console.log(undefined == 0);//f
console.log(undefined > 0);//f
console.log(undefined < 0);//f
console.log(undefined <= 0);//f
// === also checks for datatype


console.log("2" === 2);//f