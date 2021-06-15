const first = 'this is a string';
const second = String('this is a string');

console.log('this is a string'.toUpperCase());
console.log(String('this is a string').toUpperCase());




console.log(first == second);//so first and second is same
console.log(first === second);// data type is also same


console.group('primitive vs object');
console.log(first === second);
console.log(
    typeof first,
    typeof String('this is a String'),
    typeof new String()
);
console.groupEnd();

//strings
const setence = 'this is my sentence';
console.group(String);
console.log(first.toUpperCase());
console.log(second.toUpperCase());
console.log(setence.startsWith('hi , '));// false , bcause setence start with this is
console.log('ha'.repeat(20));
console.log('look at this space                '.trim());
console.groupEnd();


//numbers and math
console.group('Number and math');
console.log(1..toString());//1
console.log((1).toString());//1
console.log(Number.isInteger(5));//true
console.log(Number.isInteger(5.43));//false
console.log((1.4235).toFixed(2));//1.42
console.log(

    Math.random().toFixed(2),//0.42
    Math.ceil(1.56),//2
    Math.floor(6.3)//6
);
console.groupEnd();

// arrays

const myArr = ['ashraf' , 'wan' , 'fareez' , 'daniel'];
console.group('arrays');
console.log(myArr.length);
console.log(myArr.join('-'));
console.log(myArr.push('farah'));
console.log(myArr.pop('farah'));

myArr.forEach((user) => console.log(user));

 