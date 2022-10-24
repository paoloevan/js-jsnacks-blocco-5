/*
Scrivi una funzione che fonda due array (aventi lo stesso numero di
elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

const arrayOne = [1, 2, 3, 4, 5];
const arrayTwo = ['a', 'b', 'c', 'd', 'e'];
let newArray = [];

sumArray(arrayOne, arrayTwo);

function sumArray(array1, array2) {
    for (let i = 0; i < array1.length; i++) {

        array1.forEach((elemento, index) => {
            if (index == i) {
                newArray.push(elemento);
            }
        })

        array2.forEach((elemento, index) => {
            if (index == i) {
                newArray.push(elemento);
            }
        })
        //console.log(myArray);
        //console.log(myArrayTwo);
    }
    console.log(newArray);
}




