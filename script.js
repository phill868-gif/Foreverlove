document.addEventListener("DOMContentLoaded", function () {

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const message = document.getElementById("message");

  // 💖 YES → redirect ONLY (no music here)
  yesBtn.addEventListener("click", () => {
    document.body.style.opacity = "0";

    setTimeout(() => {
      window.location.href = "yes.html";
    }, 700);
  });

  // ❌ NO button message
  noBtn.addEventListener("click", () => {
    message.innerHTML = "You know I will always make you smile 💖";
  });

  // ❌ NO button moves (mobile-safe)
  noBtn.addEventListener("mouseover", () => {

    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

  });

});
