document.addEventListener("DOMContentLoaded", () => {
  const targetElement = document.querySelector(".overlayBlackOne");
  const overlayBlack = document.querySelector(".overlayBlackOne");
  const startHeightBlack = 100; // Initial height in pixels (full screen)
  const endHeightBlack = 0; // Desired height in pixels
  const durationBlack = 0; // Total duration of the animation in milliseconds (2 seconds)
  const startTimeBlack = performance.now(); // Record the start time
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          function easeOutQuad(t) {
            return t * (2 - t);
          }

          function animateReveal(timestamp) {
            const elapsedBlack = timestamp - startTimeBlack;
            const progressBlack = Math.min(elapsedBlack / durationBlack, 1); // Ensure progress is between 0 and 1
            const easedProgressBlack = easeOutQuad(progressBlack);

            // Calculate the current height based on eased progress
            const currentHeight =
              startHeightBlack -
              (startHeightBlack - endHeightBlack) * easedProgressBlack;

            // Set the current height of the overlay
            overlayBlack.style.height = `${currentHeight}px`;

            if (progressBlack < 1) {
              requestAnimationFrame(animateReveal);
            }
          }

          // Start the animation
          setTimeout(() => {
            requestAnimationFrame(animateReveal);
          }, 500);

          const text = document.querySelector("#textPlusButton");
          text.style.opacity = 0;
          text.style.transform = "translateY(100%)";
          const textTitle = document.querySelector("#headerTitleOne");
          textTitle.style.opacity = 0;
          textTitle.style.transform = "translateY(100%)";
          setTimeout(() => {
            setTimeout(() => {
              text.style.transition =
                "transform 1s ease-in-out, opacity 1s ease-in-out";
              text.style.opacity = 1;
              text.style.transform = "translateY(0)";
            }, 500);
            setTimeout(() => {
              textTitle.style.transition =
                "transform 1s ease-in-out, opacity 1s ease-in-out";
              textTitle.style.opacity = 1;
              textTitle.style.transform = "translateY(0)";
            }, 200);
          }, 1000);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.8 }
  ); // 1.0 means the element is fully in view

  observer.observe(targetElement);
});
