// uvjetno grananje if

// if radi s boolean tipom podatka

const uvjet=true;

// osnovna if sintaksa - treba samo if granu
if(uvjet){ // u if granu se ulazi ako je true
    console.log('Uvjet je true');
}

// OVO NIKADA NE RADITI - RED FLAG
if(uvjet==true){
    console.log('NE NE i NE');
}


// pošto if radi s boolean imamo i drugu granu
if(uvjet){
    console.log('true');
}else{
    console.log('false');
}

// rad s {}
// kada se uvjet primjenjuje samo na jednu liniju nakon if ili else ne trebaju {}
// mi ćemo uvijek koristiti {}
if(!uvjet)
    console.log('!false');
else
    console.log('!true');
    console.log('Ovo se izvodi uvijek, nije dio else')

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
    console.log('Ocjena je valjana');
}else{
    console.log('Nije ocjena');
}
// inline if
console.log(ocjena>0 && ocjena<=5 ? 'Ocjena je valjana' : 'Nije ocjena');

// JS specifičnosti
// falsy i truly

const ime=''; //string
if(ime){
    console.log('Varijabla ime ima vrijesnost');
}else{
    console.log('ime nema vrijednost');
}

// falsy broj: 0
// falsy objekt: null
// falsy za varijablu: undefine
// falsy: NaN (Not a number)

const b = Number('aaaa');
console.log(b); // NaN

if(!b){
    console.log('b nije broj');
}

// falsy primjer za null
if(ime==null){

}
// mogu napisati
if(ime){
    
}