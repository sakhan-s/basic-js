const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, option) {
    let res = '';
    str = String(str);
    if (!option.hasOwnProperty('repeatTimes') || option.repeatTimes === undefined) {
        option.repeatTimes = 1;
    }
    if (!option.hasOwnProperty('separator')) {
        option.separator = '+';
    }
    if (!option.hasOwnProperty('addition')) {
        option.addition = '';
    } else {
        option.addition = String(option.addition);
    }
    if (!option.hasOwnProperty('additionRepeatTimes') || option.additionRepeatTimes === undefined) {
        option.additionRepeatTimes = 1;
    }
    if (!option.hasOwnProperty('additionSeparator')) {
        option.additionSeparator = '|';
    }

    for (let i = 0; i < option.repeatTimes; i++) {
        res += str;
        for (let y = 0; y < option.additionRepeatTimes; y++) {
            if (y === option.additionRepeatTimes - 1) {
                res += option.addition;
            } else {
                res += option.addition + option.additionSeparator;
            }
        }

        if (i !== option.repeatTimes - 1) {
            res += option.separator;
        }
    }

    return res;
};