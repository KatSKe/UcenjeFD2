// ponavljanje (iteracija), petlje (loops)

// s trenutnim znanjem ispisati u konzolu 10 puta jedno ispod drugog Edunova

console.log('Edunova');
console.log('Edunova');
console.log('Edunova');
console.log('Edunova');
console.log('Edunova');
console.log('Edunova');
console.log('Edunova');
console.log('Edunova');
console.log('Edunova');
console.log('Edunova');

// ovako nećemo raditi već ćemo naučiti ponavljati naredbe

// klasična for petlja

// for ( inicijalna vrijednost varijable ; uvjet izlaska iz petlje ; promjena varijable petlje )

console.log('==============================');

for(let i=0;i<10;i++){
    console.log('Edunova');
}


console.log('==============================');

for(let i=0;i<10;i++) console.log('Edunova');

console.log('==============================');


for(let i=0;i<10;i++){
    console.log(`i=${i+1}`);
}


console.log('==============================');

let suma=0;

for(let i=0;i<10;i++){
    suma += i+1;
    //debugger; // aktiviranje debugger u pregledniku
}
console.log(suma);
console.log((100*(100+1))/2); // suma prvih 100 brojeva

console.log('==============================');

// ugnježđivanje petlji
for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
        console.log((i+1)*(j+1));
    }
}

console.log('==============================');

// petlju je moguće preskočiti i nasilno prekinuti
for(let i=0;i<10;i++){
    if(i===3){
        continue;
    } // continue je nastavi od for a to zapravo znači da se preskače sve nakon ovof if-a

    if(i===7){
        break; // nije me briga što treba ići do 10, prekidaj petlju
    }

    // ovdje su zadovoljeni svi uvjeti ostanka u petlji
    console.log(i);


}
console.log('==============================');
// for s niz-om
const niz = [1,2,3,4,5,6,7];

// ispisati sve elemente niza
for(let i=0;i<niz.length;i++){
    console.log(niz[i]);
}

console.log('==============================');

// niz unazad
for(let i=niz.length-1;i>=0;i--){
    console.log(niz[i]);
}

// najčešće idemo po elementima niza od početka do kraja i zato postoji pojednostavljena sintaka
console.log('==============================');
for(const broj of niz){
    console.log(broj);
}

console.log('==============================');

// for s stringom
const ime = 'Nina';
for(let i=0;i<ime.length;i++){
    console.log(ime[i]);
}

console.log('==============================');

// beskonačna for petlja
let b=0;
for(;;){
    if(b>50){
        break;
    }
    console.log(b++);
}

