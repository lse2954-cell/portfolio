/* SECTION SCROLL ANIMATION */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => observer.observe(section));


/* HEADER SCROLL EFFECT */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* MODAL */

function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}


/* YOUTUBE HOVER PLAYER */

const players = document.querySelectorAll(".youtube-player");

players.forEach(player => {

    const id = player.dataset.id;

    if (!id) return;

    const thumbnail = `
    <img src="https://img.youtube.com/vi/${id}/hqdefault.jpg">
    <div class="play-icon">▶</div>
    `;

    player.innerHTML = thumbnail;

    player.addEventListener("mouseenter", () => {

        player.innerHTML = `
        <iframe
        src="https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0"
        allow="autoplay"
        allowfullscreen>
        </iframe>
        `;

    });

    player.addEventListener("mouseleave", () => {

        player.innerHTML = thumbnail;

    });

});

function openWeek(id) {

    const contents = document.querySelectorAll(".week-content");

    contents.forEach(content => {
        content.style.display = "none";
    });

    document.getElementById(id).style.display = "block";

}

const weekCards = document.querySelectorAll(".week-card");

weekCards.forEach(card => {

    card.addEventListener("click", () => {

        const id = card.dataset.week;

        const details = document.querySelectorAll(".week-detail");

        details.forEach(detail => {
            detail.style.display = "none";
        });

        document.getElementById(id).style.display = "block";

    });

});

const cards = document.querySelectorAll(".week-card");
const weeks = document.querySelectorAll(".week-detail");

cards.forEach(card => {

    card.addEventListener("click", () => {

        const target = card.dataset.week;

        weeks.forEach(week => {
            week.style.display = "none";
        });

        document.getElementById(target).style.display = "block";

    });

});