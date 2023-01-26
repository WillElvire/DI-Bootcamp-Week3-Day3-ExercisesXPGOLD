/****************************Animation With The Alphabet***************** */


/**
 * @author: Koua Wilfried
 * @description: Animation With The Alphabet
 * Date : 25/01/2023
 */





/* 1 Create multiple squares/boxes with letters inside. There should be 26 squares/boxes for all the letters
 (A to Z) next to each other. */

    //selection du grand div qui contiendra nos lettres
    const divContainer = document.querySelector('.container')
    const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    for(let lettre of alpha){
        const div = document.createElement('div')
        div.setAttribute('draggable','true')
        div.className ='alphabet'
        divContainer.appendChild(div)
        div.innerHTML = lettre
    }

//2 Make all the squares draggable.
document.addEventListener('DOMContentLoaded', (event) => {
    

    function handleDragStart(e) {
        // Makes the element transparent
        this.style.opacity = "0.4";
        // Stores the element that triggered the event in a global variable
        // which will be used later to determine if the element has been moved or not
        dragSrcEl = this;
        // Tells the browser that the element can be moved using the mouse
        e.dataTransfer.effectAllowed = "move";
        // Stores the data of the element that triggered the event in an object
        // which will be used later when the element is dropped
        e.dataTransfer.setData("text/html", this.innerHTML);
    }
    // Function that will be called when the user releases the element
    // that he selected with the mouse

    function handleDragEnd(e) {
        // Resets the opacity property of the element to its default value
        // which makes it visible again
        this.style.opacity = "1";
    }


    function handleDragOver(e) {
        // Prevents the browser from processing the event by default
        e.preventDefault();
        // Terminates the function and prevents the browser from continuing to process the event
        return false;
    }

    function handleDragEnter(e) {
        //Adds the 'over' class to the element that triggered the event
        this.classList.add("over");
    }
    

    function handleDragLeave(e) {
        // Removes the 'over' class from the element that triggered the event
        this.classList.remove("over");
    }

    function handleDrop(e) {
       // Prevents the browser from redirecting to the element on which the
        // element was dropped
        e.stopPropagation();
        // If the element has not been moved on itself, exchange the content
        // of the element with that of the element on which it has been dropped
        if (dragSrcEl !== this) {
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData("text/html");
        }
        // Terminates the function and prevents the browser from continuing to process
        // the event
        return false;
    }
    
    // Create a global variable that will be used to store the element
    // that triggered the event
    let dragSrcEl;
    // Retrieves all the elements of the page that have the class 'alphabet
    const sources = document.getElementsByClassName("alphabet");

    // For each element of the page that has the class 'alphabet
    for (const source of sources) {
        // Delete the 'over' class from this element
        source.classList.remove('over');
    }


    // For each element of the page that has the class 'alphabet
    for (const source of sources) {
        // Adds an event handler for the 'dragstart' event
        // call the 'handleDragStart' function when the event is triggered
        source.addEventListener("dragstart", handleDragStart);
        // Adds an event handler for the 'dragover' event
        // call the 'handleDragOver' function when the event is triggered
        source.addEventListener("dragover", handleDragOver);
        // Adds an event handler for the 'dragenter' event
        // call the 'handleDragEnter' function when the event is triggered
        source.addEventListener("dragenter", handleDragEnter);
        // Adds an event handler for the 'dragleave' event
        // call the 'handleDragLeave' function when the event is triggered
        source.addEventListener("dragleave", handleDragLeave);
        // Adds an event handler for the 'dragend' event
        // call the 'handleDragEnd' function when the event is triggered
        source.addEventListener("dragend", handleDragEnd);
        // Adds an event handler for the 'drop' event
        // call the 'handleDrop' function when the event is triggered
        source.addEventListener("drop", handleDrop);
    }

})
