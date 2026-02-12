
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
  rezultat.innerHTML = '';
  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const c = document.getElementById('c').value;
  const d = document.getElementById('d').value;
  const zadatak = document.getElementById('zadatak').value;

  // Za svaki zadatak zahtijevamo određene ulaze
  if (zadatak === '1') {
   // console.log('1. zadatak');
   // console.log(a);
   
   //ovdje rjesavam zad 1
   const x= Number(a)
   if(!x && x!=0){
    rezultat.innerHTML='Unesite broj u polje A'
    return;
   }

   const y= Number(b)
   if(!y && y!=0){
     rezultat.innerHTML='Unesite broj u polje B'
     return;
    }

   if(x>y){
      rezultat.innerHTML=x
    } else if(y>x){
      rezultat.innerHTML = y
    } 
    else{
      rezultat.innerHTML='Brojevi su jednaki'
    }
    return;
  }
//kraj zad 1

//zadatak 2

  if (zadatak === '2') {
    const x= Number(a);
    const y= Number(b);
    const z= Number(c);

   if(!x && x!=0){
    rezultat.innerHTML='Unesite broj u polje A'
    return;
   }

    if(!y && y!=0){
    rezultat.innerHTML='Unesite broj u polje B'
    return;
   }

    if(!z && z!=0){
    rezultat.innerHTML='Unesite broj u polje C'
    return;
   }

   if(x<y && x<z){
    rezultat.innerHTML=x
   } else if(y<x && y<z){
    rezultat.innerHTML=y
   } else {
    rezultat.innerHTML=z
   }
    return;
  }
  //kraj zad 2

  

// ----------------------------------------------------------------
  /*[ZADATAK 4]
      Provjera punoljetnosti: 
    Korisnik unosi godinu rođenja u polje A. 
    Izračunaj njegovu dob u odnosu na tekuću godinu i ispiši je li punoljetan ili nije.
  */

// zadatak 4 – provjera punoljetnosti - NIJE DOBRO: AKO UNESEM BR. 87.,RAČUNA UMJESTO DA ME ISPRAVI 

/*if (zadatak === '4') {
  const godinaRodenja = Number(a);

  if (!godinaRodenja && godinaRodenja != 0) {
    rezultat.innerHTML = 'Unesite godinu rođenja u polje A';
    return;
  }

  function dohvatiTrenutnuGodinu() {
  const danas = new Date();
  return danas.getFullYear();
}
  const trenutnaGodina = dohvatiTrenutnuGodinu();
  const dob = trenutnaGodina - godinaRodenja;

  if (dob >= 18) {
    rezultat.innerHTML = 'Punoljetni ste (' + dob + ' godina)';
  } else {
    rezultat.innerHTML = 'Niste punoljetni (' + dob + ' godina)';
  }

  return;
}
  */


if (zadatak === '4') {
  const godinaRodenja = Number(a);

  if (!godinaRodenja && godinaRodenja != 0) {
    rezultat.innerHTML = 'Unesite godinu rođenja u polje A';
    return;
  }

  function dohvatiTrenutnuGodinu() {
    const danas = new Date();
    return danas.getFullYear();
  }

  const trenutnaGodina = dohvatiTrenutnuGodinu();

  // dodatne provjere ispravnosti godine
  if (godinaRodenja < 1900 || godinaRodenja > trenutnaGodina) {
    rezultat.innerHTML = 'Unesite ispravnu godinu rođenja (npr. 1998)';
    return;
  }

  const dob = trenutnaGodina - godinaRodenja;

  if (dob >= 18) {
    rezultat.innerHTML = 'Punoljetni ste (' + dob + ' godina)';
  } else {
    rezultat.innerHTML = 'Niste punoljetni (' + dob + ' godina)';
  }

  return;
}


    
// kraj zadatka 4


// ----------------------------------------------------------------

  /*


//----------------------------------------------------------------
 

 /*[ZADATAK 6]
 Parnost broja: 
 Provjeri je li uneseni broj u polju A paran ili neparan koristeći modulo operator (%).

 ----------------------------------------------------------------
 
 [ZADATAK 7]
 Ocjenjivanje: 
 Na temelju unesenog broja bodova (0-100) u polje A, ispiši ocjenu:
 90-100: Odličan, 80-89: Vrlo dobar, 70-79: Dobar, 60-69: Dovoljan, <60: Nedovoljan.

 ----------------------------------------------------------------
 
 [ZADATAK 8]
 Djeljivost: 
 Provjeri je li broj u polju A djeljiv s brojem u polju B bez ostatka. 
 Ispiši "Djeljiv je" ili "Nije djeljiv".  
  */

// zadatak 6 (ispravi redosljed!!)


if (zadatak === '6'){
  const x = Number (a);
  const y = Number (b);
  const z = Number (c),k = Number (d);
  console.log(x, y, z, k);

  if(!x){
    rezultat.innerHTML = ' Unesi broj u polje A';
    return;
  }

  if(y){
    rezultat.innerHTML = ' Unesi broj u polje B';
    return;
  }

  if(!z){
    rezultat.innerHTML = ' Unesi broj u polje C';
    return;
  }

  if(!k){
    rezultat.innerHTML = ' Unesi broj u polje D';
    return;
  }

rezultat.innerHTML = (x+y)*(z+k);


return;
}





  
  // ovo će se ispisati ako u HTML dodatke option za zadatak a ovdje ga ne obradite
  rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
});


 /*[ZADATAK 5]
    Pozitivan, negativan ili nula: 
  Za uneseni broj u polju A ispiši poruku je li on pozitivan, negativan ili je nula.
  */

  // zadatak 5 - Pozitivan, negativan ili nula

  



/*  if (zadatak === '5') {
  
  const x = Number(a);

  if (!x && x != 0) {
    rezultat.innerHTML = 'Unesite broj u polje A';
    return;
  }

  if (x > 0) {
    rezultat.innerHTML = 'Broj je pozitivan';
  } else if (x < 0) {
    rezultat.innerHTML = 'Broj je negativan';
  } else {
    rezultat.innerHTML = 'Broj je nula';
  }

  return;
}
*/

// kraj zadatka 5


