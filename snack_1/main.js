/*
Crea un array di 10 oggetti che rappresentano una zucchina, indicando
per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.*/

const zucchine = [
    {
        varietà: 'uno',
        peso: 3,
        lunghezza: 15
    },
    {
        varietà: 'due',
        peso: 5,
        lunghezza: 15
    },
    {
        varietà: 'tre',
        peso: 8,
        lunghezza: 15
    },
    {
        varietà: 'quattro',
        peso: 2,
        lunghezza: 15
    },
    {
        varietà: 'cinque',
        peso: 4,
        lunghezza: 15
    },
    {
        varietà: 'uno',
        peso: 3,
        lunghezza: 15
    },
    {
        varietà: 'due',
        peso: 5,
        lunghezza: 15
    },
    {
        varietà: 'tre',
        peso: 8,
        lunghezza: 15
    },
    {
        varietà: 'quattro',
        peso: 2,
        lunghezza: 15
    },
    {
        varietà: 'cinque',
        peso: 4,
        lunghezza: 15
    }
];

let sum = 0;

zucchine.forEach(element => {
    const {peso} = element;
    //console.log(peso);
    sum += peso;

});

console.log('Peso totale: ', sum);
