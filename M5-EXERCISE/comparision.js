// Greaater than and less than with numbers
let val1 = (5 > 2);
console.log(`val1: ${val1}`);
let val2 = (5 <= 3);
console.log(`val2: ${val2}`);

// Euqality
let val3 = (3 === 3);
console.log(`val3: ${val3}`);

let val4 = ("Hi" !== "hi");
console.log(`val4: ${val4}`);

// Primitive equality (passed by value)
let str1 = "Hello";
let str2 = "Hello";
let val5 = (str1 === str2);
console.log(`val5: ${val5}`);

// Object equality (passed by refrence)
let obj1 = {};
let obj2 = {};
let val6 = (obj1 === obj2);
console.log(`val6: ${val6}`);