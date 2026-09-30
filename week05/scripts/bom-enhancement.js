const inputInfo = document.querySelector('#favchap');
const bomButton = document.querySelector('button');
const chapterList = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

bomButton.addEventListener('click', () => {
    //check if user entered something
    if (inputInfo.value != "") {
        displayList(inputInfo.value);
        chaptersArray.push(inputInfo.value);
        // setChapterList = localStorage.setItem("chaptersArray", chaptersArray);
        setChapterList();
        // inputInfo.value = 0;
        inputInfo.value = '';
        inputInfo.focus();
    }
});

function displayList(item) {
    let li = document.createElement("li");
    let deleteBomButton = document.createElement('button');
    li.textContent = item; //note the use of the displayList parameter 'item'

    deleteBomButton.textContent = '❌';
    deleteBomButton.classList.add('delete'); //this references the CSS rule .delete{width:fit-content;} to size the delete button 
    li.append(deleteBomButton);
    chapterList.append(li);
    deleteBomButton.addEventListener("click", function () {
        chapterList.removeChild(li);
        deleteChapter(li.textContent); //note this new function that is needed to remove the chapter from the array and localStorage.
        inputInfo.focus();
    })
}

console.log('i like to understand code');

function setChapterList() {
    localStorage.setItem("chaptersArray", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("chaptersArray"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

// How to See localStorage in Action
// If you want to physically see your saved data inside your browser's memory:

// Right - click anywhere on your webpage and select Inspect(or press F12).

// Go to the Application tab at the top of the Developer Tools panel.

// In the left sidebar, expand Local Storage and click on your site's URL ([http://127.0.0.1...](http://127.0.0.1...) or file://...).

// You will see a table showing Key: chaptersArray and Value: ["Alma 5"].

// Try adding or deleting items on your page while looking at that tab—you will watch the values update in real time!


// The Refresh Test(How to test if it's working)
// To verify that your localStorage code is actually working:

// Open your HTML file in your web browser.

// Type a chapter(e.g., "Alma 5") into the input box and click Add Chapter.

//     Now, refresh the browser page(or close the tab and reopen it).

// Before this assignment(Original App): The list would turn completely blank when refreshed.

//     Now(With localStorage): "Alma 5" should still be sitting right there on your list!

// JavaScript Code Assessment
// Your JavaScript logic is now solid and matches all course requirements! Let's trace how the background process works when you test it:

// When the page loads:
// let chaptersArray = getChapterList() || []; reads from localStorage.If saved items exist, it parses them and chaptersArray.forEach(...) calls displayList() for each item to populate your UI automatically.

// When you add an item:
// chaptersArray.push() adds the entry to your JavaScript memory array, and setChapterList() saves the stringified array straight into localStorage.

// When you delete an item:
// deleteChapter() strips the ❌, filters chaptersArray, and calls setChapterList() to sync the updated list back to localStorage.