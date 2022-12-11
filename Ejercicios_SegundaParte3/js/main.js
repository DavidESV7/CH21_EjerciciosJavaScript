let btnIntentos = document.getElementById("btnIntentos");
let idIntentos = document.getElementById("idIntentos");
let intentos = 10;



let resultado = document.getElementById("alertMayor");
idIntentos.innerHTML = intentos;




const randomNumber = Math.floor(Math.random()* 100 +1);
function checkGuess() {
    idIntentos.innerHTML = --intentos;
    let num = +document.getElementById('inputN1').value;
    document.getElementById("inputN1").select();
    document.getElementById("inputN1").focus();
            do {
                if (num == randomNumber) {
                    resultado.innerHTML = `Felicidades, lo has adivinado!`;
                    btnIntentos.disabled = true;
                }else if (intentos == 0) {
                 resultado.innerHTML = `Se te acabaron los intentos`;
                 btnIntentos.disabled = true;
                }else if (num < randomNumber) {
        
                    return resultado.innerHTML = `El número es muy bajo! te quedan: ${intentos}`;
                }else if (num > randomNumber) {
                    return resultado.innerHTML = `El número es muy alto! te quedan: ${intentos}`;
                }

            } while (randomNumber != num && intentos > 0);
            
            
        }
        



btnIntentos.addEventListener("click", checkGuess)



/*
if (num == randomNumber) {
                return resultado.innerHTML = `Felicidades, lo has adivinado!`;

            }else if (intentos == 0) {
                return resultado.innerHTML = `Se te acabaron los intentos`;
            }else if (num < randomNumber) {
    
                return resultado.innerHTML = `El número es muy bajo!`;
            }else if (num > randomNumber) {
                return resultado.innerHTML = `El número es muy alto!`;
            } */