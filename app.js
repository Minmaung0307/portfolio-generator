//#1
// const generatePage = () => "Name: Jane, Github: janehub";
// console.log(generatePage());

//#2
// const generatePage = (userName, githubName) =>
//   `Name: ${userName}, Github: ${githubName}`;
// console.log(generatePage("Jane", "janehub"));

//#3
// const generatePage = (userName, githubName) => {
//   return `
//       Name: ${userName}
//       GitHub: ${githubName}
//     `;
// };
// console.log(generatePage("Jane", "janehub"));

//#4
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];

// const generatePage = (userName, githubName) => {
//   return `
//         Name: ${userName}
//         GitHub: ${githubName}
//       `;
// };

// console.log(generatePage(name, github));

//#5
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// const [name, github] = profileDataArgs;

// const generatePage = (userName, githubName) => {
//   return `
//           Name: ${userName}
//           GitHub: ${githubName}
//         `;
// };

// console.log(name, github);
// console.log(generatePage(name, github));

//#6
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;

const generatePage = (userName, githubName) => {
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
        `;
};

console.log(name, github);
console.log(generatePage(name, github));
