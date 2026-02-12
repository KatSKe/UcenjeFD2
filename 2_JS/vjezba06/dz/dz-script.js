document.getElementById("izvedi").addEventListener("click", function () {

    let A = document.getElementById("a").value;
    let B = document.getElementById("b").value;

    // ako je broj – pretvori u number
    if (!isNaN(A) && A.trim() !== "") A = Number(A);
    if (!isNaN(B) && B.trim() !== "") B = Number(B);

    console.clear();
    console.log("A =", A);
    console.log("B =", B);
    console.log("====================================");

    // ZADATAK 1
    let z1 = [A, 20, 30, B];
    console.log("Z1 -> Prvi:", z1[0], "Zadnji:", z1[z1.length - 1]);

    // ZADATAK 2
    let index;
    if (typeof B === "number") {
        index = B;
    } else {
        index = B.length;
    }
    let z2 = ["a", A, "c"];
    console.log("Z2 -> Index:", index, "Vrijednost:", z2[index]);

    // ZADATAK 3
    let z3 = [A, B, 3];
    if (z3.length >= 2) {
        [z3[0], z3[1]] = [z3[1], z3[0]];
    }
    console.log("Z3 ->", z3);

    // ZADATAK 4
    let z4 = [A, B];
    if (typeof A === "string" && A.length < 3) {
        z4.push("X");
    } else {
        z4.unshift("Y");
    }
    console.log("Z4 ->", z4);

    // ZADATAK 5
    console.log("Z5 -> Tip A:");
    switch (typeof A) {
        case "string":
            console.log("A je string");
            break;
        case "number":
            console.log("A je number");
            break;
        case "boolean":
            console.log("A je boolean");
            break;
        default:
            console.log("Drugi tip:", typeof A);
    }

    // ZADATAK 6
    let z6 = [A, B, "KRAJ"];
    z6.length = z6.length - 1;
    console.log("Z6 ->", z6);

    // ZADATAK 7
    let niz1 = [A, 2];
    let niz2 = [B, 4];
    let z7 = [...niz1, ...niz2];
    console.log("Z7 ->", z7);

    // ZADATAK 8
    let z8 = [];
    z8[0] = A;
    z8[2] = B;
    console.log("Z8 ->", z8);
    console.log("Z8 indeks 1:", z8[1]);

    // ZADATAK 9
    let z9 = [A, B, 7, 6];
    let [first, ...rest] = z9;
    console.log("Z9 -> First:", first, "Rest:", rest);

    // ZADATAK 10
    let z10;
    if (A === "" || B === "") {
        z10 = [];
    } else if (A === B) {
        z10 = [A];
    } else if (typeof B === "number" && B === 2) {
        z10 = [A, B];
    } else {
        z10 = [A, B, "x"];
    }

    switch (z10.length) {
        case 0:
            console.log("Z10 -> Prazan niz");
            break;
        case 1:
            console.log("Z10 -> Jedan element:", z10);
            break;
        case 2:
            console.log("Z10 -> Dva elementa:", z10);
            break;
        default:
            console.log("Z10 -> Više elemenata:", z10);
    }

});
