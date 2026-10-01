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
        option.textContent = product.name;
        option.setAttribute("value", "product.name");
        select.appendChild(option);
        document.querySelector("#productName").append(option);
    })
};

const displayReviews = document.querySelector(".reviews");
let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

if (numReviews == 0) {
    displayReviews.textContent = `This is your first review!`;

} else {
    displayReviews.textContent = ` You've completed ${numReviews} reviews!`;
}

numVisits++;

localStorage.setItem("numReviews-ls", numReviews);

