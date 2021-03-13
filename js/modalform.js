// create event listener to open form in modal when clicking sign up button
let signUpBtns = document.querySelectorAll('.btn');
console.log(signUpBtns);

signUpBtns.forEach((btn) => {
    btn.addEventListener('click', openSignUpModal());
});

// Adding html for modal
let formModal = document.createElement('div');
formModal.classList.add('modal');
formModal.setAttribute('id', 'formModal');
let contentSection = document.querySelector('.content-section');
contentSection.appendChild(formModal);
console.log('formModal appended');
let formModalContent = document.createElement('div');
formModalContent.setAttribute('id', 'formModalContent');
formModalContent.classList.add('modal-content');
formModalContent.innerHTML = "<span class = 'close'>&times;</span>";
let span = document.getElementsByTagName('span');
contentSection.appendChild(formModalContent);

// Add css styling to modal
let modalStyles = {
    'display': 'none',
    'position': 'fixed',
    'z-index': '1',
    'left': '1',
    'top': '1',
    'width': '75%',
    'height': '50%',
    'overflow': 'auto',
};

let modalObj = document.getElementById('formModal');
Object.assign(modalObj.style, modalStyles);

let modalContentStyles = {
    'backgroundColor': 'nude',
    'margin': '15% auto',
};

let modalContentObj = document.getElementById('formModalContent');
Object.assign(modalContentObj.style, modalContentStyles);

// create form and form elements
let formInModal = document.createElement('form');
formInModal.setAttribute('id', 'formInModal');
formInModal.classList.add('form', 'signUp');
contentSection.appendChild(formInModal);

let emailInput = document.createElement('label');

// function to open sign up modal
function openSignUpModal() {
    formModal.setAttribute('style', 'display:block');
    console.log("Modal opened");
}