const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const ampm = document.getElementById("ampm")


const updateClock = () => {
    const now = new Date();

    let hours = now.getHours();
    let mins = now.getMinutes();
    let secs = now.getSeconds();

    hour.textContent = `${hours}`;
    min.textContent = `${mins}`;
    sec.textContent = `${secs}`;

}

document.addEventListener("DOMContentLoaded",()=> {
    setInterval(updateClock,1000);
})
