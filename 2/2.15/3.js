function pow(x, n) {
    let res = 1;
    for (let i = 0; i < n; i++) {
        res *= x;
    }
    return (res);
}

let x = prompt("введите x", "");
let n = prompt("введите n", "");

if ((n >= 1) || (number.isInteger(n))) {
    alert(pow(x, n));
} else {
    alert(`Степень ${n} не поддерживается`);
}