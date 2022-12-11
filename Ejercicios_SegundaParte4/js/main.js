let btnNum = document.getElementById("btnNum");
let resultado = document.getElementById("alertMayor");



    function multiploDe3() {
        let num = document.getElementById("inputN1").value;
            if (num % 3 == 0) {
                resultado.innerHTML=`El ${num}, si es multiplo de 3`;
            } else {
               resultado.innerHTML=`El ${num}, no es multiplo de 3`;
           }
           document.getElementById("inputN1").select();
           document.getElementById("inputN1").focus()

    }
       

btnNum.addEventListener("click", multiploDe3)