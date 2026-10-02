const contentYear = document.querySelector("#contentYear");
const thisYear = new Date();
contentYear.innerHTML = `© ${thisYear.getFullYear()} | Irene Yoon | Philippines`;
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

const displayReviews = document.getElementById("displayReviews");

let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;
numReviews++;

localStorage.setItem("numReviews-ls", numReviews);

if (numReviews == 0) {
    displayReviews.textContent = `This is your first review!`;

} else {
    displayReviews.innerHTML = `You've completed ${numReviews} reviews`;
}
