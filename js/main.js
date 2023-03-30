// console.log('Hello this is the main');

// Create an array for colors (Based on the Bootstrap Color Scheme)

let colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];
console.log(colors);

// Get the color buttons
let colorButtons = document.querySelectorAll('.col-2 > button');
console.log(colorButtons);

// For each button in the button colors, apply the button color class name
colorButtons.forEach((button, index) => {
    // console.log(button, index, colors[index]);
    button.className = `btn btn-${colors[index]}`
})

colorButtons.forEach((button, index) => {
button.addEventListener('click', (e) => {
    console.log(e)
    let body = document.body;
    body.className = `bg-${colors[index]}`;
    });
});


let newHeader = document.createElement('h4');
newHeader.id = 'my-header';
newHeader.className = 'text-center mt-3';
newHeader.innerHTML = 'Created by JavaScript';
newHeader.style.color = 'black'
console.log(newHeader);

let colorButtonRow = document.getElementsByClassName('row')[1];
colorButtonRow.after(newHeader);


function changeTextColor(e){
    let element = e.target;
    if (element.style.color === 'black'){
        element.style.color = 'red';
    } else {
        element.style.color = 'black';
    };
};

newHeader.addEventListener('mouseover', changeTextColor);

