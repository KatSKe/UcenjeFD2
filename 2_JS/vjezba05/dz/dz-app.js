
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
  rezultat.innerHTML = '';
  const a = document.getElementById('a').value;
  const zadatak = document.getElementById('zadatak').value;

  switch (zadatak) {
    case '1':
      // rješavanje 1. zadatak

      // kraj rješavanje 1. zadatak
    break;
    case '2':
      // rješavanje 2. zadatak

      // kraj rješavanje 2. zadatak
    break;
    case '3':
      // rješavanje 3. zadatak

      // kraj rješavanje 3. zadatak
    break;
    case '4':
      const x=Number(a);
      if(!x){
        rezultat.innerHTML='Unesi broj pls'
        return;
      }
      rezultat.innerHTML=x>100? `${x} je veci od 100` : `${x} je manji od 100`;
      
      break;

    // Za uneseni niz znakova ispisi koliko je znakova uneseno
    case '5':
      if(!a){
        rezultat.innerHTML='Unesi broj'
        return;
      }

      rezultat.innerHTML=a.length 

      break;


    //Za uneseno ime namirnice ispisi da li je voce ili meso ili ne mozes odrediti
    case '6':
      if (!a){
        rezultat.innerHTML='Unesite namirnicu'
        return;
      }

      const aCisto = a.toLowerCase()

      if(aCisto=== 'jabuka' || aCisto==='kruska' || aCisto==='banana'){
        rezultat.innerHTML= 'Voce je'
      }else if(aCisto==='janjetina' || aCisto==='svinjetina' || aCisto==='teletina'){
        rezultat.innerHTML= 'Meso je'
      }else{
        rezultat.innerHTML= 'Ne mogu odrediti'
      }

    break;


    case '7':
      const doBroja = Number(a);
      if(!doBroja){
        rezultat.innerHTML='Nisi unio broj';
        return;
      }
      if(doBroja<=1){
        rezultat.innerHTML='Obaezno broj veci od 1';
        return;
      }

      let s='';
      for(let i=1;i<=doBroja;i++){
        if(i===doBroja){
          s += 1;
        }else{
          s += i + ', ';
        }
      }
      rezultat.innerHTML = s;

    break;
    default:
      rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
  }

});


// Zadaci

// 1. zadatak
// Napiši program koji prima string komandu ("start", "stop", "pauza") i ispisuje odgovarajuću poruku.
// Primjer ulaza: "pause"
// Ispis: "Pauza programa"

// 2. zadatak
// Napiši program koji prima ocjenu ("A", "B", "C", "D", "F") i ispisuje:
// "Položio" za "A", "B", "C"
// "Nije položio" za "D" i "F"

// 3. zadatak
// Napiši program koji prima broj bodova (0–100) i ispisuje ocjenu:
// < 50 → "Nedovoljan"
// 50–64 → "Dovoljan"
// 65–79 → "Dobar"
// 80–89 → "Vrlo dobar"
// 90–100 → "Odličan"
// Napomena: koristi switch(true).

