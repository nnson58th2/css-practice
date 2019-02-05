document.addEventListener('DOMContentLoaded', function () {
    // Tạo dòng thời gian
    var days = document.querySelector('.days');
    var hours = document.querySelector('.hours');
    var mins = document.querySelector('.minutes');
    var seconds = document.querySelector('.seconds');

    function showTime() {
        var lunarNewYear = new Date(2019, 1, 5);
        var now = new Date();

        var timeDistance = lunarNewYear - now;

        var d = Math.floor(timeDistance / 86400000);    // Days
        timeDistance -= Math.floor(timeDistance / 86400000) * 86400000;

        var h = Math.floor(timeDistance / 3600000);     // Hours
        timeDistance -= Math.floor(timeDistance / 3600000) * 3600000;

        var m = Math.floor(timeDistance / 60000);       // Minutes
        timeDistance -= Math.floor(timeDistance / 60000) * 60000;

        var s = Math.floor(timeDistance / 1000);    // Seconds

        // if (d < 10) {
        //     d = '0' + d;
        // }
        // if (h < 10) {
        //     h = '0' + h;
        // }
        // if (m < 10) {
        //     m = '0' + m;
        // }
        // if (s < 10) {
        //     s = '0' + s;
        // }

        days.innerHTML = d;
        hours.innerHTML = h;
        mins.innerHTML = m;
        seconds.innerHTML = s;
        setTimeout(showTime, 1000);
    }
    showTime();
});