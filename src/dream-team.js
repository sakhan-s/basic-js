const STRING = `string`;

module.exports = function createDreamTeam(members) {
    let res = [];
    if (Array.isArray(members)) {
        members.forEach((el) => {
            typeof(el) === STRING && res.push(el.trim()[0].toUpperCase());
        });
    }
    return res.sort().join(``);
};