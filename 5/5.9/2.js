function count(obj) {
    let res=0;
    for (let i of Object.values(obj)) {
        res++;
    }
    return res;
}

let user = {
    name: 'John',
    age: 30
};

alert( count(user) ); // 2