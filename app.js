const fs = require("fs");
const chalk = require("chalk");
generate = (str) => {
    str = fs.readFileSync(str, "utf8");
    let result = "data = { \n";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ":" && str[i + 1] === "\n") {
            result += str[i] + "{";
        } 
        else if (str[i - 1] === ":" && str[i] === " ") {
            result += str[i] + '"';
        } 
        else if (str[i + 1] === "\n") {
            result += str[i] + '",';
        } 
        else {
            result += str[i];
        }
    }
    
    result += '"';
    result += "\n} \n}  \n}";

    fs.writeFile("new-data.txt", result, function (err) {
        if (err) throw err;
        console.log(chalk.cyan.bgGray.bold.italic.underline('re-structured file is now stored in "new-data.txt"'));
    });
    return result;
}

module.exports.generate = generate;