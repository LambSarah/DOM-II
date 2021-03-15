import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

//**********************#1 & #2********************************************************************** */
// add mouseover and mouseout event listeners
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
//*******************#3*************************************************************************** */

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
//*******************#4********************************************************************************* */

// add dblclick event listener
let btns = document.querySelectorAll('.btn'); // select all buttons
console.log(btns);
let i = 0;
btns.forEach((btn) => {
    btn.setAttribute('id', `btn${i}`);
    i++;
});
let btn0 = document.querySelector('#btn0');
btn0.addEventListener('dblclick', (event) => {
    dblClickBtn(btn0);
});

let btn1 = document.querySelector('#btn1');
btn1.addEventListener('dblclick', (event) => {
    dblClickBtn(btn1);
});
let btn2 = document.querySelector("#btn2");
btn2.addEventListener('dblclick', (event) => {
    dblClickBtn(btn2);
});

function dblClickBtn(target) {
    target.style.transition = 'transform 3s';
    target.style.transform = 'scale(2)';

}

//******************#5********************************************************************************** */

// add mousedown event on lets go picture, changes to another picture for 10 seconds
let imgs = document.querySelectorAll('.img-content'); // select parent of img
let newImg = document.createElement('img'); // new img that it will transition to
newImg.setAttribute('src', 'img/blackWhiteMap.jpg');

let newImgStyle = { // create a style object for newImg
    'transition': 'all 2s ease-in-out', // to transition from other img
    'height': '300px', // set height
    'width': '400px', //  set width
    'opacity': '0', // sets opacity to 0 so it doesnt show before transition
    'alt': 'Black and White Map',
    'position': 'absolute'
};
Object.assign(newImg.style, newImgStyle); // assign style object to newImg
document.querySelector('.img-content').appendChild(newImg); //  append newImg to same div as old img

let letsGoImg = imgs[0].children[0]; // select original img
letsGoImg.style.transition = 'all 2s ease-in-out'; //sets transition parameters
newImg.style.width = "400px";
let mouseDownEvent = document.addEventListener('mousedown', (event) => { // create event listener
    // add css for crossfading 
    letsGoImg.style.opacity = 0;
    newImg.style.display = 'block';
    newImg.style.opacity = 1;
});

//******************#6******************************************************************************** */
// add contextMenu event listener
let text = document.querySelectorAll('p'); // select all paragraphs
text.forEach((txt) => { // adding contextmenu event listener to each
    txt = addEventListener('contextmenu', e => {
        e.preventDefault(); // preventing the contextmenu from showing when right clicking
    });
});

//****************#7******************************************************************************** */
// add mouseup event listener
let headers = document.querySelectorAll('h2');
headers.forEach((header) => {
    header.addEventListener('mouseup', (event) => {
        header.style.transform = 'scale(1.5) translate(-50%, -50%)';
        stopPropagation(event);
    });
});

//****************#8********************************************************************************* */
// add keydown event listener
document.body.addEventListener('keydown', (event) => {
    pageHeader.style.animation = '3s linear 1s infinite running slidein';
});

//***************#9*********************************************************************************** */
// add select event listener
let pageHeader = document.querySelector('h1');
let destination = document.querySelector('.content-destination h2');
console.log(destination);
document.addEventListener('scroll', (event) => {
    gsap.to(destination, {
        scrollTrigger: destination,
        x: 500
    });

});
//**************#10********************************************************************************* */
// add keyup event listener

document.body.addEventListener("keyup", (event) => {
    alert(event);
    stopPropagation(event);
});


//**************************************************************************************************** */

//************Stop  Propagation ************************************************************* */
function stopPropagation(event) {
    if (event.stopPropagation !== undefined) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
}