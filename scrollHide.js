setInterval(() => {
  if (window.innerWidth < 1368) {
    let lastScrollTop = 0;
    const navbar = document.querySelector(".navElementContainer");
    const links = document.querySelector(".linkDiv");

    window.addEventListener("scroll", function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scroll down - hide navbar
        navbar.classList.add("hideNavElementContainer");
        links.classList.add("hideLinkDiv");
      } else {
        // Scroll up - show navbar
        navbar.classList.remove("hideNavElementContainer");
        links.classList.remove("hideLinkDiv");
      }
      lastScrollTop = scrollTop;
    });
  }
}, 1000);

setInterval(() => {
  const divElement = document.querySelector(".navContainer");
  let lastScrollTop = 0;
  const navbar = document.querySelector(".navElementContainer");
  const links = document.querySelector(".linkDiv");
  const videoElement = document.querySelector(".introVideoDiv");

  if (window.innerWidth > 1368) {
    divElement.style.transition =
      "height 0.5s cubic-bezier(0.65, 0.05, 0.36, 1)";

    window.addEventListener("scroll", function () {
      const divElement = document.querySelector(".navContainer");
      const links2 = document.querySelector(".linkDiv2");

      if (window.innerWidth > 1368) {
        if (window.scrollY === 0) {
          videoElement.style.transform = `scale(1)`;
          divElement.style.height = "300px";
          links2.classList.remove("hideLinkDiv2");
        } else {
          videoElement.style.transform = "scale(0.3)";
          divElement.style.height = "80px";
          links2.classList.add("hideLinkDiv2");
        }
      } else {
        divElement.style.height = "80px";
        links2.classList.add("hideLinkDiv2");
      }
    });

    window.addEventListener("scroll", function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scroll down - hide navbar
        navbar.classList.add("hideNavElementContainer");
        links.classList.add("hideLinkDiv");
      } else {
        // Scroll up - show navbar
        navbar.classList.remove("hideNavElementContainer");
        links.classList.remove("hideLinkDiv");
      }
      lastScrollTop = scrollTop;
    });
  }
  if (window.innerWidth < 578) {
    divElement.style.transition =
      "height 0.5s cubic-bezier(0.65, 0.05, 0.36, 1)";
    window.addEventListener("scroll", function () {
      const divElement = document.querySelector(".navContainer");

      if (window.innerWidth < 578) {
        if (window.scrollY === 0) {
          videoElement.style.transform = `scale(1)`;
          divElement.style.height = "300px";
        } else {
          videoElement.style.transform = "scale(0.3)";
          divElement.style.height = "80px";
        }
      }
    });
  }
}, 1000);
// const introVideoDiv = document.querySelector(".introVideoDiv");
// window.addEventListener("scroll", function () {
//   const videoElement = document.querySelector(".introVideoDiv video");
//   const scrollTop = window.scrollY;

//   if (scrollTop > 0) {
//     videoElement.style.transform = `scale(${scaleValue})`;
//   } else {
//     videoElement.style.transform = "scale(1)";
//   }
// });

// setTimeout(() => {
//   introVideoDiv.style.display = "none";
// }, 3500);
