const gradeRangeFill = document.getElementById("grade-range-fill");

document.querySelectorAll('.grade-radio-button-checkmark').forEach(input => {
  const percentage = input.getAttribute('data-percentage');
  input.parentElement.style.bottom = `calc(${percentage}% - ${input.clientHeight}px)`;
});

document.querySelectorAll('.grade-radio-button-checkmark').forEach(input => {
  input.addEventListener('click', () => {
    // Check the real input when the visual radio option is selected.
    input.previousElementSibling.checked = true;

    // Change the level of the red bar.
    gradeRangeFill.style.height = `${input.getAttribute('data-percentage')}%`;
  });
});

// Set the correct distance for the "Grade"
document.querySelectorAll('.grade-radio-button-grade').forEach(el => {
  el.style.left = `calc(-1rem - ${el.clientWidth}px)`;
});


// Set the correct distance for the "Percentage"
document.querySelectorAll('.grade-radio-button-percentage').forEach(el => {
  el.style.right = `calc(-1rem - ${el.clientWidth}px)`;
});

