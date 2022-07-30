const hourE1 = document.getElementById("hour");

const minuteE1 = document.getElementById("minutes");

const secondE1 = document.getElementById("seconds");

const ampE1 = document.getElementById("amp");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getminutes();
    let s = new Date().getSeconds();

    let amp = "AM";

    if (h > 12) {
        h = h - 12;
        amp = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourE1.innerText = h;
    minuteE1.innerText = m;
    second1.innerText = s;
    ampE1, (innerText = amp);
    setTimeout(() => {
        updateClock()
    }, 100)
}

updateClock();