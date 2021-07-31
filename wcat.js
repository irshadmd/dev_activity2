let fs = require('fs');
let path = require('path');
let displayCon = require('./commands/displayCon.js')
let funS = require('./commands/funS.js')
let funN = require('./commands/funN.js')

let inputArr = process.argv.slice(2);

let filesArr = [];
let commandsArr = [];

console.log(inputArr);

//input seperate
for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i].charAt(0) == '-') {
        commandsArr.push(inputArr[i]);
    } else {
        filesArr.push(inputArr[i]);
    }
}

console.log(commandsArr);
console.log(filesArr);


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

console.log(command);
switch (command) {
    case "display":
        console.log(displayCon.display(filesArr));
        break;
    case "-s":
        // console.log("convert big line breaks into a singular line break");
        console.log(funS.funS(filesArr));
        break;
    case "-n":
        // console.log("give numbering to all the lines ")
        console.log(funN.funN(filesArr));
        break;
    case "-b":
        console.log("give numbering to non-empty lines")
        break;
    case "mix":
        console.log("We can mix and match the options.")
        break;

}