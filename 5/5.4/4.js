function sumInput() {
    let arr = [];
    while (true) {
        let num = prompt('', '');
        if (isNaN(num) || num === null || num === "") {
            break
        }
        arr.push(+num);
    }
    let sum = 0;
    for (let item of arr) {
        sum += item;
    }
    return sum;
}

alert(sumInput())