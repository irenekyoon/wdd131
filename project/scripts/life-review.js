const year = document.querySelector("#currentYear");
const thisYear = new Date();
// thisYear.getFullYear();
year.innerHTML = `©${thisYear.getFullYear()} | S. Irene Yoon | Philippines`

document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

const hamburgerButton = document.querySelector("#hamburger");
const navigation = document.querySelector("nav");

hamburgerButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamburgerButton.classList.toggle("open");
});



// const displayReviews = document.getElementById("displayReviews");

// let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;
// numReviews++;

// localStorage.setItem("numReviews-ls", numReviews);

// if (numReviews == 0) {
//     displayReviews.textContent = `This is your first review!`;

// } else {
//     displayReviews.innerHTML = `You've completed ${numReviews} reviews`;
// }
