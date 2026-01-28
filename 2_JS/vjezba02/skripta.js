// varijabla je prostor u memoriji
// može biti različitih tipova podataka
// u JS ES6 postoji tri načina definiranja varijabli

//ulaz podatka u program
// prompt uvijek unosi string
const ime = 'Katarina'; // prompt('Unesi svoje ime');
// simuliram da je svaki puta s pomoću prompt uneseno Katarina
// a to radim da ene moram svaki puta unositi

console.log(typeof ime, ime);

console.log(`Dobar dan ${ime}!`);

const unosGodina = '2026'; // simuliram unos kroz prompt

// konverzija podataka iz stringa u prompt
const godina = Number(unosGodina);

console.log(typeof godina, godina+1); // ovdje uveća za 1
console.log(typeof unosGodina, unosGodina+1); // ovdje se stringu 2026 nadoljepilo još 1 i dobilo 20261


const cijeliBroj = parseInt('7');
console.log(typeof cijeliBroj, cijeliBroj);

const decimalniBroj = parseFloat('3.14'); // za decimalni dio se piše .

console.log(typeof decimalniBroj, decimalniBroj);

// logička vrijednost

const logickaVrijednost = true; // ili false

console.log(typeof logickaVrijednost, logickaVrijednost);

// const se ne može mijenjati
// logickaVrijednost = false; ovo ne može - Uncaught TypeError: Assignment to constant variable.


// ne omože se redeklarirati const
// const logickaVrijednost = false;


// sljedeći način definiranja varijable - pravi način = let

let broj = 7;
console.log(typeof broj, broj);
broj = 8;
console.log(typeof broj, broj);
// let može promijeniti tip podataka
broj = '7';
console.log(typeof broj, broj);

// ne može se redeklarirati
// let broj = true;

// staro, ne koristiti - što ne znači da ne postoji
var x = 8;
console.log(typeof x, x);
x='8';
console.log(typeof x, x);
var x = true; // može se redeklarirati
console.log(typeof x, x);


const velikiBroj = 837646484040n;
console.log(typeof velikiBroj, velikiBroj);

// ne mogu deklarirati konstantu bez vrijednosti
// const i;

let i; // i ili tako nešto, nazov varijable može biti kakav god, bitno da je let
console.log(typeof ime, i);

i=7;
console.log(typeof ime, i);


let o = null;
console.log(typeof o, o);
o = 8;
console.log(typeof o, o);

// JSON - JavaScript Object Notation
o = {
    id: 1001,
    ime: 'Pero',
    prezime: 'Perić',
    znaProgramirati: false
};
console.log(typeof o,o);
console.table(o);

// Array, niz, polje
let niz = [2,3,4,5] // altgr + f daje []
console.log(typeof niz, niz); // kaže da je object
console.table(niz);

const backend = [
    {
        id: 1,
        ime: 'Marina',
        prezime: 'Generacija',
        znaProgramirati: true
    },
    {
        id:2,
        ime: 'Karlo',
        prezime: 'Perić',
        znaProgramirati: false
    },
    {
        id: 3,
        ime: 'Maja',
        prezime: 'Katić',
        znaProgramirati: false
    }
];
console.log(typeof backend, backend);
console.table(backend);

// tijelo funkcije - stari način
function pozdrav(){
    console.log('Pozdrav 1');
}

console.log(typeof pozdrav, pozdrav);
// poziv funkcije
pozdrav();

const pozdravi = () => console.log('Pozdrav 2');
console.log(typeof pozdravi, pozdravi);
pozdravi();


const id1 = Symbol('edunova'); // edunova je opis, sli je vrijednost jedinstvena ali mi ju ne znamo
const id2 = Symbol('edunova');

console.log(typeof id1, id2);


// operator uspoređivanja
// ==   ->  samo po vrijednosti '2' je isto što i 2
// ===  -> provjerava i po tipu i po vrijednosti '2' nije isto što i 2

console.log(id1 == id2);
console.log(id1 === id2);