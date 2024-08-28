const scholarshipOptions = document.querySelectorAll(".scholarship-option");
const nonResidentExplanation = document.querySelector("#non-resident-explanation");

const handleScholarshipOptionsOnClick = () => {
  scholarshipOptions.forEach(option => {
    option.addEventListener('click', () => {

      if (option.classList.contains("disabled")) return;
  
      // Deselect all options
      scholarshipOptions.forEach(option2 => {
        option2.classList.remove("selected");
      })
  
      // Select the clicked option
      option.classList.add("selected");
  
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
          };
        });

        nonResidentExplanation.classList.remove("show");
      }

      else if (event.target.checked && event.target.value === "false") {
        scholarshipOptions.forEach(option => {
          if (option.id === "scholarship-option--summer") {
            option.classList.add("selected");
          }
          else {
            option.classList.add("disabled");
            option.classList.remove("selected");
          }
        });

        nonResidentExplanation.classList.add("show");
      }

      // The user is not a resident. Disable all options besides Summer Scholarship. Select the summer scholarship.
    })
  })

  isResidentOption.addEventListener("click", () => {
    scholarshipOptions.forEach((option, index) => {
      scholarshipOptions.classList
    });
  });
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