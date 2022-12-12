let btnNum = document.getElementById("btnNum");
let resultado = document.getElementById("alertMayor");



function suma() {
let n1 = Number(document.getElementById("inputN1").value);
let n2 = Number(document.getElementById("inputN2").value);
let n3 = Number(document.getElementById("inputN3").value);
    if (n1 == (n2 + n3)) {
        resultado.innerHTML = `${n1} es igual a la suma de ${n2} + ${n3}`;
    } else if (n2 == (n1 + n3)) {
        resultado.innerHTML = `${n2} es igual a la suma de ${n1} + ${n3}`;
    }else if (n3 == (n1 + n2)) {
        resultado.innerHTML = `${n3} es igual a la suma de ${n1} + ${n2}`;
    }else{
        resultado.innerHTML =`No es la suma de ninguno de los numeros`
    }

}







btnNum.addEventListener("click", suma);
    
