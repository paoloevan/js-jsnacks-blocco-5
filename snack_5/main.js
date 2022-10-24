/*
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione
compresa tra “a” e “b”
*/

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const aNum = 3;
const bNum = 7;
//la funzione ritornerà [4,5,6,7,8]

selectElement(myArray, aNum, bNum)

function selectElement(array, aNum, bNum) {
    const newArray = array.filter((element, index) => {
        if ((index >= aNum) && (index <= bNum)) {
            return element
        }
    })
    console.log(newArray);
}
