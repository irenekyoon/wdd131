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

let infoPoints = {
    address: "Sinchon-ro 7 GIL 21 Seodaemun-gu, Seoul SEOUL-TEUKBYEOLSI 03783 SOUTH KOREA",
    phone: "+82 2-330-2700",
    subway: "Sinchon Station, line 2"
};

const address = document.querySelector("#address");
address.innerHTML = `Address: ${infoPoints.address}`;
const phone = document.querySelector("#phone");
phone.innerHTML = `Phone Number: ${infoPoints.phone}`;
const subway = document.querySelector(`#subway`);
subway.innerHTML = `Nearest Subway Station: ${infoPoints.subway}`;

const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("myCustomKey")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = `Number of visits: ${numVisits}`;
} else {
    visitsDisplay.textContent = `First-time visitor. Welcome!`;
}

numVisits++;

localStorage.setItem("myCustomKey", numVisits);

