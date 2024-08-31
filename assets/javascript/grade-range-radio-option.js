const gradeRangeFill = document.getElementById("grade-range-fill");
const scholarshipPercentage = document.getElementById("scholarship-percentage");
const scholarshipEstimatedValue = document.getElementById("scholarship-estimated-value");

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

document.querySelectorAll('.grade-radio-button-checkmark').forEach(input => {
  const percentage = input.getAttribute('data-percentage');
  input.parentElement.style.bottom = `calc(${percentage}% - ${input.clientHeight}px)`;
});

document.querySelectorAll('.grade-radio-button-checkmark').forEach(input => {
  input.addEventListener('click', () => {
    // Check the real input when the visual radio option is selected.
    input.previousElementSibling.checked = true;

    percentageSelected = input.getAttribute('data-percentage');

    // Change the level of the red bar.
    gradeRangeFill.style.height = `${percentageSelected}%`;

    // Update the text below the grade selector,
    // giving the percentage of the scholarship the student receives, and the estimated value.
    scholarshipPercentage.innerText = `${percentageSelected}%`;

    calculateScholarshipEstimatedValue();
  });
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