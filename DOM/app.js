//1 grab element from the dom
//2 attach evebt listener

const body = document.body;
// body.style.backgroundColor = '#1CE';

//es5 arrrow fucntion
// function goCuckoo() {
//     document.body.style.backgroundColor = '#1CE';
// }

//es6 arrow function
const goCuckoo = () => {document.body.style.backgroundColor = '#1CE'};

//==================== options 2 =====================

const coffeeButtons= document.querySelectorAll('.coffee-btn');

// coffeeButton.onclick = () => { document.body.style.backgroundColor = '#C0FFEE'};

// coffeeButton.onmouseenter = goCuckoo;

const goCoffee = () => {document.body.style.backgroundColor = '#C0FFEE'}


coffeeButtons.forEach( (button) => {
    button.onclick = goCoffee
});


//for each example
// const poop = ['haha','lol','hehe'];

// poop.forEach(haha => {console.log(haha);})



//================================== OPTION NUMBER 3

const lalaBtn = document.querySelector('.lala-btn');

lala = () =>{ 
    document.body.style.backgroundColor = ('#1A1A1A'
    )};

lalaBtn.addEventListener('click' , lala);
lalaBtn.addEventListener('mouseenter',lala);

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener
    ('mouseleave' , lala));

