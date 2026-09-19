/*let js = "amazing";
console.log(40 + 8 + 11);

let firstName = "Randy";
console.log(firstName);

// functions
/*create a function with two parameters oranges and apples,
 create a juice with the 2 parameters and call the function */
// function declaration
/*function juiceMachine(apples, oranges) {
  const juice = `made fruit juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
console.log(juiceMachine(5, 0));

//storing a function expression inside a variable
const appleOrangeJuice = juiceMachine(2, 8);
console.log(appleOrangeJuice);

// function expression

const ageCalc = function (birthYear) {
  return 2029 - birthYear;
};

console.log(ageCalc(2020));

//function calling inside a function

function cutFruitMachine(fruit) {
  return fruit * 4;
}

function juiceMachine(apples, oranges) {
  const applePieces = cutFruitMachine(apples);
  const orangePieces = cutFruitMachine(oranges);
  const juice = `made fruit juice with ${applePieces} pieces of apples and ${orangePieces}  pieces of oranges`;
  return juice;
}
console.log(juiceMachine(5, 2));

// arrow function
const retirementYearsCalculator = (birthYear, firstName) => {
  const age = 2029 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(retirementYearsCalculator(1996, "Leo"));

// Arrays

const friends = ["Itu", "Lwandle", "Dolly", "Kate"];
console.log(friends);
// changing the value of an array
friends[1] = "Lwandile";
console.log(friends);
console.log(friends[friends.length - 1]);
console.log(friends.length);

const calcYears = (birthyear) => 2029 - birthyear;
const years = [1996, 2000, 2005, 2010];
const age1 = calcYears(years[0]);
const age2 = calcYears(years[1]);
const age3 = calcYears(years[years.length - 1]);
console.log(age1, age2, age3);
const ages = [
  calcYears(years[0]),
  calcYears(years[1]),
  calcYears(years[years.length - 1]),
];
console.log(ages); */

// objects

// const taxiInfo = {
//   driver: "Randy Malau",
//   vehicleInfo: ["Toyota", "Corolla", 2020],
//   licensePlate: "CA 123 456",
//   owner: "Randy Malau",
//   route: ["Tafelkop_Nyakelang"],
// };
// console.log(taxiInfo);
// console.log(taxiInfo.driver);
// console.log(taxiInfo["vehicleInfo"]);
// console.log(taxiInfo.vehicleInfo[0]);

// const userQuery = prompt(
//   "What do you want to know about the taxi? Choose between driver, vehicleInfo, licensePlate, owner, route",
// );
// console.log(taxiInfo[userQuery]);

// if (taxiInfo[userQuery]) {
//   console.log(taxiInfo[userQuery]);
// } else {
//   console.log(
//     "Invalid query. Please choose between driver, vehicleInfo, licensePlate, owner, route.",
//   );
// }
// challenge
// "Randy has 3 friends, and his best friend is called Itu"
// const friends = ["Itu", "Lwandle", "Dolly", "Kate"];
// console.log(friends);
// const Randy = {
//   firstName: "Randy",
//   lastName: "Malau",
//   age: 2029 - 1996,
//   friends: ["Itu", "Lwandle", "Dolly", "Kate"],
// };
// console.log(
//   `${Randy.firstName} has ${Randy.friends.length} friends, and her best friend is called ${Randy.friends[0]}`,
// );

// for loop keeps running while the condition is TRUE

// for (let rep = 1; rep <= 10; rep++) {
//   // console.log(`Lifting weights repetition 1🏋️‍♂️`);
//   // dynamically updating the rep insted of hardcoded
//   console.log(`lifitng weights repetition ${rep}🏋️‍♂️`);
// }

// const Randy = [
//   "Randy",
//   "Malau",
//   "teacher",
//   true,
//   2030 - 1996,
//   ["Itu", "Lwandle", "Dolly", "Kate"],
// ];
// const types = [];
// for (let i = 0; i <= Randy.length - 1; i++) {
//   // reading from Randy array
//   console.log(Randy[i], typeof Randy[i]);

//   // filling types array/ filling arrays
//   // manual method
//   types[i] = typeof Randy[i];
//   // using  built-in array method(push)
//   types.push(typeof Randy[i]);
// }
// console.log(types);

// const birthYears = [2000, 1998, 1994, 2015];
// const ages = [];

// for (let i = 0; i < birthYears.length; i++) {
//   ages.push(2027 - birthYears[i]);
// }
// console.log(ages);

// print data backwards

// const Randy = [
//   "Randy",
//   "Malau",
//   "teacher",
//   true,
//   2030 - 1996,
//   ["Itu", "Lwandle", "Dolly", "Kate"],
// ];

// for (let i = Randy.length - 1; i >= 0; i--) {
//   console.log(i, Randy[i]);
// }
// // nested loops
// for (let rep = 1; rep <= 10; rep++) {
//   // console.log(`Lifting weights repetition 1🏋️‍♂️`);
//   // dynamically updating the rep insted of hardcoded
//   console.log(`lifitng weights repetition ${rep}🏋️‍♂️`);
//   if (rep === 5) {
//     console.log(`Rest for 30 seconds, ${rep}`);
//   }
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(` WHILE===lifitng weights repetition ${rep}🏋️‍♂️`);
//   rep++;
// }

// PROBLEM
// We work for a company building a smart home thermometer.
// Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
// How to think like a developer
// 1. Understand the problem
// 2. Break it up into sub-problems
// 3. Solve the sub-problems

const temperetures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// 1) understand the problem
// -what is tempereture amplitude? Answer: difference between highest and lowest temp
// -how to compute max and min temperatures?
// -what is a sensor error? And what to do?

// 2) break it up into sub-problems
// - how to ignore errors?
// - find max value in temp array
// - find min value in temp array
// - subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== "number") continue;
//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   return max - min;
// };
// let amplitude = calcTempAmplitude(temperetures);
// console.log(amplitude);

// // problem 2
// // function should now receive 2 arrays of temps

// // 1) understand the problem
// // - with 2 arrays, should we implement functionality twice? NO! Just merge two arrays
// // 2) break it up into sub-problems
// // - merge 2 arrays
// const calcTempAmplitudeNew = function (temps1, temps2) {
//   // merge 2 arrays
//   const temps = temps1.concat(temps2);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== "number") continue;

//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   return max - min;
// };
// let amplitudeNew = calcTempAmplitudeNew([3, -2, -6], [9, 13, 15]);
// console.log(amplitudeNew);

// const printForecast = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`...${arr[i]}°C in ${i + 1} days`);
//   }
// };
// printForecast([12, 5, -5, 0, 4]);

// const cart = [
//   { product: "Laptop", quantity: 1 },
//   { product: "Mouse", quantity: 2 },
//   { product: "Keyboard", quantity: 1 },
// ];

// const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
// console.log(`Total quantity of products in the cart: ${totalQuantity}`);

const cart = [
  { product: "Laptop", quantity: 1 },
  { product: "Mouse", quantity: 2 },
  { product: "Keyboard", quantity: 1 },
];
const totalItems = function (cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    total += cartItems[i].quantity;
  }
  return total;
};
console.log(totalItems(cart));
