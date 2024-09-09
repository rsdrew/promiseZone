const gradeRangeFill = document.getElementById("grade-range-fill");
const scholarshipPercentage = document.getElementById("scholarship-percentage");
const scholarshipEstimatedValue = document.getElementById("scholarship-estimated-value");

const gradeRadioButtonWrappers = document.querySelectorAll(".grade-radio-button-wrapper");

let totalScholarshipAmount = 1500;
let percentageSelected = 100;

// Update the scholarship estimated value when a different scholarship option is selected.
scholarshipOptions.forEach(option => {
  option.addEventListener("click", () => {
    // Get the total scholarship amount
    const selectedScholarship = document.querySelector(".scholarship-option.selected");

    if (selectedScholarship.id === juniorSeniorScholarship.id) {
      totalScholarshipAmount = 500;
    }
    else if (selectedScholarship.id === occScholarship.id ||
             selectedScholarship.id === universityScholarship.id
    ) {
      totalScholarshipAmount = 1500;
    }

    calculateScholarshipEstimatedValue();
  });
})


// Calculate the height for each grade radio option.
gradeRadioButtonWrappers.forEach(wrapper => {
  const percentage = wrapper.getAttribute('data-percentage');
  wrapper.style.bottom = `calc(${percentage}% - ${wrapper.clientHeight}px)`;
});

// Set the correct distance for the "Grade"
document.querySelectorAll('.grade-radio-button-grade').forEach(el => {
  el.style.left = `calc(-1.2rem - ${el.clientWidth}px)`;
});

// Set the correct distance for the "Percentage"
document.querySelectorAll('.grade-radio-button-percentage').forEach(el => {
  el.style.right = `calc(-1rem - ${el.clientWidth}px)`;
});

function calculateScholarshipEstimatedValue() {
  scholarshipEstimatedValue.innerText = `$${(totalScholarshipAmount * percentageSelected / 100).toLocaleString()}!`;
}

const handleGradeRadioButtonWrapperOnClick = (wrapper) => {
  // Deselect all checkmarks
  gradeRadioButtonWrappers.forEach(wrapper2 => {
    const checkmark = wrapper2.querySelector(".grade-radio-button-checkmark");
    checkmark.classList.remove("checked");
  });

  // Select clicked checkmark
  const checkmark = wrapper.querySelector(".grade-radio-button-checkmark");
  checkmark.classList.add("checked");

  // Change the level of the red bar.
  percentageSelected = wrapper.getAttribute('data-percentage');
  gradeRangeFill.style.height = `${percentageSelected}%`;

  // Update the text below the grade selector,
  // giving the percentage of the scholarship the student receives, and the estimated value.
  scholarshipPercentage.innerText = `${percentageSelected}%`;
  calculateScholarshipEstimatedValue();
};

gradeRadioButtonWrappers.forEach(wrapper => {
  wrapper.addEventListener("click", () => handleGradeRadioButtonWrapperOnClick(wrapper));
  wrapper.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleGradeRadioButtonWrapperOnClick(wrapper);
    }
  });
});