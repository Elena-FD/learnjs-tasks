function getLocalDay(date) {
    let week = [7, 1, 2, 3, 4, 5, 6];
    return week[date.getDay()];
}


let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert(getLocalDay(date));       // вторник, нужно показать 2