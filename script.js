function openLetter() {
  const letter = document.getElementById('letter');
  if (letter.style.display === 'block') {
    letter.style.display = 'none';
  } else {
    letter.style.display = 'block';
    createHearts(); // 🎀 hearts appear when opening
  }
}

function createHearts() {
  for (let i = 0; i < 10; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 24 + 20 + "px";
    heart.style.animation = "floatUp 3s linear";
    heart.style.bottom = "0";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }
}
