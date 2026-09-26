const year = document.querySelector("#currentYear");
const thisYear = new Date();
// thisYear.getFullYear();
year.innerHTML = `©${thisYear.getFullYear()} | Sunyoung Irene Yoon | Philippines`

document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;


const hamburgerButton = document.querySelector("#hamburger");
const navigation = document.querySelector("nav");

hamburgerButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamburgerButton.classList.toggle("open");
});


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Seoul Korea",
        location: "Seoul, Seoul-teukbyeolsi, South Korea",
        dedicated: "1985, December, 14",
        area: 28057,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seoul-korea/320x200/seoul-korea-temple-lds-424784-wallpaper.jpg"
    },
    {
        templeName: "Manila Philippines",
        location: "Quezon City, Metro Manila, Philippines",
        dedicated: "1984, September, 25",
        area: 26683,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/320x200/manila-philippines-temple-lds-993617-wallpaper.jpg"
    },
    {
        templeName: "Phnom Penh Cambodia",
        location: "Phnom Penh, Cambodia",
        dedicated: "2026, August, 30",
        area: 9946,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/pniuc75a840q6tyhdu8e7k46xxwlq5siv08qohva/full/640%2C/0/default"
    },
    {
        templeName: "Sapporo Japan",
        location: "Atsubetsu-ku Sapporo, Hokkaido, Japan",
        dedicated: "2016, August, 21",
        area: 48480,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/320x200/sapporo-japan-exterior-night-1945721.jpg"
    }
];

createTempleCard(temples);

// const newLink = document.querySelector("#new");
// newLink.addEventListener("click", () => {
//     createTempleCard(temples.filter(temple => temples.dedicated > 2000));
// })

const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
    // createTempleCard(temples.filter(temple => temple.location.includes("Utah")));
    createTempleCard(temples.filter(temple => temple.area < 10000));
});

const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
    // createTempleCard(temples.filter(temple => temple.location.includes("Utah")));
    createTempleCard(temples.filter(temple => temple.area > 90000));
});

const homeLink = document.querySelector("#home");
homeLink.addEventListener("click", () => {
    createTempleCard(temples);
});

// const old = document.getElementById("old");
// old.addEventListener("click", () => {
//     const templeYear = temples.dedicated.map((temYear) => temYear.split(",")[0]);

//     createTempleCard((temples.filter(temple => templeYear < 1900)));
// });

function createTempleCard(filteredTemples) {
    document.getElementById("grid").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = `${temple.templeName}`;
        location.textContent = `${temple.location}`;
        dedication.textContent = `${temple.dedicated}`;
        area.textContent = `${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple of the Church of Jesus Christ of Latter-day Saints`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "400");
        img.setAttribute("height", "600");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector("#grid").append(card);

    })
};

