function topSalary(salaries) {
    let max = 0;
    let best = null;
    for (let [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary;
            best = name;
        }
    }
    return best;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert(topSalary(salaries));