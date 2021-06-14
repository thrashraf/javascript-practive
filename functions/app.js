function saySpmething(message = 'say something') {
    console.log(message);
}

punch();

//(message == 'something') this is default when you dont put anything in the parenthesis

saySpmething('hey');
saySpmething('my name is Ashraf');
saySpmething('hehe');
saySpmething();

function squared(a) {
    return a * a;
}

console.log(squared(5));

//javascript function can be stored in the variable

//this is anonymous function that store in the variable 

const areaOfRec = function(a , b){
    return a * b;
}

//arrowfunction

//varaible < name > = (param) => {}

const areaOfRec2 = (a) =>{

    return a*a;
}

//quisting 



function punch() {
    console.log('punch');
}