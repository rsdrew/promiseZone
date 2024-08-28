document.getElementById("download-waiver").addEventListener("click", () => {
  const fileUrl = `${window.siteBaseUrl}/assets/images/forms/hazel-park-promise-zone-waiver.pdf`;
  // Create an invisible link element
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = 'hazel-park-promise-zone-waiver.pdf'; // Change download filename

  // Append the link to the body
  document.body.appendChild(link);

  // Programmatically click the link
  link.click();

  // Remove the link from the body
  document.body.removeChild(link);
});