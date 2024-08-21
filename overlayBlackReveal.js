const targetElement = document.querySelector(".sectonOne");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const overlayBlack = document.querySelector(".overlayBlackOne");
        const startHeightBlack = 100; // Initial height in pixels (full screen)
        const endHeightBlack = 0; // Desired height in pixels
        const durationBlack = 0; // Total duration of the animation in milliseconds (2 seconds)
        const startTimeBlack = performance.now(); // Record the start time

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
        }, 1500);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 1.0 }
); // 1.0 means the element is fully in view

observer.observe(targetElement);
