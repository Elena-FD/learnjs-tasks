let n = prompt("ввести число n", 2);

check:
    for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                continue check;
            }
        }
        alert(i);
    }

