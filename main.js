const dayInput = document.getElementById('day');
const timeInput = document.getElementById('time');
const actionInput = document.getElementById('action');
const myForm = document.getElementById('myForm');

const objArray = [];
const arrayContainer = [];

const addButton = document.querySelector('.addShedule_button')
addButton.addEventListener('click', function() {
    const objObject = {

    };

    const objContainer = {

    };

    objObject.day = dayInput.value;
    objObject.time = timeInput.value;
    objObject.action = actionInput.value;
    objArray.push(objObject);
    dayInput.value = "";
    timeInput.value = "";
    actionInput.value = "";


    let box = document.createElement("div");
    box.classList.add('container-2__blocks__prependChild')
    box.innerHTML = `
    <div><p class="container-2__blocks__prependChild__day">${objObject.day}</p></div>
    <div><p class="container-2__blocks__prependChild__time">${objObject.time}</p></div>
    <div><p class="container-2__blocks__prependChild__action">${objObject.action}</p></div>`;

    arrayContainer.push(objContainer);

    objContainer.elem = box;

    let bodyContainer = document.getElementById('container-2__blocks');
    let bodyAppendContainer = document.getElementById('container-2__blocks__appendChild')
    bodyContainer.insertBefore(box, bodyAppendContainer);
})
 

const showButton = document.querySelector('.showShedule_button')
showButton.addEventListener('click', function() {
    console.log(objArray);
    console.log(arrayContainer);
    let mainContainer = document.getElementById('container-2');
    mainContainer.style.display = "flex";
    let infoContainer = document.getElementById('container-2__blocks__appendChild');
    infoContainer.style.display = "flex";
    addButton.disabled = false;
})

