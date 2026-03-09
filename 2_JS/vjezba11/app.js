
// Try catch je mehanizam osiguranja da nam program ne pukne na način da omogućuje obradu iznimke (greške)
// kod koji ima grešku
/*
console.log('Početak programa');
const i=7;

const rezultat = i + varijabla;

console.log(rezultat);

console.log('Kraj programa');
*/

// osnovna try catch sintaksa

try{
    console.log('Početak programa');
    const i = 7;
    const rezultat = i + varijabla;
    console.log(rezultat);
}catch(e){
    console.log('Greška', e.name, e.message, e);
}
console.log('Kraj programa');

// opcionalna sintaksa ima još i finally

console.log('Primjer 2');
const i = 7;
let rezultat = 0;
try{
    // ovo se uvijek izvodi i ako se ovdje dogodi iznimka ide u catch
    rezultat = i + varijabla;
}catch(e){
    // ako se ovdje dogodi iznimka, program ipak "puca"
    rezultat = i + 1; // ovo je moja obrada koja i nije morala biti ovakva
}finally{
    console.log(rezultat);
}
console.log('Kraj primjer 2');


// funkcija može baciti iznimku (Error)

function korijen(broj){
    if(broj<=0){
        throw new Error('Ne mogu izvaditi drugi korijen iz nule ili negativnog broja');
    }
    return Math.sqrt(broj);
}

try{
    console.log(korijen(9));
}catch(e){
    console.log(e);
}



console.log('Nakon korijena');




// koliko puta se rekurzija izvodi

let brojac = 0;

function teskaRekurzija() {
  //let a = 1; let b = 2; let c = 3; let d = 4; let e = 5;
  //let f = "Neki dugački string koji zauzima prostor";
  
  brojac++;
  teskaRekurzija();
}

try {
  teskaRekurzija();
} catch { // ne moramo navesti parametar ako ga ne koristimo
  console.log("Stog je pukao na: " + brojac);
}


