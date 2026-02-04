const ctaButton = document.querySelector(".cta");
const demoButton = document.querySelector(".primary");

const scrollToSection = (id) => {
  const section = document.querySelector(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

ctaButton?.addEventListener("click", () => scrollToSection("#demo"));

demoButton?.addEventListener("click", () => scrollToSection("#paketler"));
