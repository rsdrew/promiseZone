const faqs = document.querySelectorAll(".faq");

const handleFAQOnClick = (faq) => {
  const answer = faq.querySelector(".faq__answer");

  if (faq.classList.contains("faq--open")) {
    faq.classList.remove("faq--open");
    answer.classList.remove("open");
    answer.setAttribute("aria-hidden", true);
  }
  else {
    faq.classList.add("faq--open");
    answer.classList.add("open");
    answer.setAttribute("aria-hidden", false);
  }
};

faqs.forEach((faq) => {
  faq.addEventListener("click", () => handleFAQOnClick(faq));
  faq.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleFAQOnClick(faq);
    }
  });
});