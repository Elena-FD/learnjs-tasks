function unique(arr) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i], i + 1) < 0) {
            newarr.push(arr[i]);
        }
    }
    return newarr;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings)); // кришна, харе, :-O