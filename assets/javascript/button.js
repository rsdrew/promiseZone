// Remove underline below link buttons
document.querySelectorAll('a').forEach(function(anchor) {
  if (anchor.querySelector('button.button')) {
    anchor.style.textDecoration = 'none';
  }
});
