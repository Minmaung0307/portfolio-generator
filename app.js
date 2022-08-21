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
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// const [name, github] = profileDataArgs;

// const generatePage = (userName, githubName) => {
//   return `
//   <!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Portfolio Demo</title>
//   </head>

//   <body>
//     <h1>${name}</h1>
//     <h2><a href="https://github.com/${github}">Github</a></h2>
//   </body>
//   </html>
//         `;
// };

// console.log(name, github);
// console.log(generatePage(name, github));

//#7
//ဒီမှာရေးပြီးသားအားလုံးကို ဟိုဘက်ရွှေ့ပြီး အခုလိုပြန်ချိတ်ဆက်လိုက်တာ
// const generatePage = require("./src/page-template.js");

//git-မှာ အမှတ်မဲ့ ထည့်မိလိုက်တဲ့ tracking files တွေကိုဖယ်ရှားဖို့
//git rm -r --cached node_modules ကိုသုံးပါ။

//#8
//inquirer ထည့်ဖို့လိုတော့
// const inquirer = require("inquirer");
// const fs = require("fs");
// const generatePage = require("./src/page-template");
// const pageHTML = generatePage(name, github);
// fs.writeFile("./index.html", pageHTML, (err) => {
//   if (err) throw err;
//   console.log("Portfolio complete! Check out index.html to see the output!");
// });
// console.log(inquirer);

//#9
//inquirer's prompt method
// inquirer
//   .prompt([
//     {
//       type: "input",
//       name: "name",
//       message: "What is your name?",
//     },
//   ])
//   .then((answers) => console.log(answers));

//#10
//promptUser function
// const promptUser = () => {
//   return inquirer.prompt([
//     {
//       type: "input",
//       name: "name",
//       message: "What is your name?",
//     },
//   ]);
// };

// promptUser().then((answers) => console.log(answers));

//#11
// const promptUser = () => {
//   return inquirer.prompt([
//     {
//       type: "input",
//       name: "name",
//       message: "What is your name?",
//     },
//     {
//       type: "input",
//       name: "github",
//       message: "Enter your GitHub Username",
//     },
//     {
//       type: "input",
//       name: "about",
//       message: "Provide some information about yourself:",
//     },
//   ]);
// };
// promptUser().then((answers) => console.log(answers));

//#12
//Single Project
// const inquirer = require('inquirer');
// const generatePage = require('./src/page-template');

// const promptUser = () => {
//   return inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name? (Required)',
//       validate: nameInput => {
//         if (nameInput) {
//           return true;
//         } else {
//           console.log('Please enter your name!');
//           return false;
//         }
//       }
//     },
//     {
//       type: 'input',
//       name: 'github',
//       message: 'Enter your GitHub Username (Required)',
//       validate: githubInput => {
//         if (githubInput) {
//           return true;
//         } else {
//           console.log('Please enter your GitHub username!');
//           return false;
//         }
//       }
//     },
//     {
//       type: 'confirm',
//       name: 'confirmAbout',
//       message: 'Would you like to enter some information about yourself for an "About" section?',
//       default: true
//     },
//     {
//       type: 'input',
//       name: 'about',
//       message: 'Provide some information about yourself:',
//       when: ({ confirmAbout }) => confirmAbout
//     }
//   ]);
// };

// const promptProject = () => {
//   console.log(`
//   =================
//   Add a New Project
//   =================
//   `);
//   return inquirer.prompt([
//     {
//       type: "input",
//       name: "name",
//       message: "What is the name of your project?",
//     },
//     {
//       type: "input",
//       name: "description",
//       message: "Provide a description of the project (Required)",
//     },
//     {
//       type: "checkbox",
//       name: "languages",
//       message: "What did you build this project with? (Check all that apply)",
//       choices: [
//         "JavaScript",
//         "HTML",
//         "CSS",
//         "ES6",
//         "jQuery",
//         "Bootstrap",
//         "Node",
//       ],
//     },
//     {
//       type: "input",
//       name: "link",
//       message: "Enter the GitHub link to your project. (Required)",
//     },
//     {
//       type: "confirm",
//       name: "feature",
//       message: "Would you like to feature this project?",
//       default: false,
//     },
//     {
//       type: "confirm",
//       name: "confirmAddProject",
//       message: "Would you like to enter another project?",
//       default: false,
//     },
//   ]);
// };
// promptUser()
//   .then((answers) => console.log(answers))
//   .then(promptProject)
//   .then((projectAnswers) => console.log(projectAnswers));

//#13
//Multi-projects
const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require("./src/page-template");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username (Required)",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username!");
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmAbout",
      message:
        'Would you like to enter some information about yourself for an "About" section?',
      default: true,
    },
    {
      type: "input",
      name: "about",
      message: "Provide some information about yourself:",
      when: ({ confirmAbout }) => confirmAbout,
    },
  ]);
};

const promptProject = (portfolioData) => {
  console.log(`
=================
Add a New Project
=================
`);

  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your project? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("You need to enter a project name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "description",
        message: "Provide a description of the project (Required)",
        validate: (descriptionInput) => {
          if (descriptionInput) {
            return true;
          } else {
            console.log("You need to enter a project description!");
            return false;
          }
        },
      },
      {
        type: "checkbox",
        name: "languages",
        message: "What did you this project with? (Check all that apply)",
        choices: [
          "JavaScript",
          "HTML",
          "CSS",
          "ES6",
          "jQuery",
          "Bootstrap",
          "Node",
        ],
      },
      {
        type: "input",
        name: "link",
        message: "Enter the GitHub link to your project. (Required)",
        validate: (linkInput) => {
          if (linkInput) {
            return true;
          } else {
            console.log("You need to enter a project GitHub link!");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "feature",
        message: "Would you like to feature this project?",
        default: false,
      },
      {
        type: "confirm",
        name: "confirmAddProject",
        message: "Would you like to enter another project?",
        default: false,
      },
    ])
    .then((projectData) => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

promptUser()
  .then(promptProject)
  .then((portfolioData) => {
    console.log(portfolioData);
  });

//#14
//Validate Answers
