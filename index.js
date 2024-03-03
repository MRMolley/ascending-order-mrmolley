
const { uuid } = require('uuid');

function generateAscendingList(length) {
    let ascendingList = [];
    for (let i = 1; i <= length; i++) {
        ascendingList.push(i);
    }
    return ascendingList;
}

// Usage
const ascendingList = generateAscendingList(10);
console.log(ascendingList);


module.exports = { generateAscendingList };
