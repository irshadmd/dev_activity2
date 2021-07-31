let fs = require('fs');

function funS(filesArr) {
    let content = "";
    for (let i = 0; i < filesArr.length; i++) {
        content += fs.readFileSync(filesArr[i]) + "\r\n";
    }
    let contentArr = content.split("\r\n");

    for (let i = 1; i < contentArr.length; i++) {
        if (contentArr[i] == "" && contentArr[i - 1] == "") {
            contentArr[i] = null;
        } else if (contentArr[i] == "" && contentArr[i - 1] == null) {
            contentArr[i] = null;
        }
    }

    let tempArr = [];
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] !== null) {
            tempArr.push(contentArr[i]);
        }
    }

    let updatedContent = tempArr.join("\n")
    return updatedContent;

}

module.exports = {
    funS: funS
}