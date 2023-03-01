function formatDate(date) {
    let now = new Date();
    let diff = now - date;
    if (diff < 1000) {
        return "прямо сейчас";
    } else if (Math.round(diff / 1000) < 60) {
        return Math.round(diff / 1000) + ' сек. назад';
    } else if (Math.round(diff / 60000) < 60) {
        return Math.round(diff / 60000) + ' мин. назад';
    } else {
        let months = +date.getMonth() + 1;
        let month = months < 10 ? '0' + months : months;
        let dayOfMonth = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        return dayOfMonth + '.' + month + '.' + date.getFullYear().toString().slice(-2) + ' ' + hour + ':' + minutes;
    }

}