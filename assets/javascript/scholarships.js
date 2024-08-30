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

    });
  })
};

const handleResidentOnClick = () => {
  let isResidentOption = document.querySelector("input[name='resident'][value='true']");
  let isNotResidentOption = document.querySelector("input[name='resident'][value='false']");

  let isResidentOptions = document.querySelectorAll("input[name='resident']");

  isResidentOptions.forEach(option => {
    option.addEventListener("change", (event) => {
      // The user is a resident. Enable all options. Select the first option.
      if (event.target.checked && event.target.value === "true") {
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
      else if (event.target.checked && event.target.value === "false") {
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
    })
  })

  isResidentOption.addEventListener("click", enableAllScholarshipOptions);
  isNotResidentOption.addEventListener("click", enableOnlySummerScholarshipOption);
}

const enableAllScholarshipOptions = () => {
  scholarshipOptions.forEach(option => {
    option.classList.remove("disabled");
    option.classList.remove("selected");
  });
}

const enableOnlySummerScholarshipOption = () => {
  scholarshipOptions.forEach(option => {
    if (option.id !== "scholarship-option--summer") {
      option.classList.add("disabled");
    }
  })
}

handleScholarshipOptionsOnClick();
handleResidentOnClick();