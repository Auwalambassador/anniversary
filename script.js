/* =========================
   FRIENDSHIP ANNIVERSARY DATE
========================= */

/*
   CHANGE THIS DATE TO THE DAY
   YOUR FRIENDSHIP STARTED.

   Example:
   August 20, 2024

   Format:
   YYYY, MM-1, DD

   January = 0
   February = 1
   March = 2
   ...
   December = 11
*/

const friendshipDate = new Date(2024, 7, 20);


/* =========================
   LIVE COUNTER
========================= */

function updateCounter() {

    const now = new Date();

    let years = now.getFullYear() - friendshipDate.getFullYear();

    let months = now.getMonth() - friendshipDate.getMonth();

    let days = now.getDate() - friendshipDate.getDate();

    let hours = now.getHours() - friendshipDate.getHours();


    if (hours < 0) {
        hours += 24;
        days--;
    }

    if (days < 0) {
        months--;

        const previousMonth = new Date(
            now.getFullYear(),
            now.getMonth(),
            0
        );

        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }


    document.getElementById("years").textContent = years;

    document.getElementById("months").textContent = months;

    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent = hours;
}


updateCounter();

setInterval(updateCounter, 1000);


/* =========================
   MESSAGE MODAL
========================= */

function openMessage() {

    document
        .getElementById("messageModal")
        .classList.add("active");
}


function closeMessage() {

    document
        .getElementById("messageModal")
        .classList.remove("active");
}


/* =========================
   SURPRISE MODAL
========================= */

function openSurprise() {

    document
        .getElementById("surpriseModal")
        .classList.add("active");

    createHearts();
}


function closeSurprise() {

    document
        .getElementById("surpriseModal")
        .classList.remove("active");
}


/* =========================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================= */

window.addEventListener("click", function(event) {

    const messageModal =
        document.getElementById("messageModal");

    const surpriseModal =
        document.getElementById("surpriseModal");


    if (event.target === messageModal) {
        closeMessage();
    }

    if (event.target === surpriseModal) {
        closeSurprise();
    }

});


/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (Math.random() * 20 + 12) + "px";

    heart.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

    document
        .querySelector(".hearts")
        .appendChild(heart);


    setTimeout(() => {
        heart.remove();
    }, 10000);
}


function createHearts() {

    for (let i = 0; i < 20; i++) {

        setTimeout(() => {
            createHeart();
        }, i * 100);
    }
}


/* Create hearts automatically */

setInterval(createHeart, 1500);


/* =========================
   MUSIC
========================= */

let musicPlaying = false;

function toggleMusic() {

    const music =
        document.getElementById("backgroundMusic");

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

        document.querySelector(".music-btn").textContent =
            "🎵 Music";

    } else {

        music.play()
            .then(() => {

                musicPlaying = true;

                document.querySelector(".music-btn").textContent =
                    "⏸️ Pause";

            })
            .catch(() => {

                alert(
                    "Add a file named music.mp3 to the website folder first."
                );

            });
    }
}


/* =========================
   ESCAPE KEY
========================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeMessage();

        closeSurprise();

    }

});
