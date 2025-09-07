
const toggleBtn = document.getElementById("toggleMusic");
const player = document.getElementById("ytplayer");
let isPlaying = true;

toggleBtn.addEventListener("click", () => {
    if (isPlaying) {
        player.src = "";
        toggleBtn.textContent = "🔇 Bật nhạc";
    } else {
        player.src = "https://www.youtube.com/embed/jXwR4_58uy0?autoplay=1&loop=1&playlist=jXwR4_58uy0";
        toggleBtn.textContent = "🔊 Tắt nhạc";
    }
    isPlaying = !isPlaying;
});
