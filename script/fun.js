const body = document.body;
const endTime = new Date('December 31 2020 23:59:59');
const daysEl = document.querySelector('days');
const hoursEl = document.querySelector('hours');
const minutesEl = document.querySelector('minutes');
const secondsEl = document.querySelector('seconds');


setInterval(updateCountdown, 1000)
setInterval(createSnowFlake, 50);


function updateCountdown() {
    const startTime = new Date();
    const diff = endTime - startTime;
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours < 10 ? '0' + hours : hours;
    minutesEl.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    secondsEl.innerHTML = seconds < 10 ? '0' + seconds : seconds;
}