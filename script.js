* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}

body {
    background: #ffffff;
    color: #111;
    scroll-behavior: smooth;
}

/* 상단 네비 */

header {
    position: fixed;
    width: 100%;
    top: 0;
    padding: 20px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
}

nav a {
    margin-left: 30px;
    text-decoration: none;
    color: #111;
    font-size: 14px;
    transition: opacity 0.3s ease;
}

nav a:hover {
    opacity: 0.5;
}

/* hero */

.hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10%;
}

.hero h1 {
    font-size: 64px;
    font-weight: 600;
    animation: fadeIn 1.5s ease forwards;
    opacity: 0;
}

.hero p {
    margin-top: 20px;
    font-size: 20px;
    color: #666;
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

/* section */

.section {
    height: 100vh;
    padding: 150px 10%;
}

.section h2 {
    font-size: 40px;
}

.white {
    background: #fff;
    color: #111;
}

.black {
    background: #000;
    color: #fff;
}

/* about */

.about-text {
    max-width: 700px;
    margin-top: 25px;
    font-size: 18px;
    line-height: 1.8;
}

/* works */

.works-grid {
    margin-top: 60px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
}

.work-item {
    overflow: hidden;
    border-radius: 12px;
}

.work-item img {
    width: 100%;
    display: block;
    transition: transform 0.5s ease;
}

.work-item:hover img {
    transform: scale(1.05);
}

/* video */

.video-grid {
    margin-top: 60px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
}

.video-item {
    overflow: hidden;
    border-radius: 12px;
}

.video-item video {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    transition: transform 0.4s ease;
}

.video-item:hover video {
    transform: scale(1.05);
}

.video-title {
    margin-top: 10px;
    font-size: 16px;
}

/* modal */

.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
}

.modal-box {
    background: white;
    width: 60%;
    margin: 80px auto;
    padding: 30px;
}

.modal-images img {
    width: 100%;
    max-height: 260px;
    object-fit: contain;
}

.main-images {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.ref-images {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    margin-top: 15px;
}

.modal-text {
    margin-top: 20px;
    line-height: 1.6;
    font-size: 15px;
}

.close {
    font-size: 32px;
    cursor: pointer;
    float: right;
}
