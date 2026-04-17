function updateTime() {
    const timeElement = document.getElementById("time");

    const now = new Date();

    const utcTime = now.toISOString().split(".")[0] + "Z";

    timeElement.textContent = `Current UTC Time: ${utcTime}`;
}

updateTime();
setInterval(updateTime, 1000);