let fs = require('fs');

function funN(filesArr) {
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
    let count = 1;
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] != null && contentArr[i] != "") {
            tempArr.push(count + ". " + contentArr[i]);
            count++;
        }
    }

    let updatedContent = tempArr.join("\n")
    return updatedContent;

}

module.exports = {
    funN: funN
}