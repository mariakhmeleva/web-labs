function updateClock() {
    const currentTime = new Date();
    const seconds = currentTime.getSeconds();
    const secondsAngle = seconds * 6;

    const clockHand = document.getElementById('clock-hand');
    clockHand.style.transform = `translate(-50%, -50%) rotate(${secondsAngle}deg)`;

    const timeDisplay = document.getElementById('current-time');
    timeDisplay.textContent = currentTime.toLocaleTimeString();
}

document.addEventListener('DOMContentLoaded', () => {
    updateClock();
    setInterval(updateClock, 1000);
});