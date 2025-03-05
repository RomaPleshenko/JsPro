const timer = document.getElementById("timer");
let time = prompt("Введите время в секундах");

setInterval(update,1000);
function update() {
    const minutes = Math.floor(time/60);
    let second = time%60;
    second = second < 10 ? "0" + second: second;
    timer.innerHTML = `${minutes}:${second}`;
    time--;
}