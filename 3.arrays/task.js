function compareArrays(arr1, arr2) {
  
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr1.every((idx) => {
        return (arr1[idx] === arr2[idx]);  
    });

}

function getUsersNamesInAgeRange(users, gender) {
  
}