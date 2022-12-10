let ulArreglo = document.getElementById("ulArreglo");
let badgeMenor = document.getElementById("badgeMenor");
let arreglo = [-1, 3, 4, 2, 6];

function arregloMenor(arreglo) {
    let menor = 0;
    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo[index] < menor) {
            menor = arreglo[index];
        }
    }
    return menor;
}

for (let index = 0; index < arreglo.length; index++) {
    ulArreglo.innerHTML += `<li class="list-group-item" >${index+1}.- ${arreglo[index]}</li>`;
    
}

badgeMenor.innerHTML=arregloMenor(arreglo);

