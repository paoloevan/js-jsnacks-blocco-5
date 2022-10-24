/*
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.*/

const zucchine = [
    {
        varietà: 'uno',
        peso: 3,
        lunghezza: 13
    },
    {
        varietà: 'due',
        peso: 5,
        lunghezza: 14
    },
    {
        varietà: 'tre',
        peso: 8,
        lunghezza: 16
    },
    {
        varietà: 'quattro',
        peso: 2,
        lunghezza: 15
    },
    {
        varietà: 'cinque',
        peso: 4,
        lunghezza: 12
    },
    {
        varietà: 'uno',
        peso: 3,
        lunghezza: 30
    },
    {
        varietà: 'due',
        peso: 5,
        lunghezza: 8
    },
    {
        varietà: 'tre',
        peso: 8,
        lunghezza: 12
    },
    {
        varietà: 'quattro',
        peso: 2,
        lunghezza: 18
    },
    {
        varietà: 'cinque',
        peso: 4,
        lunghezza: 10
    }
];

//filtro le zucchine a seconda del peso
const pesanti = zucchine.filter(zucchina => {
    if (zucchina.lunghezza >= 15) {
        return true
    }

})
console.log('Zucchine più lunghe di 15cm: ', pesanti);

const leggere = zucchine.filter(zucchina => {
    if (zucchina.lunghezza < 15) {
        return true
    }

})
console.log('Zucchine meno lunghe di 15cm: ',leggere);

let sumLunghe = 0;

pesanti.forEach(element => {
    const {peso} = element;
    //console.log(peso);
    sumLunghe += peso;

});

console.log('Peso totale zucchine lunghe: ', sumLunghe);

let sumCorte = 0;

leggere.forEach(element => {
    const {peso} = element;
    //console.log(peso);
    sumCorte += peso;

});

console.log('Peso totale zucchine corte: ', sumCorte);