document.addEventListener("DOMContentLoaded", function () {
  const galleryImages = document.querySelectorAll(".gallery-item img");
  galleryImages.forEach((img) => {
    img.onclick = function () {
      showModal(this.src);
    };
  });

  const modal = document.getElementById("imageModal");
  modal.onclick = function (e) {
    if (e.target === modal) {
      closeModal();
    }
  };

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });
});

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function showModal(src) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = src;
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

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
