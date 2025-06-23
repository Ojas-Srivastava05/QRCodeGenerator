/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';

inquirer.prompt([
    {
        type: 'input',
        name: 'url',
        message: 'Enter the URL to generate the QR Code: ',
    }
])

.then((answers)=>{
    const url=answers.url;
    const qr_svg=qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile('URL.txt',url,(err)=>{
        if(err) throw err;
        console.log('URL saved to URL.txt and QR code generated ! ');
    });
})
.catch((err)=>{
    console.error('Error:',err);
});