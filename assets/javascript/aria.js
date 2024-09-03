document.querySelectorAll('[role="radio"]').forEach(option => {
  option.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      moveFocus(this, 'next');
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      moveFocus(this, 'prev');
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      selectOption(this);
    }
  });

  option.addEventListener('click', function() {
    selectOption(this);
  });
});

function moveFocus(current, direction) {
  const options = Array.from(document.querySelectorAll('[role="radio"]'));
  const currentIndex = options.indexOf(current);
  let newIndex;

  if (direction === 'next') {
    newIndex = (currentIndex + 1) % options.length;
  } else if (direction === 'prev') {
    newIndex = (currentIndex - 1 + options.length) % options.length;
  }

  options[newIndex].focus();
}

function selectOption(selectedOption) {
  const options = document.querySelectorAll('[role="radio"]');

  options.forEach(option => {
    option.setAttribute('aria-checked', 'false');
  });

  selectedOption.setAttribute('aria-checked', 'true');
  selectedOption.focus();
}
