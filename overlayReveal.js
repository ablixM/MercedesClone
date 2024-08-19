document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".overlayBlack");
  const startHeight = 100; // Initial height in pixels (full screen)
  const endHeight = 0; // Desired height in pixels
  const duration = 0; // Total duration of the animation in milliseconds (2 seconds)
  const startTime = performance.now(); // Record the start time

  function easeOutQuad(t) {
    return t * (2 - t);
  }

  function animateReveal(timestamp) {
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1); // Ensure progress is between 0 and 1
    const easedProgress = easeOutQuad(progress);

    // Calculate the current height based on eased progress
    const currentHeight =
      startHeight - (startHeight - endHeight) * easedProgress;

    // Set the current height of the overlay
    overlay.style.height = `${currentHeight}px`;

    if (progress < 1) {
      requestAnimationFrame(animateReveal);
    }
  }

  // Start the animation
  setTimeout(() => {
    requestAnimationFrame(animateReveal);
  }, 1500);
});
