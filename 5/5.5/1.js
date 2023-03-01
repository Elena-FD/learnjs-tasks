function camelize(str) {
    let arr = str.split('-');
    for (let item = 1; item < arr.length; item++) {
        arr[item] = arr[item][0].toUpperCase() + arr[item].slice(1);
    }
    return arr.join('');
}

alert(camelize(prompt('', '')))