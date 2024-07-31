const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    const answer = faq.querySelector(".faq__answer");
    answer.classList.toggle("open");
    faq.classList.toggle("faq--open");
  })

});