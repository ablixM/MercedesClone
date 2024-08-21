let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sectionOne",
    start: "0 bottom",
    end: "10% top",
    scrub: true,
    // markers: true,
  },
});

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

if (window.innerWidth < 1368) {
  tl.to(".sectionOne", {
    y: -200,
    duration: 1,
  });
}
if (window.innerWidth > 1368) {
  tl.to(".sectionOne", {
    y: -500,
    duration: 1,
  });
}
