function filterRange(arr, a, b) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            newarr.push(arr[i])
        }
    }
    return newarr;
}

