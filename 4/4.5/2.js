function Calculator() {
    this.sum = function () {
        return this.first + this.second;
    };
    this.mul = function () {
        return this.first * this.second;
    };
    this.read = function () {
        this.first = +prompt("first number", 0);
        this.second = +prompt("second number", 0);
    };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());