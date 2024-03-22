const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const tens = document.querySelector('.tens');
const startBtn = document.querySelector('.btn-start');
const stopBtn = document.querySelector('.btn-stop');
const resetBtn = document.querySelector('.btn-reset');

let interval; // Variable to hold the interval ID

let min = 0;
let sec = 0;
let msec = 0;

function startTimer() {
    interval = setInterval(updateTimer, 10);
    startBtn.disabled = true; // Disable start button while the timer is running
}

function stopTimer() {
    clearInterval(interval);
    startBtn.disabled = false; // Enable start button when the timer is stopped
}

function resetTimer() {
    clearInterval(interval);
    min = sec = msec = 0;
    updateDisplay();
    startBtn.disabled = false; // Enable start button after resetting the timer
}

function updateTimer() {
    msec++;
    if (msec === 100) {
        msec = 0;
        sec++;
        if (sec === 60) {
            sec = 0;
            min++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    minutes.textContent = pad(min);
    seconds.textContent = pad(sec);
    tens.textContent = pad(msec);
}

function pad(value) {
    return value < 10 ? '0' + value : value; // Add leading zero if value is less than 10
}

// Event listeners
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
