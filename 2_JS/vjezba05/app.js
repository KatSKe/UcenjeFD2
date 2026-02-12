// switch je višestruko grananje
// switch radi sa svim tipovima podataka i provjerava s === (provjera i po tipu i po vrijednosti)
// sve što se može sa switch može se i s if

const ocjena = 3;

switch(ocjena){
    case 1:
        console.log('Nedovoljan');
        break;
    case 2:
        console.log('Dovoljan');
        break
    case 3:
        console.log('Dobar');
         break;
    case 4:
        console.log('Vrlo dobar');
        break
    case 5:
        console.log('Vrlo dobar');
        break;
    default:
        console.log('Nije ocjena');
}