ScrollReveal({
  distance: "30px",
  duration: 1500,
  delay: 300,
}).reveal(".linkDiv button", { delay: 100, origin: "bottom" });
ScrollReveal({
  distance: "30px",
  duration: 1500,
  delay: 300,
}).reveal(".linkDiv2 button", { delay: 100, origin: "bottom" });

ScrollReveal({
  distance: "30px",
  duration: 1500,
  delay: 300,
}).reveal(".navElementContainer div", { delay: 100, origin: "top" });

// const headerThe = document.querySelector("#headerThe");
// const headerTitle = document.querySelector("#headerTitle");

const text = document.querySelector("#headerThe");
text.style.opacity = 0;
text.style.transform = "translateY(100%)";
const textTitle = document.querySelector("#headerTitle");
textTitle.style.opacity = 0;
textTitle.style.transform = "translateY(100%)";
setTimeout(() => {
  setTimeout(() => {
    text.style.transition = "transform 1s ease-in-out, opacity 1s ease-in-out";
    text.style.opacity = 1;
    text.style.transform = "translateY(0)";
  }, 700);
  setTimeout(() => {
    textTitle.style.transition =
      "transform 1s ease-in-out, opacity 1s ease-in-out";
    textTitle.style.opacity = 1;
    textTitle.style.transform = "translateY(0)";
  }, 200);
}, 3000);
