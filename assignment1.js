//Basic Rest Parameters**:
//Function sumAll returns the sum of all the parameters passed using rest parameters. 
//If no parameter provided it will return '0'

function sumAll(...pNums)
{
    let totalSum = 0;
    for(const vNums of pNums)
    {
        totalSum += vNums;
    }
    return totalSum;
}

console.log(sumAll(1,2,3));
console.log(sumAll(10,100,-100,5));
console.log(sumAll(1));
console.log(sumAll(5,0,-1,-5));
console.log(sumAll());

//Function userInfo that accepts a first name, last name, and a rest parameter for
//hobbies. This function will return an object containing the name (first and last combined) 
//and an array of hobbies.

function userInfo(pFirstName,pLastName,...pHobbies)
{
    let userDetails;

    userDetails = {fistname:pFirstName,lastname:pLastName,pHobbies};

    return userDetails;
}
console.log(userInfo('Ganesh','Nandyala','Studying','Cricket','Music'));
console.log(userInfo('Sameeksha','Nandyala','Playing'));
console.log(userInfo('Micheal','Jackson','Pop','Dancing'));