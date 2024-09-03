const scholarshipOptions = document.querySelectorAll(".scholarship-option");
const occScholarship = document.getElementById("scholarship-option--occ");
const universityScholarship = document.getElementById("scholarship-option--university");
const juniorSeniorScholarship = document.getElementById("scholarship-option--junior-senior");
const summerScholarship = document.getElementById("scholarship-option--summer");

const nonResidentExplanation = document.querySelector("#non-resident-explanation");

const nextSteps = document.querySelectorAll(".next-steps");
const occNextSteps = document.getElementById("next-steps-occ-scholarship");
const universityNextSteps = document.getElementById("next-steps-university-scholarship");
const juniorSeniorNextSteps = document.getElementById("next-steps-junior-senior-scholarship");
const summerNextSteps = document.getElementById("next-steps-summer-scholarship");

const scholarshipInfo = document.querySelectorAll(".scholarship-info");
const occInfo = document.getElementById("info-occ-scholarship");
const universityInfo = document.getElementById("info-university-scholarship");
const juniorSeniorInfo = document.getElementById("info-junior-senior-scholarship");
const summerInfo = document.getElementById("info-summer-scholarship");

const scholarshipEligibilityCalculator = document.getElementById("scholarship-eligibility-calculator");
const gradeRangeHelperText = document.getElementById("grade-range-helper-text");

const isResidentOption = document.getElementById("resident-radio-button-label--true");
const isNotResidentOption = document.getElementById("resident-radio-button-label--false");
const isResidentOptions = document.querySelectorAll(".resident-radio-button-label");

const handleScholarshipOptionsOnClick = () => {


  scholarshipOptions.forEach(option => {
    option.addEventListener('click', () => {

      // Ignore clicks from disabled options
      if (option.classList.contains("disabled")) return;
  
      // Deselect all options
      scholarshipOptions.forEach(option2 => {
        option2.classList.remove("selected");
      })
  
      // Select the clicked option
      option.classList.add("selected");

      // Hide all of the Scholarship Specific Information
      scholarshipInfo.forEach(info => {
        info.classList.remove("show");
      })

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
        
          case juniorSeniorScholarship.id:
            infoToShow = juniorSeniorInfo;
            break;

          case summerScholarship.id:
            infoToShow = summerInfo;
            break;

          default:
            break;
        }

        infoToShow.classList.add("show");
        }, 300);


      // Hide all of the Next Steps
      nextSteps.forEach(nextStep => {
        nextStep.classList.remove("show");
      })

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
        
          case juniorSeniorScholarship.id:
            nextStepsToShow = juniorSeniorNextSteps;
            break;

          case summerScholarship.id:
            nextStepsToShow = summerNextSteps;
            break;

          default:
            break;
        }

        nextStepsToShow.classList.add("show");
        }, 300);


      // Change the OCC specific helper text when the Junior/Senior scholarship option is selected.
      if (option.id === juniorSeniorScholarship.id) {
        gradeRangeHelperText.innerText = "100% of the scholarship is equivalent to $500.";
      }
      else {
        gradeRangeHelperText.innerText = "100% of the scholarship is equivalent to the cost of tuition at Oakland Community College for one semester. This is an estimated value of $1,500.";
      }

      // Hide the entire scholarship eligibility calculator when the Summer Scholarship option is selected.
      if (option.id === summerScholarship.id) {
        scholarshipEligibilityCalculator.classList.add("d-none");
      }
      else {
        scholarshipEligibilityCalculator.classList.remove("d-none");
      }
    });
  })
};

const enableAllScholarshipOptions = () => {
  scholarshipOptions.forEach(option => {
    option.classList.remove("disabled");
    option.classList.remove("selected");
  });
};

const enableOnlySummerScholarshipOption = () => {
  scholarshipOptions.forEach(option => {
    if (option.id !== "scholarship-option--summer") {
      option.classList.add("disabled");
    }
  })
};

const handleResidentOnClick = (event) => {
  // Deselect all options
  isResidentOptions.forEach(option => option.classList.remove("checked"));
  // Select the clicked option
  event.target.classList.add("checked");


  // The user is a resident. Enable all options. Select the first option.
  if (event.target === isResidentOption) {
    scholarshipOptions.forEach((option, index) => {
      option.classList.remove("disabled");
      option.classList.remove("selected");

      if (index === 0) {
        option.classList.add("selected");
        option.click();
      };
    });

    nonResidentExplanation.classList.remove("show");
  }

  // The user is not a resident. Disable all options besides Summer Scholarship. Select the summer scholarship.
  else {
    scholarshipOptions.forEach(option => {
      if (option.id === "scholarship-option--summer") {
        option.classList.add("selected");
        option.click();
      }
      else {
        option.classList.add("disabled");
        option.classList.remove("selected");
      }
    });

    nonResidentExplanation.classList.add("show");
  }
};

handleScholarshipOptionsOnClick();

isResidentOption.addEventListener("click", enableAllScholarshipOptions);
isNotResidentOption.addEventListener("click", enableOnlySummerScholarshipOption);
isResidentOptions.forEach(option => {
  option.addEventListener("click", (event) => handleResidentOnClick(event));
  option.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleResidentOnClick(event);
    }
  });
});