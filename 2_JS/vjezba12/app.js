
// funkcionalne metode skraćuju kod, stanardno se koriste

// prvo nam trebaju podaci

const korisnici = [
    { id: 1, ime: 'Ana', prezime: 'Kartek', godina: 25, admin: false },
    { id: 2, ime: 'Karlo', prezime: 'Totig', godina: 29, admin: false },
    { id: 3, ime: 'Marko', prezime: 'Ćutić', godina: 45, admin: true },
    { id: 4, ime: 'Nikolina', prezime: 'Ćutić', godina: 49, admin: true },
    { id: 5, ime: 'Žana', prezime: 'Đitko', godina: 18, admin: false }
];

// forEach()

// onako kako znate ispišite samo imena korisnika jedno ispod drugog u konzolu

for (let i = 0; i < korisnici.length; i++) {
    console.log(korisnici[i].ime);
}

console.log('******************************');


korisnici.forEach(korisnik => console.log(korisnik.ime));


console.log('******************************');

korisnici.forEach(o => console.log(`${o.ime} ${o.prezime}`));


console.log('******************************');

korisnici.forEach(o => {
    let oslovi = 'Poštovan';
    if (o.ime.endsWith('a')) {
        oslovi += 'a gospođo';
    } else {
        oslovi += 'i gospodine';
    }
    console.log(`${oslovi} ${o.ime} ${o.prezime}`)
});

console.log('******************************');

korisnici.forEach(o => console.log(`Poštovan${o.ime.endsWith('a') ? 'a gospođo' : 'i gospodine'} ${o.ime} ${o.prezime}`));

console.log('******************************');

// map()

// želim iz niza korisnici napraviti novi niz koji ima samo imena

const samoImena = korisnici.map(o => o.ime);

console.table(samoImena);

const imePrezime = korisnici.map(o => o.ime + ' ' + o.prezime);

console.table(imePrezime);

const maliNiz = korisnici.map(({ id, ime, prezime }) => ({ sifra: id, osoba: ime + ' ' + prezime }));

console.table(maliNiz);


// find()
console.log(korisnici.find(o => o.id === 10)?.ime);

// nađi po imenu i prezimenu i ispiši id
console.log(korisnici.find(o => o.ime === 'Ana' && o.prezime === 'Kartek').id);

// findIndex()

console.log(korisnici.findIndex(o => o.id === 10)); // findIndex vrati -1 ako nije pronašao


// filter()

console.table(korisnici.filter(o => o.godina > 40));

// reduce()
console.log(korisnici.reduce((suma, o) => suma + o.godina, 0)); // 0 je početna vrijesnt sume


// some()
console.log(korisnici.some(o => o.admin) ? 'Ima admin' : 'Nema adnim');

// every()

console.log(korisnici.every(o => o.godina >= 18) ? 'Svi su punoljetni' : 'Nisu svi punoljetni');
