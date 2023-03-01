function Calculator() {
    let methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
    this.calculate = function (str) {
        let arr = str.split(' ');
        return methods[arr[1]](+arr[0], +arr[2]);
    }
    this.addMethod = function (name, func) {
        methods[name] = func;
    }
}
