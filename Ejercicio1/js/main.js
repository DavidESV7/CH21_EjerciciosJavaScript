let ulArreglo = document.getElementById("ulArreglo");
let arreglo = [3, 5, 7, 1, 6];
let badgeMayor = document.getElementById("badgeMayor");


// function getMaxOfArray(arreglo) {
//     return Math.max.apply(null, arreglo);
//   }

function numeroMayor(arreglo) {
    let mayor = 0; 
    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo[index] > mayor) {
            mayor = arreglo[index];
        }
    }
    return mayor;
}

for (let index = 0; index < arreglo.length; index++) {
    ulArreglo.innerHTML+= `<li class="list-group-item" >${index+1}.- ${arreglo[index]}</li>`;
}

badgeMayor.innerHTML+= numeroMayor(arreglo);


