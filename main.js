
document.getElementById("copy-email").addEventListener("click", function () {
  navigator.clipboard.writeText("canonoy23kirby@gmail.com");

  const note = document.createElement("div");
  note.textContent = "Email Copied!";
  note.className = "copy-alert";
  document.body.appendChild(note);

  setTimeout(() => {
    note.remove();
  }, 1500);
});

document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});

document.getElementById("download-pdf").addEventListener("click", () => {
  const resumeElement = document.querySelector(".resume");

  html2canvas(resumeElement, { scale: 2 }).then(canvas => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jspdf.jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Kirby_Canonoy_Resume.pdf");
  });
});
