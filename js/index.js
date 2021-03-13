// add animation when nav links are moutrd over
let navLinks = document.querySelectorAll(".nav-link");

// Add event listeners to each nav link
navLinks.forEach((link) => {
    link.addEventListener('mouseover', function(event) { // mouse over
        navMouseOver(link);
    });
    link.addEventListener('mouseout', function(event) { // mouse leave
        navMouseLeave(link);
    });
});

// mouse over function
function navMouseOver(link) {
    link.style.transform = 'rotateZ(90deg)';
}
// mouse leave function
function navMouseLeave(link) {
    link.style.transform = 'rotateZ(0deg)';
}

// add scroll event listener to document

let lastKnownScrollPosition = 0;
let ticking = false;

function changeBackground() {
    document.body.style.backgroundColor = 'lightBlue';
}




// document.addEventListener('contextMenu');
// document.addEventListener('mousedown');
// document.addEventListener('mouseup');
// document.addEventListener('mousemove');
// document.addEventListener('keydown');
// document.addEventListener('keyup');
// document.addEventListener('focus');
// document.addEventListener('DOMContentLoaded');