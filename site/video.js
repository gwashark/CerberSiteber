document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("introVideo");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const timeSlider = document.getElementById("timeSlider");
    const timeDisplay = document.getElementById("timeDisplay");
    const playIcon = playPauseBtn.querySelector(".play-icon");
    const pauseIcon = playPauseBtn.querySelector(".pause-icon");
  
    video.addEventListener("loadedmetadata", function () {
      timeSlider.max = video.duration;
      updateTimeDisplay();
    });
  
    playPauseBtn.addEventListener("click", function () {
      if (video.paused) {
        video.play();
        playIcon.style.display = "none";
        pauseIcon.style.display = "block";
      } else {
        video.pause();
        playIcon.style.display = "block";
        pauseIcon.style.display = "none";
      }
    });
  
    video.addEventListener("timeupdate", function () {
      timeSlider.value = video.currentTime;
      updateTimeDisplay();
    });
  
    timeSlider.addEventListener("input", function () {
      video.currentTime = timeSlider.value;
      updateTimeDisplay();
    });
  
    function updateTimeDisplay() {
      const current = formatTime(video.currentTime);
      const duration = formatTime(video.duration);
      timeDisplay.textContent = `${current} / ${duration}`;
    }
  
    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      seconds = Math.floor(seconds % 60);
      return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }
  
    video.addEventListener("ended", function () {
      playIcon.style.display = "block";
      pauseIcon.style.display = "none";
    });
  });