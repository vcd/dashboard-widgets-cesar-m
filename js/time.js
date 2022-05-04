const deg = 6;
const hr = document.querySelector('#hr');

const mn = document.querySelector('#mn');

const sc = document.querySelector('#sc');


const theClockApp = () => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
}

/************
Run App
************/
// Re-run `theClockApp` every 1 second (1000 ms)
setInterval(theClockApp, 1000);
