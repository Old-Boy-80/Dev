document.addEventListener("DOMContentLoaded", () => {
  const customMouse = document.getElementById("custom-mouse");
  const book = document.querySelector(".book-container");

  document.addEventListener("mousemove", (e) => {
    gsap.to(customMouse, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.4,
      ease: "power1.out",
    });

    const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    gsap.to(book, {
      rotateY: -xAxis - 20,
      rotateX: yAxis + 10,
      duration: 0.5,
      ease: "power1.out",
    });
  

  });

  document
    .querySelectorAll("a, h1, span, button, li, p, .float")
    .forEach((el) => {
      el.addEventListener("mouseenter", (e) => {
        gsap.to(customMouse, {
          scale: 1.5,
          filter: "invert(100%)",
          mixBlendMode: "difference",
          duration: 0.3,
        });
      });

      el.addEventListener("mouseleave", (e) => {
        gsap.to(customMouse, {
          scale: 1,
          filter: "invert(0%)",
          mixBlendMode: "normal",
          duration: 0.3,
        });
      });
    });
});
