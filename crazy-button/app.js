
//grab everything we need
const crazyButtons = document.querySelectorAll('.btn-crazy');

//fucntions
goNuts = (e) =>{

    //target button
    const button = e.target;
    console.log(e);
    //math random get width & top
    const offshetWidth = Math.random() * (window.innerWidth - button.clientWidth);
    const offshetTop = Math.random() * (window.innerHeight - button.clientHeight);

    button.style.top = `${offshetTop}px`;
    button.style.left = `${offshetWidth}px`;  
}

//addEventListner
crazyButtons.forEach(button => button.addEventListener('mouseenter' , goNuts));