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


const templePhotos = [
    {
        month: "May",
        season: "Spring",
        location: "West Sidewalk",
        imgLocation: "images/may-west-sidewalk.webp",
        altText: "West view in May of the Seoul Korea Temple of the Church of Jesus Christ of Latter-day Saints"
    },
    {
        month: "March",
        season: "Spring",
        location: "Main Entrance",
        imgLocation: "images/march-entrance.webp",
        altText: "View of the main entrance in March, Seoul Korea Temple of the Church of Jesus Christ of Latter-day Saints"
    },

    {
        month: "June",
        season: "Summer",
        location: "West Sidewalk",
        imgLocation: "images/june-west-sidewalk.webp",
        altText: "View of the approach from the west sidewalk in June, Seoul Korea Temple of the Church of Jesus Christ of Latter-day Saints"
    },
    {
        month: "August",
        season: "Summer",
        location: "West Side",
        imgLocation: "images/august-west-side.webp",
        altText: "View from the west side in August, Seoul Korea Temple of the Church of Jesus Christ of Latter-day Saints"
    },
    {
        month: "April",
        season: "Spring",
        location: "East",
        imgLocation: "images/april-east.webp",
        altText: "View from the east in April, Seoul Korea Temple of the Church of Jesus Christ of Latter-day Saints"
    },
    {
        month: "December",
        season: "Winter",
        location: "View From the Driveway",
        imgLocation: "images/december-driveway.webp",
        altText: "View from the driveway in Decemeber, Seoul Korea Temple of the Church of Jesus Christ of Latter-day Saints"
    },
    {
        month: "February",
        season: "Winter",
        location: "Aerial View from the South",
        imgLocation: "images/february-aerial.webp",
        altText: "An aerial view in February, Seoul Korea Temple of the Church of Jesus Christ of Latter-day Saints"
    },
    {
        month: "October",
        season: "Autumn",
        location: "North Side",
        imgLocation: "images/october-north.webp",
        altText: "North side of the Seoul Korea Temple of the Church of Jesus Christ of Latter-day Saints"
    },
    {
        month: "March",
        season: "Spring",
        location: "West Side",
        imgLocation: "images/march-west-side.webp",
        altText: "West view of the Seoul Korea Temple of the Church of Jesus Christ of Latter-day Saints"
    }
];

createCard(templePhotos);

const springLink = document.querySelector("#spring");
springLink.addEventListener("click", () => {
    createCard(templePhotos.filter(photo => photo.season.includes("Spring")));
});

const summerLink = document.querySelector("#summer");
summerLink.addEventListener("click", () => {
    createCard(templePhotos.filter(photo => photo.season.includes("Summer")));
});

const autumnLink = document.querySelector("#autumn");
autumnLink.addEventListener("click", () => {
    createCard(templePhotos.filter(photo => photo.season.includes("Autumn")));
});

const winterLink = document.querySelector("#winter");
winterLink.addEventListener("click", () => {
    createCard(templePhotos.filter(photo => photo.season.includes("Winter")));
});

function createCard(filteredPhotos) {
    document.getElementById("grid").innerHTML = "";
    filteredPhotos.forEach(photo => {
        let card = document.createElement("section");
        let img = document.createElement("img");
        let month = document.createElement("h2");
        let season = document.createElement("p");
        let location = document.createElement("p");
        month.textContent = `${photo.month}`;
        season.textContent = `Season: ${photo.season}`;
        location.textContent = `Location: ${photo.location}`;
        img.setAttribute("src", photo.imgLocation);

        img.setAttribute("alt", `Temple of the Church of Jesus Christ of Latter-day Saints`);

        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "275");
        img.setAttribute("height", "275");
        card.appendChild(img);
        card.appendChild(month);
        card.appendChild(season);
        card.appendChild(location);
        document.querySelector("#grid").append(card);
    })
};
