const scholarshipOptions = document.querySelectorAll(".scholarship-option");
const occScholarship = document.getElementById("scholarship-option--occ");
const universityScholarship = document.getElementById("scholarship-option--university");
const vikingScholarship = document.getElementById("scholarship-option--junior-senior");
const summerScholarship = document.getElementById("scholarship-option--summer");
const textbookReimbursement = document.getElementById("scholarship-option--textbook-reimbursement");

const scholarshipExplanation = document.querySelector("#scholarship-explanation");

const nextSteps = document.querySelectorAll(".next-steps");
const occNextSteps = document.getElementById("next-steps-occ-scholarship");
const universityNextSteps = document.getElementById("next-steps-university-scholarship");
const vikingNextSteps = document.getElementById("next-steps-junior-senior-scholarship");
const summerNextSteps = document.getElementById("next-steps-summer-scholarship");
const textbookReimbursementNextSteps = document.getElementById("next-steps-textbook-reimbursement");

const scholarshipInfo = document.querySelectorAll(".scholarship-info");
const occInfo = document.getElementById("info-occ-scholarship");
const universityInfo = document.getElementById("info-university-scholarship");
const vikingInfo = document.getElementById("info-junior-senior-scholarship");
const summerInfo = document.getElementById("info-summer-scholarship");
const textbookReimbursementInfo = document.getElementById("info-textbook-reimbursement");

const isResidentOption = document.getElementById("resident-radio-button-label--true");
const isNotResidentOption = document.getElementById("resident-radio-button-label--false");
const isResidentOptions = document.querySelectorAll(".resident-radio-button-label");

const handleScholarshipOptionsOnClick = (option) => {
  // Ignore clicks from disabled options
  if (option.classList.contains("disabled")) return;

  // Ignore clicks from the already selected option
  if (option.classList.contains("selected")) return;

  // Deselect all options
  scholarshipOptions.forEach((option2) => {
    option2.classList.remove("selected");
  });

  // Select the clicked option
  option.classList.add("selected");

  // Hide all of the Scholarship Specific Information
  scholarshipInfo.forEach((info) => {
    info.classList.remove("show");
  });

  // Give some time for the previous "Scholarship Speicific Information" to go away.
  setTimeout(() => {
    // Display the correct Scholarship Specific Information
    let infoToShow = null;

    switch (option.id) {
      case occScholarship.id:
        infoToShow = occInfo;
        break;

      case universityScholarship.id:
        infoToShow = universityInfo;
        break;

      case vikingScholarship.id:
        infoToShow = vikingInfo;
        break;

      case summerScholarship.id:
        infoToShow = summerInfo;
        break;

      case textbookReimbursement.id:
        infoToShow = textbookReimbursementInfo;
        break;

      default:
        break;
    }

    infoToShow.classList.add("show");
  }, 300);

  // Hide all of the Next Steps
  nextSteps.forEach((nextStep) => {
    nextStep.classList.add("d-none");
    const tabableElements = nextStep.querySelectorAll("a, button");
    tabableElements.forEach((element) => element.setAttribute("tabindex", -1));
  });

  // Give some time for the previous "Next Steps" to go away.
  setTimeout(() => {
    // Display the correct Next Steps
    let nextStepsToShow = null;

    switch (option.id) {
      case occScholarship.id:
        nextStepsToShow = occNextSteps;
        break;

      case universityScholarship.id:
        nextStepsToShow = universityNextSteps;
        break;

      case vikingScholarship.id:
        nextStepsToShow = vikingNextSteps;
        break;

      case summerScholarship.id:
        nextStepsToShow = summerNextSteps;
        break;

      case textbookReimbursement.id:
        nextStepsToShow = textbookReimbursementNextSteps;
        break;

      default:
        break;
    }

    nextStepsToShow.classList.remove("d-none");
    const tabableElements = nextStepsToShow.querySelectorAll("a, button");
    tabableElements.forEach((element) => element.setAttribute("tabindex", 0));
  }, 300);
};

const handleIsResidentOnClick = () => {
  isResidentOption.classList.add("checked");
  isNotResidentOption.classList.remove("checked");

  // The user is a resident. Enable all scholarship options besides the Viking scholarship. Select the first option.
  scholarshipOptions.forEach((option, index) => {
    if (option === vikingScholarship) {
      option.classList.add("disabled");
      option.classList.remove("selected");
      option.setAttribute("tabindex", -1);
      option.setAttribute("aria-disabled", true);
    } else {
      option.classList.remove("disabled");
      option.classList.remove("selected");
      option.setAttribute("tabindex", 0);
    }

    if (index === 0) {
      handleScholarshipOptionsOnClick(option);
    }
  });

  scholarshipExplanation.textContent = "Hazel Park residents have access to our Oakland Community College Scholarship, University Scholarship, Summer Scholarship, textbook/materials reimbursement, and all of our services.";
};

const handleIsNotResidentOnClick = () => {
  isResidentOption.classList.remove("checked");
  isNotResidentOption.classList.add("checked");

  // The user is not a resident. Disable the OCC and University Scholarship options. Select the Junior/Senior scholarship.
  scholarshipOptions.forEach((option) => {
    if (option === occScholarship || option === universityScholarship) {
      option.classList.add("disabled");
      option.classList.remove("selected");
      option.setAttribute("tabindex", -1);
      option.setAttribute("aria-disabled", true);
    } else if (option === vikingScholarship) {
      option.classList.remove("disabled");
      option.classList.remove("selected");
      option.setAttribute("tabindex", 0);
      handleScholarshipOptionsOnClick(option);
    }
  });

  scholarshipExplanation.textContent = "Non-residents have access to our Viking Scholarship, Summer Scholarship, textbook/materials reimbursement, and all of our services.";
};

isResidentOption.addEventListener("click", handleIsResidentOnClick);
isResidentOption.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    handleIsResidentOnClick();
  }
});

isNotResidentOption.addEventListener("click", handleIsNotResidentOnClick);
isNotResidentOption.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    handleIsNotResidentOnClick();
  }
});

scholarshipOptions.forEach((option) => {
  option.addEventListener("click", () => handleScholarshipOptionsOnClick(option));
  option.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleScholarshipOptionsOnClick(option);
    }
  });
});
