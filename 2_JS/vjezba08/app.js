
// beskonačna while petlja
while(true){
    console.log('Edunova');
    break;
}


let brojac=0;
console.time('while petlja');
while(brojac++<100){
    //console.log(brojac);
    //if(brojac %50 ===0){
      //  console.timeLog('while petlja');
    //}
}
console.timeEnd('while petlja');

// zbroji sve znamenke danog broja
let brojUnos='1262'; //11
console.time('ZB1');

let zbroj=0;
for(let i=0;i<brojUnos.length;i++){
    zbroj += parseInt(brojUnos[i]);
}
console.log(zbroj);
console.timeEnd('ZB1');

console.time('ZB2');

let broj = parseInt(brojUnos); // sigurno sam pozvao samo jednom O(1)

zbroj=0; // reuse varijablu zbroj
while(broj>0){
    zbroj += broj % 10; // tu sam uzeo zadnji broj (npr 2) i nadodao ga na zbroj
    broj = broj - (broj % 10); // skidam zadnji broj na 0
    broj /= 10; // ovo ovdje moram u 2 koraka broj JS Number
}
console.log(zbroj);

console.timeEnd('ZB2');

// čitati više o optimizaciji
// Big O notacija

/**
 * BIG O NOTATION - TABLICA KOMPLEKSNOSTI
 * ---------------------------------------------------------------------------------------
 * | Notacija     | Naziv                | Ocjena      | Primjer operacije               |
 * |--------------|----------------------|-------------|---------------------------------|
 * | O(1)         | Konstantno           | Izvrsno     | Pristup elementu preko indeksa  |
 * | O(log n)     | Logaritamsko         | Odlično     | Binarno pretraživanje           |
 * | O(n)         | Linearno             | Dobro       | Jednostavna petlja (for/forEach)|
 * | O(n log n)   | Linearno-logaritamsko| Solidno     | Merge Sort, Quick Sort          |
 * | O(n^2)       | Kvadratično          | Loše        | Dvostruka ugniježđena petlja    |
 * | O(2^n)       | Eksponencijalno      | Vrlo loše   | Rekurzivni Fibonacci            |
 * | O(n!)        | Faktorijelno         | Katastrofa  | Brute-force rješenja            |
 * ---------------------------------------------------------------------------------------
 * * LEGENDA RASTA (n = broj elemenata):
 * - O(1)       -> Vrijeme je uvijek isto (npr. 1ms)
 * - O(log n)   -> Ako se n poveća 100x, vrijeme se poveća samo par puta
 * - O(n)       -> Ako se n poveća 100x, vrijeme se poveća 100x
 * - O(n^2)     -> Ako se n poveća 100x, vrijeme se poveća 10,000x!
 */


// ČINJENICA: nit u for, niti u while se ne mora ući

let br = 5; // ovo ne znamo koja će biti vrijednost

for(let i=0;i>br;i--){
    console.log('Ušao u petlju', i);
}

let podaciSAPI = [];
// [
//     {
//         ime: 'Pero'
//     },
//     {
//         ime: 'Marko'
//     }
// ];

while(podaciSAPI.length>0){
    console.log('Ušao u while petlju', podaciSAPI.pop()?.ime);
}

