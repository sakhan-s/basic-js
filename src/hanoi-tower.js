const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let t = 2 ** disksNumber - 1;
    let s = Math.floor(3600 / turnsSpeed * t);
    return { turns: t, seconds: s };
};