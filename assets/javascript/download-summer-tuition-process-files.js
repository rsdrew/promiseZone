import { downloadFile } from "./download-file.js"

document.querySelectorAll(".download-occ-summer-tuition-process").forEach(button => {
  button.addEventListener("click", () => {
    const fileUrl = `${window.siteBaseUrl}/assets/images/forms/occ-summer-tuition-process-23.pdf`;
    const filename = "occ-summer-tuition-process.pdf";
    downloadFile(fileUrl, filename);
  });
});

document.querySelectorAll(".download-macomb-summer-tuition-process").forEach(button => {
  button.addEventListener("click", () => {
    const fileUrl = `${window.siteBaseUrl}/assets/images/forms/macomb-summer-tuition-process-23.pdf`;
    const filename = "macomb-summer-tuition-process.pdf";
    downloadFile(fileUrl, filename);
  });
});

document.querySelectorAll(".download-henry-ford-summer-tuition-process").forEach(button => {
  button.addEventListener("click", () => {
    const fileUrl = `${window.siteBaseUrl}/assets/images/forms/henry-ford-summer-tuition-process-24.pdf`;
    const filename = "henry-ford-summer-tuition-process.pdf";
    downloadFile(fileUrl, filename);
  });
});