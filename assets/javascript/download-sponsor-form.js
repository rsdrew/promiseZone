import { downloadFile } from "./download-file.js";

document.getElementById("download-sponsor-form").addEventListener("click", () => {
  const fileUrl = `${window.siteBaseUrl}/assets/images/forms/sponsor-form.pdf`;
  const filename = "hazel-park-promise-zone-sponsor-form.pdf";
  downloadFile(fileUrl, filename);
});