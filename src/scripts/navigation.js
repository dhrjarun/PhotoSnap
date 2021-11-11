const nav = document.getElementById("nav");
const navToggle = document.querySelector(".btn--nav-toggle");
const overlay = document.getElementById("modal-overlay");

navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");

  if (visibility == "false") {
    nav.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");

    nav.style.transition = "transform 300ms";
    setTimeout(() => {
      nav.style.transition = "none";
    }, 300);

    overlay.removeAttribute("hidden");
  } else {
    nav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");

    nav.style.transition = "transform 300ms";
    setTimeout(() => {
      nav.style.transition = "none";
    }, 300);

    overlay.setAttribute("hidden", true);
  }
});
