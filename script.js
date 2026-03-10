const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

sections.forEach((section) => {
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