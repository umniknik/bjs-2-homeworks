function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every(item => item === arr2[arr1.indexOf(item)]);
}

function getUsersNamesInAgeRange(users, gender) {
    return users.filter(item => item.gender === gender).map(item => item.age).reduce((acc, item, index, arr22) => {
        acc += item;
        if (index === arr22.length - 1) {
            return acc / arr22.length;
        }
        return acc;
    }, 0);
}