// // Write your solution here!
// const cats = ["Milo", "Otis", "Garfield"];

// function destructivelyAppendCat(name) {
//     cats.push(name);
//     return;
// } 

// function destructivelyPrependCat(name) {
//    cats.unshift(name);
// }

// function destructivelyRemoveLastCat(name) {
//     cats.pop(name);
// }

// function destructivelyRemoveFirstCat(name) {
//     cats.shift(name);
// }

// function appendCat(name) {
//     const newCats = [...cats, name];
//     return newCats;
// }

// function prependCat(name) {
//     const newCats = [name, ...cats];
//     return newCats;
// }

// function removeLastCat() {
//     const newCats = cats.slice(0,2);
//     return newCats;
// }

// function removeFirstCat() {
//     const newCats = cats.slice(1);
//     return newCats;
// }

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveFirstCat() {
    return cats.splice(0, 1);
}

function destructivelyRemoveLastCat() {
    return cats.splice(2, 1);
}

function appendCat(name) {
    let newCats = [...cats, name];
    return newCats;
}

function prependCat(name) {
    let newCats = [name, ...cats];
    return newCats;
}

function removeLastCat() {
    return cats.slice(0, 2);
}

function removeFirstCat() {
    return cats.slice(1);
}