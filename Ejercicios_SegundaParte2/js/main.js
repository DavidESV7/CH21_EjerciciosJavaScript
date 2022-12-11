let btnNum = document.getElementById("btnNum");
let menor = 0;
function menorDeTres(){
    //  let n1 = Math.ceil(Math.random() * 100);
    //  let n2 = Math.ceil(Math.random() * 100);
    //  let n3 = Math.ceil(Math.random() * 100);
        let n1 = document.getElementById("inputN1").value;
        let n2 = document.getElementById("inputN2").value;
        let n3 = document.getElementById("inputN3").value;
       
    if ( n1 < n2 && n1 < n3) {
        menor = n1;
        // imprime numero uno mas pequeño
       }else if (n2 < n3){
        menor = n2;
        // Imprime numero dos mas pequeño
       }else{
        menor = n3;
        // imprime numero tres mas pequeño
       }
       return menor;
}

btnNum.addEventListener("click", function (event) {
    event.preventDefault();
    let resultado = document.getElementById("alertMenor");
    resultado.innerHTML = `El número menor es: ${menorDeTres(menor)}`;
})