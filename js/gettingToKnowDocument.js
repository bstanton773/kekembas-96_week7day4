console.log("Let's get to know the Document!");


console.log(document);

let body = document.body;

console.log(body);

let children = body.children;
console.log(children);

let navBar = children[0];
console.log(navBar);
console.dir(navBar);

navBar.className = "navbar navbar-dark bg-dark"


// Popular Methods with the Document Object


// Document get methods

// document.getElementById('id')
// return the first element with an id that matches the string id

let myHeader = document.getElementById('top-header');
console.log(myHeader);


// document.getElementsByTagName('tagName')
// return an HTMLCollection (Array-like) of all elements that match that tag name
let myButtons = document.getElementsByTagName('button');
console.log(myButtons);


// document.getElementsByClassName('className')
// return an HTMLCollection(Array-like) of all elements that match that class name
let myRows = document.getElementsByClassName('row');
console.log(myRows);



// document.querySelector('selector');
// return the FIRST element that matches the specified selector
let firstCol = document.querySelector('.col-2'); // simple selector
console.log(firstCol);

let divInNav = document.querySelector('nav > div'); // combinator selector
console.log(divInNav);



// document.querySelectorAll('selector')
// return a NodeList (Array-like) of elements that match the specified selector
let firstGroupButtons = document.querySelectorAll('#row-1 button') // General Sibling Selector - select all buttons that are descendants of element with an id of 'row-1'
console.log(firstGroupButtons);


// Create Elements with document method

// document.createElement('tagName')
// Create an element with the given tag name
let newHeader = document.createElement('h4');
newHeader.innerHTML = 'Header Created by JavaScript';
newHeader.className = 'text-center text-primary';
newHeader.style.backgroundColor = 'red';
console.log(newHeader);

// Add to our html
// body.append(newHeader);

// Put new header at bottom of container
let myContainer = document.querySelector('.container');
myContainer.append(newHeader);
