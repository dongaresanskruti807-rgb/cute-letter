function openLetter() {
  const letter = document.getElementById("letter");

  // Show the letter with fade-in effect
  letter.style.display = "block";

  // Optional: make floating hearts when letter opens
  createHearts();
}

function createHearts() {
  for (let i = 0; i < 10; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 24 + 20 + "px";
    heart.style.animation = "floatUp 3s linear infinite";
    heart.style.bottom = "0";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }
}

