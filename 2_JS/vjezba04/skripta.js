// uvjetno grananje if

// if radi s boolean tipom podataka

const uvjet=true;

// osnovna if sintaksa - treba samo if granu
if(uvjet){ // u if granu se ulazi ako je true
    console.log('Uvjet je true');
}

// OVO NIKADA NE RADITI - RED FLAG
//  if(uvjet==true){
//    console.log('NE, NE I NE'); // ISTO VRIJEDI I ZA ===
//  } 


// pošto if radi s boolean imamo i drugu granu
if(uvjet){
    console.log('true');
}else{
    console.log('false');
}

// rad s {}
// kada se uvjet prijenjuje samo na jednu liniju nakon if ili else
// mi ćemo uvijek koristiti {}    
if(!uvjet)
    console.log('false')
else
    console.log('!true');
console.log('Ovo se izvodi uvijek, nije dio else');

const ocjena = 2;

if(ocjena===2){
    console.log('Dovoljan');
}else if(ocjena===3){
    console.log('Dobar');
}
// i mogu imati koliko god želim else if
else{
    console.log('Ocjena nije 2 niti 3');
}

// ternarni operator ? :
// ukoliko je rezultat uvjeta uvijek ista akcija onda koristimo ? :
if(ocjena>0 && ocjena<=5){
    console.log('Nije ocjena');
}

console.log(ocjena>0 && ocjena<=5 ? 'Ocjena je valjana' : 'Nije ocjena');

// JS specifičnosti
// falsy i truly

const ime=''; //string
if(ime!=''){
    console.log('Varijabla ime ima vrijednost');
}else{
    console.log('ime nema vrijednost');
}

// falsy broj: 0
// falsy objekt: null
// falsy za varijblu: undefine
// falsy: NaN (Not a number)

const b = Number('aaa');
console.log(b); // Nan

if(!b){
    console.log('b nije broj');
}

// falsy primjer za null
if(ime==null){

}
// mogu napisati
if(ime){
    
}