const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "all 1s ease";

    observer.observe(section);

});

const videos = document.querySelectorAll(".video-item video");

videos.forEach(video => {

    video.parentElement.addEventListener("mouseenter", () => {

        video.play();

    });

    video.parentElement.addEventListener("mouseleave", () => {

        video.pause();
        video.currentTime = 0;

    });

});

function openModal() {
    document.getElementById("workModal").style.display = "block";
}

function closeModal() {
    document.getElementById("workModal").style.display = "none";
}

function openModal2() {
    document.getElementById("workModal2").style.display = "block";
}

function closeModal2() {
    document.getElementById("workModal2").style.display = "none";
}

function openModal3() {
    document.getElementById("workModal3").style.display = "block";
}

function closeModal3() {
    document.getElementById("workModal3").style.display = "none";
}

const players = document.querySelectorAll(".youtube-player");

players.forEach(player => {

    const id = player.dataset.id;

    const thumbnail = `
<img src="https://img.youtube.com/vi/${id}/maxresdefault.jpg">
<div class="play-icon">▶</div>
`;

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
