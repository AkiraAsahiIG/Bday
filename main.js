const heartBtn = document.getElementById("heartBtn");
const envelope = document.getElementById("envelope");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

const nextBtn = document.getElementById("nextBtn");
const blowBtn = document.getElementById("blowBtn");
const candles = document.getElementById("candles");
const wishText = document.getElementById("wishText");
const confetti = document.getElementById("confetti");
const bgMusic = document.getElementById("bgMusic");

heartBtn.addEventListener("click", () => {
  bgMusic.play();

  envelope.classList.add("open");

  setTimeout(() => {
    page1.classList.remove("active");
    page2.classList.add("active");

    setTimeout(() => {
      nextBtn.classList.add("show");
    }, 4000);

  }, 1200);
});

nextBtn.addEventListener("click", () => {
  page2.classList.remove("active");
  page3.classList.add("active");
});

blowBtn.addEventListener("click", () => {
  candles.classList.add("out");
  wishText.textContent = "🎉 Happy Birthday 🎉";

  confetti.innerHTML = "";

  const colors = ["#ff5cbf", "#ffd166", "#7ad7ff", "#b58cff", "#7cffc3", "#ff8a5b"];

  for (let i = 0; i < 90; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";

    piece.style.left = Math.random() * 100 + "%";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = (Math.random() * 1.8) + "s";
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    piece.style.width = (6 + Math.random() * 8) + "px";
    piece.style.height = (8 + Math.random() * 12) + "px";

    confetti.appendChild(piece);
  }
});