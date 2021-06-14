const original = 'ashraf';
const clone = 'ASHRAF';

console.group('Stirng');
    console.log(original == 'ashraf');
    console.log(original == clone);
    console.log(original == clone.toLowerCase());
console.groupEnd();

    const num1 = 10;
    const num2 = '10';

console.group('Nunmbers');
    console.log(num1 == num2);// true ; this is true because == is comparisons if 4 == 4 ; true
    console.log(num1 === num2);// this is false because num1 is an int meanwhile num2 is a string === for datatype;
    console.log(num1 != num2);
    console.log(num1 !== num2);
console.groupEnd();

    let what;
    let thing = null;
console.group('Booleans');
    console.log(Boolean(original));//true
    console.log(Boolean(what));//false because what is undefined
    console.log(Boolean(thing));//false because thing is null
    console.log(Boolean({}));//true
    console.log(Boolean([]));//true
console.groupEnd();

console.group('Array and Object');
    const firstArray = [1,2,3];
    const secondArray = [1,2,3];

    const firstObj = {color:'red' };
    const secondObj = {color: 'red'};

    console.log(firstArray == secondArray); 
    console.log(firstObj == secondObj); 
console.groupEnd();

console.group('And or')

console.log(Boolean('blah') && Boolean('thing'));
console.log(Boolean('blah') && Boolean(''));
console.log(Boolean('blah') || Boolean(''));
console.log(Boolean('') || Boolean(''));



console.groupEnd();
