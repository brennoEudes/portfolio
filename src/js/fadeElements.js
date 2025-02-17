document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".visible");
  elements.forEach((e) => {
    const rect = e.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      e.classList.add("fade-in-visible");
    }
  });
});
