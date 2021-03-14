// add animation when nav links are moused over and turn back when mouseout
let navLinks = document.querySelectorAll(".nav-link");

// Add event listeners to each nav link
navLinks.forEach((link) => {
    link.addEventListener('mouseover', function(event) { // mouse over
        navMouseOver(link);
    });
    link.addEventListener('mouseout', function(event) { // mouse leave
        navMouseOut(link);
    });
});

// mouse over function
function navMouseOver(link) {
    link.style.transform = 'rotateZ(90deg)';
}
// mouse leave function
function navMouseOut(link) {
    link.style.transform = 'rotateZ(0deg)';
}

// add event listener when domContented loaded, h1 slowly gets bigger and turns red
let loaded = document.addEventListener('DOMContentLoaded', welcome);
// functin to handle dom loaded event
let welcomeH1 = document.querySelector('.home .intro h2');

function welcome() {

    welcomeH1.setAttribute('id', 'welcomeH1');
    let welcomeH1Styles = {
        'transform': 'scale(2)',
        'transition': '2000ms',
        'color': 'red'
    };
    Object.assign(welcomeH1.style, welcomeH1Styles);
}
window.setTimeout(undoWelcomeChange(), '3000');

function undoWelcomeChange() {

    welcomeH1.style.transform = 'none';
}
// add scroll event listener to document
//****** */



// document.addEventListener('contextMenu');
//********* */


// add mousedown event on lets go picture, changes to another picture for 10 seconds
let imgs = document.querySelectorAll('.img-content'); // select parent of img
let newImg = document.createElement('img'); // new img that it will transition to
newImg.setAttribute('id', 'lookMapImg'); // set it of new img
newImg.setAttribute('src', 'img/lookingAtMap.jpeg');

let newImgStyle = {
    'transition': '1s ease-in-out', // Add style properties to newImg
    'height': '300px',
    'width': '400px',
    'display': 'none'
};
Object.assign(newImg.style, newImgStyle);

document.querySelector('.img-content').appendChild(newImg); //  append newImg to same div as old img

newImg.classList.add('hidden'); // hides newImg 

let letsGoImg = imgs[0].children[0]; // select original img
letsGoImg.style.transition = letsGoImg.style.transition = 'all 2s ease-in-out';
newImg.style.width = "400px";
newImg.style.transition = 'all 2s ease-in-out';
let mouseDownEvent = document.addEventListener('mousedown', (event) => { // create event listener
    letsGoImg.style.position = 'absolute'; // add css for crossfading 
    letsGoImg.style.opacity = 0;
    newImg.classList.remove('hidden');
    newImg.style.display = 'block';
    newImg.style.opacity = 1;


});
//  letsGoImg.setAttribute('src', 'img/lookingAtMap.jpeg');
// setTimeout(letsGoImg.setAttribute('src', '/img/adventure.jpg'), 10000);
//**********//



//document.addEventListener('mouseup');
//********* */




// document.addEventListener('mousemove');
//********* */




// document.addEventListener('keydown');
//********* */




// document.addEventListener('keyup');
//********* */




// document.addEventListener('focus');
//********* */