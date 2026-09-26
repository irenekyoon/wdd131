
let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        { section: "001", enrolled: 11, instructor: "Jason Blazzard" },
        { section: "002", enrolled: 14, instructor: "Raphael Soares" }
    ]
};

function setCourseInformation(course) {
    document.querySelector("#courseName").innerHTML = `${course.code} - ${course.title}`;

}

function renderSections(course) {
    // document.querySelector("#sections").innerHTML = `${course.code} ${course.title}`;
    const tbody = document.querySelector("#sections tbody");
    let row = "";

    for (const section of course.sections) {
        row +=
            `<tr>
        <td>${section.section}</td>
        <td>${section.enrolled}</td>
        <td>${section.instructor}</td>
         </tr>`

    }
    tbody.innerHTML = row;
}

setCourseInformation(aCourse);
renderSections(aCourse);

const currentYear = document.querySelector("#currentYear");

const thisYear = new Date();

currentYear.textContent = `© ${thisYear.getFullYear()} | S. I. Yoon`

document.getElementById("lastModified").textContent = `Last Modified ${document.lastModified}`;
