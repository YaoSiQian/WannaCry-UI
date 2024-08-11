const { invoke } = window.__TAURI__.tauri;

let greetInputEl;
let greetMsgEl;

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  document.querySelector("#greet-form").addEventListener("submit", (e) => {
    e.preventDefault();
    greet();
  });
});

// Clock of the Sections
const date_timer1 = new Date("2024/8/10 19:30:00");
const date_timer2 = new Date("2025/1/14 00:00:00");


function getCurrentDateTime() {
  var currentDate = new Date();

  var date = currentDate.toLocaleDateString();
  var time = currentDate.toLocaleTimeString();

  return date + ' ' + time;
}

document.getElementById('datetime').innerHTML = date_timer1.toLocaleString('zh');
document.getElementById('datetime2').innerHTML = date_timer2.toLocaleString('zh');


// Create Timer 
function startTimerForDisplay1(durationInSeconds) {
  var timerDisplay = document.getElementById('timer');
  var background = document.getElementById('background');

  var timer = durationInSeconds;
  var days, hours, minutes, seconds;

  var countdown = setInterval(function () {
      days = parseInt(timer / (3600 * 24), 10);
      hours = parseInt((timer % (3600 * 24)) / 3600, 10);
      minutes = parseInt((timer % 3600) / 60, 10);
      seconds = parseInt(timer % 60, 10);

      days = days < 10 ? "0" + days : days;
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      timerDisplay.innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;

      if (--timer < 0) {
          clearInterval(countdown);
          timerDisplay.innerHTML = "00:00:00:00";
          background.style.opacity = 1;
      }
  }, 1000);
}

function startTimerForDisplay2(durationInSeconds) {
  var timerDisplay2 = document.getElementById('timer2');
  var background2 = document.getElementById('background2');

  var timer = durationInSeconds;
  var days, hours, minutes, seconds;

  var countdown = setInterval(function () {
      days = parseInt(timer / (3600 * 24), 10);
      hours = parseInt((timer % (3600 * 24)) / 3600, 10);
      minutes = parseInt((timer % 3600) / 60, 10);
      seconds = parseInt(timer % 60, 10);

      days = days < 10 ? "0" + days : days;
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      timerDisplay2.innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;

      if (--timer < 0) {
          clearInterval(countdown);
          timerDisplay2.innerHTML = "00:00:00:00";
          background2.style.opacity = 1;
      }
  }, 1000);
}
function startTimerForDisplay(targetDate, displayElementID) {
  const timerDisplay = document.getElementById(displayElementID);
  const now = new Date().getTime();
  const gap = targetDate - now;

  if (gap <= 0) {
    timerDisplay.innerHTML = "00:00:00:00";
    return;
  }

  const timer = gap / 1000;
  const days = Math.floor(timer / (3600 * 24));
  const hours = Math.floor((timer % (3600 * 24)) / 3600);
  const minutes = Math.floor((timer % 3600) / 60);
  const seconds = Math.floor(timer % 60);

  const formattedTime = `${padZero(days)}:${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;

  timerDisplay.innerHTML = formattedTime;

  setTimeout(() => {
    startTimerForDisplay(targetDate, displayElementID);
  }, 1000);
}

function padZero(num) {
  return num.toString().padStart(2, '0');
}


startTimerForDisplay(date_timer1, 'timer');
startTimerForDisplay(date_timer2, 'timer2');
