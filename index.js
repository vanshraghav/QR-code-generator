
import * as fs from 'fs';
import inquirer from 'inquirer';
import * as qr from 'qr-image';
inquirer
  .prompt([
    { message : "Type in the Url",
    name:"url",
    },
   
  ])
  
  .then((answers) => {
        const url = answers.url
        const name = answers.name
        var Qr=qr.image(url,{ type : "png"});
        Qr.pipe(fs.createWriteStream('qr.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });