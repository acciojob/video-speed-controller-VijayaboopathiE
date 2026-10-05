const video = document.querySelector(".flex");

const playButton = document.querySelector(".toggle");

const progress = document.querySelector(".progress");

const progressFilled = document.querySelector(".progress__filled");

const volume = document.querySelector(".volume");

const playbackSpeed = document.querySelector(".playbackSpeed");

const skipButtons = document.querySelectorAll("[data-skip]");

const speedBar = document.querySelector(".speed-bar");


// Play / Pause
function togglePlay() {

    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }

}


// Update play button
function updateButton() {

    if (video.paused) {
        playButton.textContent = "►";
    } else {
        playButton.textContent = "❚❚";
    }

}


// Update progress bar
function updateProgress() {

    const percentage =
        (video.currentTime / video.duration) * 100;

    progressFilled.style.width = percentage + "%";

}


// Set volume
function handleVolume() {

    video.volume = this.value;

}


// Set playback speed
function handleSpeed() {

    video.playbackRate = this.value;

    const percentage =
        ((this.value - 0.5) / (2 - 0.5)) * 100;

    speedBar.style.width = percentage + "%";

    speedBar.textContent = this.value + "×";

}


// Skip video
function skip() {

    video.currentTime += Number(this.dataset.skip);

}


// Click on progress bar
function scrub(event) {

    const scrubTime =
        (event.offsetX / progress.offsetWidth) * video.duration;

    video.currentTime = scrubTime;

}


// Play / pause button
playButton.addEventListener("click", togglePlay);


// Update button when video state changes
video.addEventListener("play", updateButton);

video.addEventListener("pause", updateButton);


// Update progress while video plays
video.addEventListener("timeupdate", updateProgress);


// Volume
volume.addEventListener("input", handleVolume);


// Playback speed
playbackSpeed.addEventListener("input", handleSpeed);


// Skip buttons
skipButtons.forEach(function(button) {

    button.addEventListener("click", skip);

});


// Progress bar
progress.addEventListener("click", scrub);