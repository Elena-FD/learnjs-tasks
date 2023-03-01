function getSecondsToday() {
    let date = new Date();
    let today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    let sec = (date - today) / 1000;
    return Math.round(sec);
}

alert(getSecondsToday());