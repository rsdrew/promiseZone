const gradeRangeFill = document.getElementById("grade-range-fill");
const scholarshipPercentage = document.getElementById("scholarship-percentage");
const scholarshipEstimatedValue = document.getElementById("scholarship-estimated-value");

document.querySelectorAll('.grade-radio-button-checkmark').forEach(input => {
  const percentage = input.getAttribute('data-percentage');
  input.parentElement.style.bottom = `calc(${percentage}% - ${input.clientHeight}px)`;
});

document.querySelectorAll('.grade-radio-button-checkmark').forEach(input => {
  input.addEventListener('click', () => {
    // Check the real input when the visual radio option is selected.
    input.previousElementSibling.checked = true;

    const percentage = input.getAttribute('data-percentage');

    // Change the level of the red bar.
    gradeRangeFill.style.height = `${percentage}%`;

    // Update the text below the grade selector,
    // giving the percentage of the scholarship the student receives, and the estimated value.
    scholarshipPercentage.innerText = `${percentage}%`;
    scholarshipEstimatedValue.innerText = `$${(1500 * percentage / 100).toLocaleString()}!`;
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

