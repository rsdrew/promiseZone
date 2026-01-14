import { downloadFile } from "./download-file.js";

document.getElementById("download-sponsor-form").addEventListener("click", () => {
  const fileUrl = `${window.siteBaseUrl}/assets/images/sponsor-form/promise-zone-sponsor-form-2026.pdf`;
  const filename = "hazel-park-promise-zone-sponsor-form-2026.pdf";
  downloadFile(fileUrl, filename);
});