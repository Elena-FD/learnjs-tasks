let calculator = {
    sum() {
        return this.first + this.second;
    },
    mul() {
        return this.first * this.second;
    },
    read() {
        this.first = +prompt("first number", 0);
        this.second = +prompt("second number", 0);
    }

};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());