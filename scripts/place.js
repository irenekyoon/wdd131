const year = document.querySelector("#currentyear");
const thisYear = new Date();
// thisYear.getFullYear();
year.innerHTML = `©${thisYear.getFullYear()} | S. Irene Yoon | Philippines`

document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

const temperature = 29;
const windSpeed = 5;

function windChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * windSpeed ** .16 + 0.3965 * temperature * windSpeed ** .16;
    // return temperature + windSpeed
}

if (temperature <= 10) {
    if (windSpeed > 4.8) {
        document.getElementById("wind-chill").textContent = `${windChill(temperature, windSpeed)}°C`;
    }
} else {
    document.getElementById("wind-chill").textContent = `Not applicable`;
}


