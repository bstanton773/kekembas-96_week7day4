// Create a Scope to limit our variables

{
    // set the navbar to dark by replacing the word 'light' with 'dark' in className
    let navBar = document.querySelector('nav');
    navBar.className = navBar.className.replaceAll('light', 'dark');

    // Create an array for the colors
    let buttonColors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];

    // Get the buttons from the document
    let myButtons = document.querySelectorAll('.col-2 > button');
    // console.log(myButtons);

    // Loop through the buttons and apply a class to each button with the buttonColors
    for (let i=0; i < myButtons.length; i++){
        // console.log(myButtons[i], buttonColors[i]);
        myButtons[i].className = `btn btn-${buttonColors[i]}`;
    }

    // Add a header under the buttons in the container

    // First create the header
    let newHeader = document.createElement('h4');
    newHeader.id = 'myHeader';
    newHeader.className = 'text-center mt-3';
    newHeader.innerHTML = 'Created by Brian with the help of JavaScript';
    newHeader.style.color = 'black';

    // Get the row of buttons
    let allRows = document.getElementsByClassName('row')
    let buttonRow = allRows[0];
    // console.log(buttonRow);

    // Add the new header AFTER the row of buttons (vs appending to the end)
    buttonRow.after(newHeader);

}

// Create a new scope
{
    // Get the header we created
    let myHeader = document.getElementById('myHeader');
    // console.log(myHeader);

    // Create a function to be executed when our event triggers
    function handleHeaderEvent(event){
        // console.log(event);
        let elementToChange = event.target;
        // console.log(elementToChange);
        if (elementToChange.style.color === 'black'){
            elementToChange.style.color = 'red';
        } else {
            elementToChange.style.color = 'black';
        }
    }


    // Add the handleHeaderEvent function as an event listener on the header
    myHeader.addEventListener('click', handleHeaderEvent)
}