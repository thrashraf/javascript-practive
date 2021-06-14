//everything in js is an object

const hero = {

    name:'Bruce Wayne',
    alias:'Batman',
    catchPhrase:'To the Batcave',

    speak: () => {
        return  'attention ' + hero.catchPhrase;
    },

    attack: (sounds) => {
        return `(punch bad guy) ${sounds}`;
    }
};

//access property 
const thingToLookFor = 'alias';

console.log(hero.name);
console.log(hero[thingToLookFor]); // this is using array
console.log(hero.alias);//without array

//access the method
console.log(hero.speak());
console.log(hero.attack('BOOOM'));

'this is my string'.toUpperCase;

