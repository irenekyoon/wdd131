const contentYear = document.querySelector("#contentYear");
const thisYear = new Date();
contentYear.innerHTML = `© ${thisYear.getFullYear()} | Irene Yoon | Philippines`;
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

listProducts(products);
function listProducts(product) {
    const select = document.querySelector("#productName");
    product.forEach(product => {
        let option = document.createElement("option");
        option.textContent = `${product.name}`;
        option.setAttribute("value", product.name);
        select.appendChild(option);
        document.querySelector("#productName").append(option);
    })
};

const fiveStar = document.querySelector("#fiveStar");
fiveStar.innerHTML = `&star; &star; &star; &star;
                    &star;<input type="radio" id="stars" name="stars" value="5" required>`;

const fourStar = document.querySelector("#fourStar");
fourStar.innerHTML = `&star;&star; &star;
                    &star;<input type="radio" id="stars" name="stars" value="4" required>`;

const threeStar = document.querySelector("#threeStar");
threeStar.innerHTML = `&star; &star; &star;<input type="radio" id="stars" name="stars" value="3"
                        required>`;

const twoStar = document.querySelector("#twoStar");
twoStar.innerHTML = `&star; &star;<input type="radio" id="stars" name="stars" value="2" required>`;

const oneStar = document.querySelector("#oneStar");
oneStar.innerHTML = `&star; <input type="radio" id="stars" name="stars" value="1" required>`;


const optionalWritten = document.querySelector(".optionalWritten");
optionalWritten.innerHTML = `Written Review <span style="color:rgb(62, 60, 176)">(Optional)</span><input type="textarea" name="writtenReview">`;

const optionalYourName = document.querySelector(".optionalYourName");
optionalYourName.innerHTML = `Your Name <span style="color:rgb(62, 60, 176)">(Optional)</span><input type="text" name="name">`;
