const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const birthday = "1 aug 2022";

function countdown() {
    const birthdayDate = new Date(birthday);
    const currentdate = new Date();

    const totalSeconds= (birthdayDate-currentdate) / 1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/ 3600)%24;
    const mins = Math.floor(totalSeconds/ 60)%60;
    const seconds = Math.floor(totalSeconds)%60;

   daysEl.innerHTML = days;
   hoursEl.innerHTML = hours;
   minsEl.innerHTML = mins;
   secondsEl.innerHTML = seconds;
}

/*function time) {
    return time < 10 ? 05(time) : time;
}*/

//initial call 
countdown();

setInterval(countdown, 1000);