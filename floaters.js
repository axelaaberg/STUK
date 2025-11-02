function spawnFloatingImage() {
    const img = document.createElement("img");
    img.src = "images/logo-corto-grey.png"; 
    img.className = "floating-image";

    // Random direction
    const angle = Math.random() * 2 * Math.PI;
    const distance = 900; // how far it drifts
    const x = Math.cos(angle) * distance + "px";
    const y = Math.sin(angle) * distance + "px";
    img.style.setProperty("--x", x);
    img.style.setProperty("--y", y);

    document.body.appendChild(img);

    // remove after animation
    img.addEventListener("animationend", () => img.remove());
  }

setInterval(spawnFloatingImage, 2000); // spawn every 2 seconds