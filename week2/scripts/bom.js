
const inputInfo = document.querySelector('#favchap');
const bomButton = document.querySelector('button');
const chapterList = document.querySelector('#list');
//wait for button clicks
bomButton.addEventListener('click', function () {
    //check if user entered something
    if (inputInfo.value.trim() !== '') {
        //create list item and give it the value of the input
        const li = document.createElement("li");
        li.textContent = inputInfo.value;
        //create a button and add a click event listener
        const deleteBomButton = document.createElement('Button'); 

        deleteBomButton.textContent = '❌';
        deleteBomButton.addEventListener("click", function () {
            chapterList.removeChild(li);
            inputInfo.focus();
        });

        //add the button to the list item
        li.appendChild(deleteBomButton);

        //OUTPUT: finally display the completed list item to the unordered list
        chapterList.appendChild(li);
        //clear the user input field
        inputInfo.value = "";
    }
    //focus the user back to the input field
    inputInfo.focus();
});




