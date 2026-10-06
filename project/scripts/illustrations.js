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


const drawings = [
    {
        title: "Joseon Couple Sealing",
        location: "East",
        imgLocation: "images/sealing.webp",
        alt: "Illustration of Joseon era couple waiting for their sealing at the main entrance of the Seoul Korea Temple of the Church of Jesus Christ of Latter-day Saints"
    },

    {
        title: "Joseon Families Rejoice!",
        location: "South",
        imgLocation: "images/rejoice.webp",
        alt: "Drawing of Joseon families celebrating their performed ordinances at the Seoul Korea Temple of the Church of Jesus Christ of Latter-day Saints",
    },

    {
        title: "Joseon Family Waiting",
        location: "West",
        imgLocation: "images/wait.webp",
        alt: "A Joseon era family awaits their proxy ordinances at the Seoul Korea Temple of the Church of Jesus Christ of Latter-day Saints",
    },
    {
        title: "A Joseon Divine Daughter",
        location: "East",
        imgLocation: "images/sorrow.webp",
        alt: "Drawing of a Joseon era young woman weeps on the grassy plateau outside the Seoul Korea Temple of the Church of Jesus Christ of Latter- day Saints",
    },
    {
        title: "Think Celestial!",
        location: "East, South, West",
        imgLocation: "images/think.webp",
        alt: "An illustration montage of various perspectives of Seoul Korea Temple of the Church of Jesus Christ of Latter-day Saints surrounding the words, Think Celestial"
    }

];

createCard(drawings);


function createCard(filteredDrawings) {
    document.getElementById("illustration-grid").innerHTML = "";
    filteredDrawings.forEach(drawing => {
        let card = document.createElement("section");
        let img = document.createElement("img");
        let title = document.createElement("h2");
        let location = document.createElement("p");
        title.textContent = `${drawing.title}`;
        location.textContent = `Location: ${drawing.location}`;
        img.setAttribute("src", drawing.imgLocation);
        img.setAttribute("alt", `${drawing.alt}`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "275");
        img.setAttribute("height", "344");
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(location);
        document.querySelector("#illustration-grid").append(card);
    })
};

