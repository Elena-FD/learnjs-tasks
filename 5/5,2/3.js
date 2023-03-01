function readNumber() {
    let num;
    do {
        num = prompt("number", 0);
        if (num === null || num === "") {
            return null;
            break;
        }
    } while (!isFinite(num));
    return +num;
}

alert(readNumber());