function showTime() {
    const currentTime = new Date().toLocaleTimeString();
    document.getElementById('current-time').textContent = currentTime;
}

document.addEventListener('DOMContentLoaded', () => {
    showTime();
    setInterval(showTime, 1000);
});