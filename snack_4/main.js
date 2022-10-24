/*
Scrivi una funzione che fonda due array (aventi lo stesso numero di
elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

const arrayOne = [1, 2, 3, 4, 5];
const arrayTwo = ['a', 'b', 'c', 'd', 'e'];
let newArray = [];

for (let i = 0; i < arrayOne.length; i++) {
    
    arrayOne.forEach((elemento, index) => {
        if (index == i) {
            newArray.push(elemento);
        }
    })

    arrayTwo.forEach((elemento, index) => {
        if (index == i) {
            newArray.push(elemento);
        }
    })
    //console.log(myArray);
    //console.log(myArrayTwo);
}
console.log(newArray);


