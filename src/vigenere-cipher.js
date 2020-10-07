const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(value) {
        this.type = value;
    }
    encrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw new Error();
        }

        let res = '';
        let alphabeth = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        let coppyKey = key.slice();
        while (message.length > key.length) {
            for (let i = 0; i < coppyKey.length; i++) {
                key += coppyKey.split('')[i];
            }
        }
        while (message.length < key.length) {
            key = key.slice(0, -1);
        }

        let j = 0;
        for (let i = 0; i < message.length; i++) {
            if (alphabeth.indexOf(message.split('')[i].toUpperCase()) !== -1) {
                let pos = 0;
                pos += (alphabeth.indexOf(message.toUpperCase().split('')[i]) + alphabeth.indexOf(key.toUpperCase().split('')[j])) % 26;
                res += alphabeth.split('')[pos];
                j += 1;
            } else {
                res += message.split('')[i];
            }
        }

        if (this.type === undefined || this.type === true) {
            return res.toUpperCase();
        } else {
            return res.split('').reverse().join('').toUpperCase();
        }
    }
    decrypt(encryptedMessage, key) {
        if (encryptedMessage === undefined || key === undefined) {
            throw new Error();
        }

        let res = '';
        let alphabeth = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        let coppyKey = key.slice();
        while (encryptedMessage.length > key.length) {
            for (let i = 0; i < coppyKey.length; i++) {
                key += coppyKey.split('')[i];
            }
        }
        while (encryptedMessage.length < key.length) {
            key = key.slice(0, -1);
        }

        let j = 0;
        for (let i = 0; i < encryptedMessage.length; i++) {
            if (alphabeth.indexOf(encryptedMessage.split('')[i].toUpperCase()) !== -1) {
                let pos = 0;
                pos += (alphabeth.indexOf(encryptedMessage.toUpperCase().split('')[i]) + 26 - alphabeth.indexOf(key.toUpperCase().split('')[j])) % 26;
                res += alphabeth.split('')[pos];
                j += 1;
            } else {
                res += encryptedMessage.split('')[i];
            }
        }

        if (this.type === undefined || this.type === true) {
            return res.toUpperCase();
        } else {
            return res.split('').reverse().join('').toUpperCase();
        }
    }
}

module.exports = VigenereCipheringMachine;