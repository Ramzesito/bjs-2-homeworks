function compareArrays(arr1, arr2) {
  
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr1.every((idx) => {
        return (arr1[idx] === arr2[idx]);  
    });

}

function getUsersNamesInAgeRange(users, gender) {

    let result = users
        .filter(user => user.gender == gender)
        .map(user => user.age)
        .reduce((acc, age, idx, arr) => {
            acc+=age;
            if (idx === arr.length - 1) {
                return acc / arr.length;
            }
            return acc;
        }, 0);
    return result;
      
}