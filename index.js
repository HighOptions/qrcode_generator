/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter your given name: '
    },
]

// inquirer
inquirer.prompt(questions)
    .then(answers => {
    var url= answers.name;
    console.log(url);
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('i_love_q.png'));
    })

