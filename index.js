// const { fstat } = require("fs");
// const choices = require('inquirer/lib/objects/choices');
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([
    {
        type: 'input', 
        message: 'What is your name?', 
        name: 'name'
    },
    {
        type: 'checkbox',
        message: "What languages do you know?",
        name: 'stack',
        choices: ['HTML', 'CSS', 'javaScript', 'MySQL']
    },
    {
        type: 'list',
        message: "What is your preferred method of communication?",
        name: 'contact',
        choices: ['email', 'phone', 'telekinesis']
    }
])
.then(data => {
    // console.log(data);
    const filename = '${data.name
        .toLocaleLowerCase()
        .split(' ')
        .join('')}.json';

        fs.writeFile(filename, JSON.stringify(data, null, '\t'), err => 
        eff ? console.log(err) : console.log('Success!')
        );
});


// npm init
// npm i inquirer    // npm i tesla-images from npmjs.com
// cat package.json
// touch index.js
// node index.js