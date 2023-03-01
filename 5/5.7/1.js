function unique(arr) {
    let set = new Set();
    for (let i of arr) {
        set.add(i);
    }
    return Array.from(set);
}

let values = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(values)); // кришна, харе, :-O