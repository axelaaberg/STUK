function spawnFloatingImage() {
  const img = document.createElement("img");
  img.src = "images/logo-corto-grey.png";
  img.className = "floating-image";

  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  const diag = Math.hypot(vw, vh);
  const DIST_FACTOR = 0.6;
  const distance = diag * DIST_FACTOR;
 
  // Random speed
  const SPEED_PX_PER_S = 50 + Math.random() * 20;
  const MIN_DURATION_S = 6;   
  const MAX_DURATION_S = 30;  
  let duration = distance / SPEED_PX_PER_S;
  duration = Math.max(MIN_DURATION_S, Math.min(MAX_DURATION_S, duration));

  // Random direction
  const angle = Math.random() * 2 * Math.PI;
  const x = Math.cos(angle) * distance + "px";
  const y = Math.sin(angle) * distance + "px";
  img.style.setProperty("--x", x);
  img.style.setProperty("--y", y);

  // Set animation duration so speed remains constant across viewports
  img.style.animationDuration = duration + "s";

  document.body.appendChild(img);

  // Remove after animation
  img.addEventListener("animationend", () => img.remove());
}

setInterval(spawnFloatingImage, 2000); // spawn every 2 seconds