import { downloadFile } from "./download-file.js";

document.querySelectorAll(".download-waiver").forEach(button => {
  button.addEventListener("click", () => {
    const fileUrl = `${window.siteBaseUrl}/assets/images/forms/hazel-park-promise-zone-waiver.pdf`;
    const filename = "hazel-park-promise-zone-waiver.pdf";
    downloadFile(fileUrl, filename);
  });
});