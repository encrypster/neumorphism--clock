const deg = 6;
const hr = document.getElementById('hr');
const mn = document.getElementById('mn');
const sc = document.getElementById('sc');

setInterval(() => {
    let date = new Date();
    let hh = date.getHours() * 30;
    let mm = date.getMinutes() * deg;
    let ss = date.getSeconds() * deg;

    hr.style.transform = `rotate(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotate(${mm}deg)`;
    sc.style.transform = `rotate(${ss}deg)`;
}, 1000);