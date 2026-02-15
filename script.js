document.addEventListener("DOMContentLoaded", function () {

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const message = document.getElementById("message");

  // YES → Smooth fade then redirect
  yesBtn.addEventListener("click", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 1s ease";
    setTimeout(() => {
      window.location.href = "yes.html";
    }, 1000);
  });

  // NO click
  noBtn.addEventListener("click", () => {
    message.innerHTML =
      "No is not an option 😌 It's me and you together forever 💖";
  });

  // NO runs away safely (mobile + desktop)
  noBtn.addEventListener("mouseover", () => {
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - btnWidth - 10;
    const maxY = window.innerHeight - btnHeight - 10;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });

});
