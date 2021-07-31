let fs = require('fs');

function display(filesArr) {
    let content = "";
    for (let i = 0; i < filesArr.length; i++) {
        content += fs.readFileSync(filesArr[i]) + "\n";
    }
    return content;
}

module.exports = {
    display: display
}