// nizovi su struktura podataka
// niz omogućuje pohranjivanje više vrijednosti u jednoj varijabli

// prazan niz
const parazanNiz=[];
console.log(parazanNiz);

// potreba unosa 12 temperatura u godini dana
const temperature = [-2,2,10,15,21,26,28,31,28,19,10,4];

console.log(temperature);

// često me zanima samo ukupan broj elemenata: length
console.log(temperature.length);

// niz ima pojam index i on počinje s 0
console.table(temperature);

// prvi element je na indeksu 0
// zadnji element je na length-1

// korištenje pojedinog elementa
// ispiši 1. element
console.log(temperature[0]);


const zadnji = temperature.length-1;

// ispiši zadnji element
console.log(temperature[zadnji]);


// češće se koristi
console.log(temperature[temperature.length-1]);

// const se ne može mijenjati
// kod nizova to znači da ga ne mogu redeklarirati niti promjeniti tip
//temperature=[2,2];
//temperature='Osijek';

// ispravi siječanjsku temperaturu na -1
temperature[0] = -1;
console.table(temperature);

// niz može imati sve tipove podataka i mogu biti mješani

// poanavljanje tipova podataka ptp
const ptp=[
    10, // number
    'Osijek', // string
    true, // boolean
    Symbol('id'), // jedinstvena vrijednost
    undefined, // nedefinirano
    null, // objekt nema vrijednost,
    [], // array
    {ime: 'Edunova'}, // object
    18n, // bigint
];

// u JS u nizovima može biti zarez nakon zadnjeg elementa
console.table(ptp);

// ovo gore su sve jednodimenzionalni nizovi (lista, vektor)

// nizovi u JS mogu teoretski imati beskonačni broj dimenzija

// 2D niz je tablica (matrica)

const tablica = [
    [1,2,3], // index reda 0
    [4,5,6], // index reda 1
    [7,8,9]  // index reda 2
];


// u 2D nizu prvo ide red pa u redu kolona

// ispisati vrijenost 7
console.log(tablica[2][0]);

// umjesto vrijednosti 6 postaviti 11
tablica[1][2] = 11;

console.table(tablica);

// 3D niz je kocka

// 4D niz je tenzor

// 1D s 10 elemenata ima ukupno 10 vrijednosti
// 2D s 10x10 ima ukupno 100 vrijednosti
// 3D s 10x10x10 ima ukupno 1000 vrijednosti