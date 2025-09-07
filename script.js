
const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("music-toggle");

let isPlaying = false;

toggleBtn.addEventListener("click", () => {
    if (isPlaying) {
        music.pause();
        toggleBtn.textContent = "🔊 Bật nhạc";
    } else {
        music.play();
        toggleBtn.textContent = "🔇 Tắt nhạc";
    }
    isPlaying = !isPlaying;
});
