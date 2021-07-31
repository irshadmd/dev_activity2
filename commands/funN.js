let fs = require('fs');

function funN(filesArr) {
    let content = "";
    for (let i = 0; i < filesArr.length; i++) {
        content += fs.readFileSync(filesArr[i]) + "\r\n";
    }
    let contentArr = content.split("\r\n");

    let tempArr = [];
    for (let i = 0; i < contentArr.length; i++) {
        tempArr.push((i + 1) + ". " + contentArr[i]);
    }

    let updatedContent = tempArr.join("\n")
    return updatedContent;

}

module.exports = {
    funN: funN
}