
// OOP - Objektno orjentirano programiranje

// Probajte se natjerati napamet naučiti što je klasa a što objekt (I1, I2)

// I1: Klasa je opisnik objekta

class Osoba {
    // # označavaju skriveno privatno svojstvo
    // OOP princip Učahurivanje (encapsulation)
    // 1. Klasa će sakriti svoja svojstva
    #ime;

    // OOP princip Učahurivanje (encapsulation)
    // 2. Klasa će učiniti svoja svojstva dostupna pute get set metoda
    get ime() { return this.#ime; }
    set ime(s) { this.#ime = s; }

    // poziva se s ključnom rječju new
    constructor(ime = '') {
        if (ime.length > 0) {
            this.#ime = ime;
        }
    }


}

// I2: Objekt je pojavnost (instanca) klase
// varijabla osoba je instanca klase Osoba
const osoba = new Osoba(); // new je poziv konstruktora
const datum = new Date();
osoba.ime = 'Pero';
console.log(osoba.ime);

const o = new Osoba('Đurđica');
console.log(o.ime);


// OOP princip: Nasljeđivanje
// klasa će nasljediti metode nadklase, jedna klasa može nasljediti samo jednu nadklasu
class Polaznik extends Osoba {
    #odradioObaveze;
    get odradioObaveze() { return this.#odradioObaveze; }
    set odradioObaveze(b) { this.#odradioObaveze = b; }

    constructor(ime = '', oo = false) {
        super(ime);
        this.#odradioObaveze = oo;
    }
}

const p = new Polaznik('Karlo',true);

console.log(p.ime, p.odradioObaveze);

class Predavac extends Osoba{
    #vrsta;
    get vrsta(){return this.#vrsta;}
    set vrsta(s){this.#vrsta=s;}
    constructor(ime='',vrsta=''){
        super(ime);
        if(vrsta.length>0){
            this.#vrsta=vrsta;
        }
    }
    toString(){
        return `${this.vrsta} ${super.ime}`;
    }
}

const pr = new Predavac('Pero Perić','vanjski suradnik');

console.log(pr);
console.log(`${pr}`);

// OOP princip Višeobličje (polimorfizam)
// više čitati o OOP na
// https://github.com/tjakopec/OOP_JAVA_PHP_PYTHON_SWIFT

console.log(Math.random());

// Ideja objekata jest da spremaju stanje u svoja svojstva i pamte
// Postoji situacija kada ne treba spremati stanje već samo implementirati neki algoritam


class Pomocno{
    static slucajniBroj(){
        // dolazi logika slučajnog broja, ima negdje
        return 7;
    }
}

console.log(Pomocno.slucajniBroj());