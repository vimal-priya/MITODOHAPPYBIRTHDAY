document.addEventListener("DOMContentLoaded", function () {
    const frames = document.querySelectorAll(".frames");
    const upButton = document.querySelector(".swipe-up");
    const downButton = document.querySelector(".swipe-down");
    const audio = document.getElementById("bg-music");

    let currentIndex = 0;

    function updateFrames() {
        frames.forEach((frame, index) => {
            frame.classList.toggle("active", index === currentIndex);
        });
    }

    function swipeUp() {
        if (currentIndex < frames.length - 1) {
            currentIndex++;
            updateFrames();
        }
    }

    function swipeDown() {
        if (currentIndex > 0) {
            currentIndex--;
            updateFrames();
        }
    }

    upButton.addEventListener("click", swipeUp);
    downButton.addEventListener("click", swipeDown);

    // Ensure the user clicks before playing audio
    window.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
        }
    });

    // Initialize the first frame
    updateFrames();
});
