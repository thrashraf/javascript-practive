//grab everything we need
const scrollLine = document.querySelector('.scroll-line');



//functions
fillScrollLine = () => {

    //get the window height
    const windowHeight = window.innerHeight;
    const fullHeight   = document.body.clientHeight;
    const scrolled     = window.scrollY;

    const percentageScroll = (scrolled / (fullHeight - windowHeight) * 100);
    scrollLine.style.width = `${percentageScroll}%`;
}



//add EventListener
window.addEventListener('scroll' , fillScrollLine);