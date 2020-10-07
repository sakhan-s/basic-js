const CustomError = require("../extensions/custom-error");

const chainMaker = {

    chain: '',
    chainLength: 0,
    getLength() {
        this.chainLength = this.chain.match(/( . )/);
    },
    addLink(value) {
        if (this.chain === '') {
            this.chain = '( ' + String(value) + ' )';
            return this;
        }
        this.chain = this.chain + '~~( ' + String(value) + ' )';
        return this;
    },
    removeLink(position) {
        if (position >= 0 && position < this.chain.length && this.chain.length !== 0) {
            if (this.chain.match(/( . )/) === 1) {
                this.chain = '';
                return this;
            } else {
                const a = this.chain.split('~~');
                a.splice(position - 1, 1);
                this.chain = a.join('~~');
                return this;
            }
        } else {
            this.chain = '';
            throw new Error();
        }
    },
    reverseChain() {
        this.chain = this.chain.split('~~').reverse().join('~~');
        return this;
    },
    finishChain() {
        const res = this.chain.slice();
        this.chain = '';
        return res;
    }
};

module.exports = chainMaker;