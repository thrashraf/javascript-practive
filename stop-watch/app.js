//grab everything we need

const minutes = document.querySelector('.minutes');
const second = document.querySelector('.second');
const startButton = document.querySelector('[data-action = start]');
const stopButton = document.querySelector('[data-action = stop]');
const resetButton = document.querySelector('[data-action = reset]');
let timerTime = 00;
let isRunning = false;
let interval;

//fucntions
startWatch = () => {
    if(isRunning) return;
    isRunning = true;
    interval = setInterval(incrementTimer , 1000);
}

stopWatch = () => {
    if(!isRunning) return;
    isRunning = false;
    clearInterval(interval);
}

resetWatch = () => {
    timerTime = 00;
    minutes.innerText = '00';
    second.innerText = '00';
}

incrementTimer = () =>{
   
        timerTime++;
    
        const numberOfMinutes = Math.floor(timerTime / 60);
        const numberOfSecond = timerTime % 60;
    
        minutes.innerText = pad(numberOfMinutes);
        second.innerText = pad(numberOfSecond);
}

// this is for 00.00 if number < 10;
pad = (number) => {
    //tenary operator
     return (number < 10 )?`0${number}` : number;
}

//addEventListener
startButton.addEventListener('click' , startWatch);
stopButton.addEventListener('click' , stopWatch);
resetButton.addEventListener('click' , resetWatch);