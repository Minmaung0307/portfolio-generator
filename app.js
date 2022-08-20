// console.log("Hello World");
// console.log(document);
var message = "Hello Node!";
var sum = 5 + 3;
// console.log(message);
// console.log(sum);
var commandLineArgs = process.argv;
// console.log(commandLineArgs);

const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// const message = "Hello Node!";
// message = "Goodbye Node!";
// const sum = 5 + 3;
// sum += 1;

const animalArray = ["dog", "cat", "pig"];
animalArray.push("cow");
animalArray.cat = "flying";
// console.log(animalArray);

const personObj = {
  name: "Lernantino",
  age: 99,
};
personObj.age = 100;
personObj.occupation = "Developer";
// console.log(personObj);

// const printProfileData = (profileDataArr) => {
//   console.log(profileDataArr);
// };
// printProfileData(profileDataArgs);

// Notice the lack of parentheses around the `profileDataArr` parameter?
// const printProfileData = (profileDataArr) => {
//   for (let i = 0; i < profileDataArr.length; i++) {
//     console.log(profileDataArr[i]);
//   }
// };
// printProfileData(profileDataArgs);

// let message = "Hello Node!";
// message = "Hello ES6!";

// let sum = 5 + 3;
// sum += 1;

const message = "Hello Node!";

if (true === true) {
  const message = "Hello ES6!";
  let sum = 5;
  sum += 10;
  console.log(message);
  console.log(sum);
}

console.log(message);
console.log(sum);

const message = "Hello Node!";

if (true === true) {
  const message = "Hello ES6!";
  let sum = 5;
  sum += 10;
  console.log(message);
  console.log(sum);
}

console.log(message);
console.log(sum);

const printProfileData = (profileDataArr) => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log(printProfileData);

  // Is the same as this...
  profileDataArr.forEach((profileItem) => {
    console.log(profileItem);
  });
};
