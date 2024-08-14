document.getElementById("download-sponsor-form").addEventListener("click", () => {
  const fileUrl = `${window.siteBaseUrl}/assets/images/sponsor-form/sponsor-form.pdf`;
  // Create an invisible link element
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = 'hazelParkPromiseZoneSponsorForm.pdf'; // Change download filename

  // Append the link to the body
  document.body.appendChild(link);

  // Programmatically click the link
  link.click();

  // Remove the link from the body
  document.body.removeChild(link);
});