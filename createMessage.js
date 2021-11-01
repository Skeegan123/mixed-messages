

const fs = require('fs')

function nameArray() {

    const text = fs.readFileSync("./names.txt").toString('utf-8');
    const nameArray = text.split("\n")

    return nameArray;

}


const verbArray = () => {

    const text = fs.readFileSync("./verbs.txt").toString('utf-8');
    const verbArray = text.split("\n")

    return verbArray;

}


const adjectiveArray = () => {

    const text = fs.readFileSync("./adjectives.txt").toString('utf-8');
    const adjectiveArray = text.split("\n")

    return adjectiveArray;

}

console.log(nameArray());
console.log(verbArray());
console.log(adjectiveArray());

function createMessage(nameArray, verbArray, adjectiveArray) {
    const randString = 0
    const randName = Math.floor(Math.random() * nameArray.length - 1);
    const randVerb = Math.floor(Math.random() * verbArray.length - 1);
    const randAdjective = Math.floor(Math.random() * adjectiveArray.length - 1);

    switch(randString) {
        case 0: 
            console.log(`${nameArray[randName]} ${verbArray[randVerb]}ed the ${adjectiveArray[randAdjective]} dog.`);
    }
}

createMessage(nameArray(), verbArray(), adjectiveArray());
