const timeEl = document.querySelector("[data-testid='profile-time']");

function updateTime() {
    const now = new Date();

    const formatted = now.toLocaleString("en-NG", {
        dateStyle: "medium",
        timeStyle: "short"
    });

    timeEl.textContent = ` ${formatted}`;
}

updateTime();
setInterval(updateTime, 1000);