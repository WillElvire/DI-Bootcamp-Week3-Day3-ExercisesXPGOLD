/****************************Animation With A Paragraph***************** */


/**
 * @author: Koua Wilfried Elvire
 * @description: Animation With A Paragraph
 * Date : 25/01/2023
 */




//creation of our div with the header id
const divHeader = document.createElement('div');
divHeader.id = 'header';
divHeader.style.textAlign = 'center';
//adding the div containing our title in the body


document.body.appendChild(divHeader);
    //creation of the child of the div that a h1
    const title = document.createElement('h1');
    title.innerHTML = 'Animation avec un paragraphe';
    divHeader.appendChild(title);

//end of creation of our div with its element

//creation of the second div with our paragraph

const divContainer = document.createElement('div');
divContainer.className = 'container';

//insertion of this div in our body
document.body.appendChild(divContainer);
// creation of our paragraph
const paragra = document.createElement('p');
paragra.setAttribute('draggable','true');
paragra.id = 'box';
paragra.innerHTML =' Je suis un paragraphe et tu peux me faire deplacer';

divContainer.appendChild(paragra);

const divContainerCss = document.querySelector('.container');
divContainerCss.style.overflow = 'hidden';
divContainerCss.style.textAlign = 'center';

const paragraBox = document.querySelector('#box');
paragraBox.style.padding = '20px';
paragraBox.style.fontSize = '20px';
paragraBox.style.display = 'inline-block';
paragraBox.style.backgroundColor = 'blue';
paragraBox.style.color = 'white';


/** our JavaScript code */

// Function that will be called when an element is selected with the mouse
function handleStart(e) {
    e.target.style.fontSize = '50px';
}

// Function that will be called when the user releases the element
// selected with the mouse
function handleEnd(e) {
    // Change the font size of the element that triggered the event
    // to 20 pixels
    e.target.style.fontSize = '20px';
    // Retrieves the coordinates of the screen where the event was triggered
    let _x = e.clientX;
    let _y = e.clientY;
    // Move the element using the recovered coordinates
    e.target.style.left = _x + "px";
    e.target.style.top = _y + "px";
    // Indicates to the browser that the element must be positioned absolutely
    // in relation to the screen
    e.target.style.position = "absolute";
}

// Get the element of the page that has the ID 'box'.
let element = document.getElementById("box");

// Adds an event handler for the 'dragstart' event
// call the 'handleStart' function when the event is triggered
element.addEventListener("dragstart", handleStart);

// Adds an event handler for the 'dragend' event
// call the 'handleEnd' function when the event is triggered
element.addEventListener("dragend", handleEnd);

