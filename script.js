// 'use strict';
// /*
// function logger() {
//     console.log("My name is Jonas");
// }
// //calling/running/invoking a function.
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice)


// //function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);
// //function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age1, age2);



// //Arrow function

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);


// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const rettirement = 65 - age;
//     // return rettirement;
//     return `${firstName} retires in ${rettirement} years.`;
// }
// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1980, "Bob"));


// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));



// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const rettirement = 65 - age;
//     if (rettirement > 0) {
//         console.log(`${firstName} retires in ${rettirement} years.`);
//         return rettirement;
//     } else {
//         console.log(`${firstName} has already retired.`);
//         return -1;
//     }
//     // return `${firstName} retires in ${rettirement} years.`;
// }
// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1970, "Mike"));




// const calcAverage = (a, b, c) => (a + b + c) / 3;
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins wins (${scoreDolphins},${scoreKoalas})`)
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Koalas wins (${scoreKoalas},${scoreDolphins})`)
//     } else {
//         console.log("No team wins...")
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas)

// // const checkWinner = function (avgDolphins, avgKoalas) {
// //     if (avgDolphins >= avgKoalas * 2) {
// //         console.log(`Dolphins wins (${avgDolphins},${avgKoalas})`)
// //     } else if (avgKoalas >= avgDolphins * 2) {
// //         console.log(`Koalas wins (${avgKoalas},${avgDolphins})`)
// //     } else {
// //         console.log("No team wins...")
// //     }
// // }
// // checkWinner(scoreDolphins, scoreKoalas)



// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);
// // const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1])
// friends[2] = "Jay";
// console.log(friends);
// //friends = ["Bob", "Alice"]
// const firstName = "Jonas"
// const jonas = [firstName, "Jonas", "Schmedtmann", 2037 - 1991, "teacher", friends]

// console.log(jonas);
// console.log(jonas.length);


// const calcAge = function (birthYear) {
//     return 2037 - birthYear
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);

// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);


// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

// console.log(ages);



// // Add elements
// const friends = ["Michael", "Steven", "Peter"];
// const newLength = friends.push("Jay-Z");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends)

// // Remove elements

// const popped = friends.pop(); //removes last element.
// console.log(friends)
// console.log(popped)

// friends.shift(); // removes the first element.
// console.log(friends)
// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));
// friends.push(23);
// console.log(friends.includes("Steven"))
// console.log(friends.includes("Bob"))
// console.log(friends.includes("23"))


// if (friends.includes("Peter")) {
//     console.log("You have a friend called Peter.")
// }



// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// }


// // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, total)



// // const jonasArray = [
// //     "Jonas",
// //     "Schmedtmann",
// //     2037 - 1991,
// //     "teacher",
// //     ["Michael", "Peter", "Steven"]
// // ];

// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     age: 2037 - 1991,
//     job: "teacher",
//     friends: ["Michael", "Peter", "Steven"]
// }
// console.log(jonas);


// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// // console.log(jonas."last"+ nameKey) not working the same with the dot as with the curly brackets.

// const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends");

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log("Wrong request! What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends.");
// }

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";
// console.log(jonas);

// //challenge
// //"Jonas has 3 friends and his best friend is called Michael."
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)




// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     birthYear: 1991,
//     job: "teacher",
//     friends: ["Michael", "Peter", "Steven"],
//     hasDriversLicense: true,

//     // calcAge: function () {
//     // console.log(this);
//     //         return 2037 - this.birthYear;
//     //     }
//     // }
//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;

//         //     },
//         //     getSummary: function () {
//         //         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriversLicense ? "a" : "no"} drivers license.`

//         //     }
//         // }
//         // console.log(jonas.calcAge());

//         // console.log(jonas.age);
//         // console.log(jonas.age);
//         // console.log(jonas.age);

//         // // Challange:
//         // //"Jonas is a 46-year old teacher, and he has a drivers license."
//         // console.log(jonas.getSummary());
// */


// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2
//         return this.bmi

//     }
// };
// mark.calcBMI();

// console.log(mark.bmi)

// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2
//         return this.bmi;
//     }
// };
// john.calcBMI()
// console.log(john.bmi)

// console.log(mark.bmi, john.bmi)
// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
// } else {
//     console.log("They have the same BMI.")
// }

