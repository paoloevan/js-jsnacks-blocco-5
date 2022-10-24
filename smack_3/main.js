/*
Scrivi una funzione che accetti una stringa come argomento e la ritorni
girata (es. Ciao -> oaiC)*/

const string = 'ciao';
reverseString(string);

function reverseString(myString) {
    console.log(myString);
    const split = myString.split('');
    //console.log(split);
    const reverse = split.reverse();
    //console.log(reverse);
    const newString = reverse.join('');
    console.log(newString);
}


