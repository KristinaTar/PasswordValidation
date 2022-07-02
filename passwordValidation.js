const fs = require("fs");
const fileContent = fs.readFileSync("passwordValidation.txt", "utf8");
const newArr = fileContent.split(/\r?\n/).filter(el => el.trim() !== '');
let correctPass = 0;

for (let i = 0; i < newArr.length; i++) {
    const splitString = newArr[i].split(" ").filter(el => el !== '');
    if (splitString.length !== 3) {
        throw(new Error(`Invalid line ${i}`));
    }
    const [letter, numbers, password] = splitString;
    const [minNum, maxNum] = numbers.match(/\d+/g);
    if(!minNum || !maxNum || maxNum < minNum ){
        throw(new Error(`Validation number is not correct`));
    }
    const counter = password.split(letter).length - 1;

    if (counter >= minNum && counter <= maxNum) {
        correctPass++;
    }
}

console.log(`${correctPass} valid passwords`);
