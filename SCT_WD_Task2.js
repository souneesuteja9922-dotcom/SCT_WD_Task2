let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;
let isRunning = false;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  document.getElementById("display").innerText = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

function start() {
  if (!isRunning) {
    timer = setInterval(stopwatch, 1000);
    isRunning = true;
  }
}

function pause() {
  clearInterval(timer);
  isRunning = false;
}

function reset() {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  isRunning = false;
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  if (isRunning) {
    let lapTime = document.getElementById("display").innerText;
    let li = document.createElement("li");
    li.innerText = lapTime;
    document.getElementById("laps").appendChild(li);
  }
}
