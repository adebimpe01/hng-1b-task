const timeEl = document.getElementById("time");

function updateTime() {
    const now = new Date();

    const epoch = Date.now(); 
    const localTime = now.toLocaleTimeString();

    timeEl.textContent = `Current epoch time: ${epoch} | ${localTime}`;
}

updateTime();
setInterval(updateTime, 1000);