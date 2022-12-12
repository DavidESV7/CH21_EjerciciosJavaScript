let btnNum = document.getElementById("btnNum");
let resultdo = document.getElementById("alertMayor");

function esPar(){
    let n1 = Number(document.getElementById("inputN1").value);
    if (n1 % 2 == 0) {
        resultdo.innerHTML = `${n1} es par`;
    } else {
        resultdo.innerHTML = `${n1} no es par`;
    }
    document.getElementById("inputN1").select();
    document.getElementById("inputN1").focus();
}

btnNum.addEventListener("click",esPar)