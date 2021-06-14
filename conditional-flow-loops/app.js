const name = 'ashraf';
const username = 'thrashraf';



//if statement 
if(name == 'ashraf'){

    console.log('hi' + name);
} else if (name == 'acap') {
    console.log('not ashraf');
} else {
    console.log('lol');
}

// for loop
// const dogList = document.querySelector('.doglist');
// const dog = [

//     {name: 'loooky' , type: 'bulldog'},
//     {name: 'holly' , type: 'chihuahua'}
// ]

// for (let i = 0; i < dog.length; i++) {
    
//     const dogs = dog[i];// this gonna make loop beacuse of i
//     const dogData = document.createElement('div'); // this gonna make an element div
//     dogData.classList.add('jumbotron', 'text-center')
//     dogData.innerText = `${dogs.name} is a ${dogs.type}`; // this gonna try to re write the dog name to html div
//     dogList.appendChild(dogData);// this gonna takes the dog data
    
// }
// //////////////////////////////////////////////////////////////////////////////////


// const toDo = document.querySelector('.toDoList');

// const Lists = [

//     {name:'rest'},
//     {name:'sleep'},
//     {name:'code'}
// ]

// for (let i = 0; i < Lists.length; i++) {
//     const list = Lists[i];
//     const listData = document.createElement('div');
//     listData.innerText = list.name;
    // toDo.appendChild(listData);

// } 

// //while loop
// // let i = 0;
// while (i < dog.length) {
//     const dogs = dog[i];// this gonna make loop beacuse of i
//     const dogData = document.createElement('div'); // this gonna make an element div
//     dogData.classList.add('jumbotron', 'text-center')
//     dogData.innerText = `${dogs.name} is a ${dogs.type}`; // this gonna try to re write the dog name to html div
//     dogList.appendChild(dogData);

//     i++;
// }

// //do while 

// let j = 0;

// do {
//     const dogs = dog[i];// this gonna make loop beacuse of i
//     const dogData = document.createElement('div'); // this gonna make an element div
//     dogData.classList.add('jumbotron', 'text-center')
//     dogData.innerText = `${dogs.name} is a ${dogs.type}`; // this gonna try to re write the dog name to html div
//     dogList.appendChild(dogData);

// } while (condition);

//for..of itenator 

// for (const dogs of dog) {

//     const dogData = document.createElement('div'); // this gonna make an element div
//     dogData.classList.add('jumbotron', 'text-center')
//     dogData.innerText = `${dogs.name} is a ${dogs.type}`; // this gonna try to re write the dog name to html div
//     dogList.appendChild(dogData);
// }

const student = [
    {name:'asraf'},
    {name:'qairell'},
    {name:'akiff'}
]

// for (const students of student) {
    
//     const studentData = document.createElement('div');
//     studentData.innerText = `DDTS3 student top 3 is ${students.name}`;
//     dogList.appendChild(studentData);
// }



for (const element of student) {

    console.log(element.name);
}