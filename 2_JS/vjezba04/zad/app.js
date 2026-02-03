
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
  rezultat.innerHTML = '';
  const a = document.getElementById('a').value; // ovo je sve string - vrijednosti a b c d
  const b = document.getElementById('b').value;
  const c = document.getElementById('c').value;
  const d = document.getElementById('d').value;
  const zadatak = document.getElementById('zadatak').value; // tip podatka je isto string

  // Za svaki zadatak zahtijevamo određene ulaze
  if (zadatak === '1') {
    //console.log('1. zadatak');
    //console.log(a);

    // ovdje rješavam zadatak 1
    const x = Number(a)
    if(!x && x!=0){ //ako nije x - != znači jednako ili različito
      rezultat.innerHTML = 'Unesi broj u polje A'
      return
    }

    console.log(x)
    
    const y = Number(b)
    if(!y && y!=0){
      rezultat.innerHTML = 'Unesi broj u polje B'
      return
    }

    if(x>y){
      rezultat.innerHTML = x
    } else if(y>x){
      rezultat.innerHTML = y
    }
    else{
      rezultat.innerHTML = 'Brojevi su jednaki' //ne ispisuje br veće od 10 jer su a b c d string,a moramo ih prebaciti u number
    }
    return;
    }
    

  if (zadatak === '2') {
    const x= Number(a);
    const y= Number(b);
    const z= Number(c);

if(!x && x!=0){ 
      rezultat.innerHTML = 'Unesi broj u polje A'
      return
    }

     if(!y && y!=0){
      rezultat.innerHTML = 'Unesi broj u polje B'
      return
    }

     if(!z && y!=0){
      rezultat.innerHTML = 'Unesi broj u polje C'
      return
    }


if(x<y && x<z){
  rezultat.innerHTML = x;
  } else if (y<x && y<z){
    rezultat.innerHTML = y;
  } else {
    rezultat.innerHTML = z
  }


    return;
  }


  // ovo će se ispisati ako u HTML dodatke option za zadatak a ovdje ga ne obradite
  rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
});



