const isDev=true;

// funkcija je skup naredbi s određenom svrhom, s ciljem višestrukog poziva  -> DRY

// osnovne vrste funkcija

// kod "klasične" funkcije redosljed definiranje/zvanje nije bitan
pozdraviSvijet();

// 1. ne prima parametre, ne vraća vrijednost
// 1.1. definiranje funkcije
function pozdraviSvijet(){ // ne prima parametre jer u zagradama () nema teksta  . tipa void
    // tijelo funkcije
    console.log('Hello world');
    // return;  -> void ne mora (ali može) imati return
}

// 1.2. poziv funkcije
log('Pozdravljam svijet');
pozdraviSvijet();



// 2. prima parametre, ne vraća vrijednost
// 2.1. definiranje funkcije
function parniBrojevi(odBroja, doBroja){ // prima dva parametra, navode se u () odvojeno zarezom
    const min = odBroja<doBroja ? odBroja : doBroja;
    const max = odBroja>doBroja ? odBroja : doBroja;
    for(let i=min;i<=max;i++){
        if(i % 2 ===0){
            console.log(i);
        }
    }
}
// 2.2. poziv funkcije
log('Prvi poziv parnih brojeva');
parniBrojevi(3,12);
log('Drugi poziv parnih brojeva');
parniBrojevi(48,25);

function log(poruka){
    if(!isDev){
        return;
    }
    console.log('\n');
    console.log('+---------------------------+');
    console.log(poruka);
    console.log('+---------------------------+');
}


// 3. ne prima parametre, vraća vrijednost
// 3.1 definiranje funkcije
function slucajniBroj(odBroja=0,doBroja=0){ // opcionalni parametri

    if(odBroja!=0 && doBroja!=0){
        return (Math.random()*(doBroja-odBroja)+odBroja).toFixed(0);
    }

    const broj = Math.random();
    const uvecano = broj * 1000;
    const cijeliBroj = parseInt(uvecano);
    return cijeliBroj;
}

// 3.2 korištenje funkcije
log(slucajniBroj());

// kada smo kod slučajnih brojeva
log((Math.random()*1000).toFixed(0)); // ovo je ekvivalent tijelu funkcije slucajniBroj

// ovo gore ipak ne osigurava slučajne brojeve između 100 i 999
log((Math.random()*(999-100)+100).toFixed(0));

log(slucajniBroj(100,999)); // odrađuje isti posao kao i linija 73 ali je čitljivije

// 4. prima parametre, vraća vrijednost   -> NAJČEŠĆE KORIŠTENA
// 4.1 definiranje funkcije
function zbrojPrimBrojeva(odBroja, doBroja){   // za ulaz 3,8 treba dati 15
    let suma=0, prim=false;
    for(let i=odBroja;i<=doBroja;i++){
        if(i<=1){
            continue;
        }
        prim=true;
        for(let j=2;j<i;j++){
            if(i % j === 0){
                prim=false;
                break;
            }
        }
        if(prim){
            suma += i;
        }
    }
    return suma;
}

// 4.2 poziv funkcije
log(zbrojPrimBrojeva(-2,100));

// pozdravArrow();   ne mogu pozvati prije definiranja

// arrow funkcije
const pozdravArrow = () => log('Hello arrow');

pozdravArrow();

const brojevi = {
    slucajniBroj: () => {
        return 7;
    },
    ime: 'Pero',
    nula: () => {return 0}
};

log(brojevi['nula']());