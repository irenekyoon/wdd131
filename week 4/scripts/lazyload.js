const currentYear = document.querySelector(".currentYear");


const thisYear = new Date();
currentYear.textContent = `© ${thisYear.getFullYear()} | S. Irene Yoon`;

document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;


