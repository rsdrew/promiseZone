const eligibilitys = document.querySelectorAll(".eligibility");

const handleeligibilityOnClick = (eligibility) => {
  const answer = eligibility.querySelector(".eligibility__answer");

  if (eligibility.classList.contains("eligibility--open")) {
    eligibility.classList.remove("eligibility--open");
    answer.classList.remove("open");
    answer.setAttribute("aria-hidden", true);
  }
  else {
    eligibility.classList.add("eligibility--open");
    answer.classList.add("open");
    answer.setAttribute("aria-hidden", false);
  }
};

eligibilitys.forEach((eligibility) => {
  eligibility.addEventListener("click", () => handleeligibilityOnClick(eligibility));
  eligibility.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleeligibilityOnClick(eligibility);
    }
  });
});