function getAverageAge(users) {
    let n = 0;
    let sum=0;
    for (let item of users) {
        sum += item.age;
        n++;
    }
    return sum/n;
}

let vasya = {name: "Вася", age: 25};
let petya = {name: "Петя", age: 30};
let masha = {name: "Маша", age: 29};

let arr = [vasya, petya, masha];

alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28