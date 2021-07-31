let fs = require('fs');
let path = require('path');
let displayCon = require('./commands/displayCon.js')
let funS = require('./commands/funS.js')
let funN = require('./commands/funN.js')
let funB = require('./commands/funB.js')
let mix = require('./commands/mix.js')

let inputArr = process.argv.slice(2);

let filesArr = [];
let commandsArr = [];

//input seperate
for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i].charAt(0) == '-') {
        commandsArr.push(inputArr[i]);
    } else {
        filesArr.push(inputArr[i]);
    }
}

for (let i = 0; i < filesArr.length; i++) {
    //edge case 1 check
    if (!(fs.existsSync(filesArr[i]))) {
        console.log(`file doesn't exists on: ${filesArr[i]} `);
        return;
    }
}

let command = "";
if (commandsArr.length == 0 && filesArr.length >= 1) {
    command = "display";
} else if (commandsArr.length == 1) {
    command = commandsArr[0];
} else {
    command = "mix";
}

switch (command) {
    case "display":
        console.log(displayCon.display(filesArr));
        break;
    case "-s":
        // convert big line breaks into a singular line break
        console.log(funS.funS(filesArr));
        break;
    case "-n":
        // give numbering to all the lines
        console.log(funN.funN(filesArr));
        break;
    case "-b":
        // give numbering to non-empty lines
        console.log(funB.funB(filesArr));
        break;
    case "mix":
        // We can mix and match the options.
        console.log(mix.funMix(filesArr, commandsArr));
        break;
}