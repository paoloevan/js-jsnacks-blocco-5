/*
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.

Crea quindi un nuovo array inserendo, per ogni persona,
una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/

const persons = [
    {
        nome: 'mario',
        cognome: 'rossi',
        età: 90
    },
    {
        nome: 'maria',
        cognome: 'bianchi',
        età: 20
    },
    {
        nome: 'paolo',
        cognome: 'rossi',
        età: 10
    },
    {
        nome: 'pinco',
        cognome: 'verdi',
        età: 16
    },
    {
        nome: 'pallo',
        cognome: 'rossi',
        età: 20
    }
]

const newPersons = persons.map((element) => {
    if (element.età >= 18) {
        //console.log(element.nome, element.cognome, 'guida', element.età);
        return element.nome + ' ' + element.cognome + ' può guidare'
    } else {
        //console.log(element.nome, element.cognome, 'non guida', element.età);
        return element.nome + ' ' + element.cognome + ' non può guidare'
    }
})
console.log(newPersons);