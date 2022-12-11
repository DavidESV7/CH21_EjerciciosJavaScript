let btnNum = document.getElementById("btnNum");
let mayor = 0;
function mayorDeTres(){
    //  let n1 = Math.ceil(Math.random() * 100);
    //  let n2 = Math.ceil(Math.random() * 100);
    //  let n3 = Math.ceil(Math.random() * 100);
        let n1 = document.getElementById("inputN1").value;
        let n2 = document.getElementById("inputN2").value;
        let n3 = document.getElementById("inputN3").value;
       
    if ( n1 > n2 && n1 > n3) {
        mayor = n1;
        // imprime numero uno mas grande
       }else if (n2 > n3){
        mayor = n2;
        // Imprime numero dos mas grande
       }else{
        mayor = n3;
        // imprime numero tres mas grande
       }
       return mayor;
}

btnNum.addEventListener("click", function (event) {
    event.preventDefault();
    let resultado = document.getElementById("alertMayor");
    resultado.innerHTML = `El número mayor es: ${mayorDeTres(mayor)}`;
})