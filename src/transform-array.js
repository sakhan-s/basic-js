const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (arr instanceof Array) {
        let newArr = [];
        let commands = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
        for (let i = 0; i < arr.length; i++) {
            switch (arr[i]) {
                case '--discard-next':
                    if (i !== arr.length - 1) {
                        newArr.push(arr[i]);
                        i += 1;
                    }
                    break;
                case '--discard-prev':
                    if (i !== 0) {
                        newArr.pop(arr[i - 1]);
                        newArr.push(arr[i]);
                    }
                    break;
                case '--double-next':
                    if (i !== arr.length - 1) {
                        newArr.push(arr[i], arr[i + 1]);
                    }
                    break;
                case '--double-prev':
                    if (i !== 0 && arr[i - 2] !== '--discard-next') {
                        newArr.push(arr[i - 1], arr[i]);
                    }
                    break;
                default:
                    newArr.push(arr[i]);
                    break;
            }
        }

        let res = [];

        newArr.forEach(element => {
            if (commands.indexOf(element) === -1) {
                res.push(element);
            }
        });
        return res;
    } else {
        throw new Error();
    }
};