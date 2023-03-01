function getSecondsToday() {
    let date = new Date();
    let tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    tomorrow.setDate(tomorrow.getDate() + 1);
    let sec = (tomorrow - date) / 1000;
    return Math.round(sec);
}

alert(getSecondsToday());