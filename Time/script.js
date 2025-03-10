const timer = document.getElementById("timer");

let time;
do {
    time = prompt("Введите время в секундах");
} while (isNaN(time) || time === null || time.trim() === "" || time < 0);

time = Number(time);

function update() {
    if (time >= 0) {
        const minutes = Math.floor(time / 60);
        let second = time % 60;
        second = second < 10 ? "0" + second : second;
        timer.innerHTML = `${minutes}:${second}`;
        time--;
    } else {
        clearInterval(interval);
    }
}

const interval = setInterval(update, 1000);
