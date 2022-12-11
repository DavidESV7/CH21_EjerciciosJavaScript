let ulArreglo = document.getElementById("ulArreglo");
let arregloCase1 = [1, 22, 5, 17, 10, 5, 40, 5];
let arregloCase2 = [7, 41, 5, 7, 10, 13, 2];
let arregloCase3 = [1, 22, 5, 14, 24, 31, 27, 15, 105];
let divCase = document.getElementById("divCase");

divCase.innerHTML = `Case 1: [${arregloCase1}] <br> Case 2: [${arregloCase2}] <br> Case 3: [${arregloCase3}]`;

let repetido = 0;
function arrayCase(arregloCase1) {
    let numeroRepetido = 0;
    let target = arregloCase1[2];
    for (let index = 0; index < arregloCase1.length; index++) {
        if (arregloCase1[index] == arregloCase1[target]) {
            repetido++;
            numeroRepetido = arregloCase1[index];
        }
        
    }
    return numeroRepetido;
    
}


let repetido2 = 0;
function arrayCase2(arregloCase2) {
    let numeroRepetido2 = 0;
    let target2 = arregloCase2[3];
    for (let index = 0; index < arregloCase2.length; index++) {
        if (arregloCase2[index] == target2) {
            repetido2++;
            numeroRepetido2 = arregloCase2[index];
        }
    }
    return numeroRepetido2;
}



function arrayCase3(arregloCase3) {
    let repetido = false;
    for (let i = 0; i < arregloCase3.length; i++) {
        for (let j = i + 1; j < arregloCase3.length; j++) {
            if (arregloCase3[i] == arregloCase3[j]) {
                repetido = true;
            }else{
                repetido = false;
            }
        }
    }
    return repetido;
}



ulArreglo.innerHTML = `<li class="list-group-item" > Case 1: el número repetido es ${arrayCase(arregloCase1)} y se repite ${repetido}  veces! </li>
<li class="list-group-item" > Case 2: el número repetido es ${arrayCase2(arregloCase2)} y se repite ${repetido2}  veces! </li>
<li class= "list-group-item"> Case 3: El numero repetido es ${arrayCase3(arregloCase3)} y se repite 0 veces! `;





 