module.exports = function countCats(matrix) {
    let count = 0;
    matrix.forEach((el) => {
        el.forEach((item) => {
            if (item === `^^`) {
                count++;
            }
        });
    });
    return count;
};