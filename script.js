document.addEventListener("DOMContentLoaded", function () {

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const message = document.getElementById("message");

  // 🎵 Create music dynamically
  let music = new Audio("music.mp3");
  music.loop = true;
  music.volume = 0.4;

  // YES CLICK → START MUSIC + REDIRECT
  yesBtn.addEventListener("click", () => {

    music.play().then(() => {

      // Save state for next page
      sessionStorage.setItem("musicPlaying", "true");

      // small delay to lock playback
      setTimeout(() => {
        window.location.href = "yes.html";
      }, 300);

    }).catch(() => {
      // fallback redirect
      window.location.href = "yes.html";
    });

  });

  // NO CLICK
  noBtn.addEventListener("click", () => {
    message.innerHTML = "You know I will always make you smile 💖";
  });

  // NO BUTTON MOVES
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });

});
