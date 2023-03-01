function aclean(arr) {
    let map = new Map();
    let word = [];
    for (let i of arr) {
        word = i.toLowerCase().split('');
        word.sort();
        map.set(word.join(''), i);
    }
    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"