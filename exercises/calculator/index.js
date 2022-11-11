/*
La idea es agrupar todo dentro de un arreglo.
Después dividiremos el arreglo en partes, esta división se hará preguntando por un signo, ya sea “+”,” –“, “x” o “/”.
Guardaremos la posición que ocupa el símbolo en la variable operador 
Todo lo que esta antes lo reuniremos en una sola variable (varUno) y lo que este después del operador en otra variable (varDos).
Finalmente realizaremos la operación dependiendo del tipo de operador y se la enviaremos a al display
Es importante reiniciar las variables y el arreglo, o de lo contrario todo se acumula.
*/

//Variables y arreglo
let operaciones = [];
let varUno = varDos = operador = ""; 
let resultado = i = aux = tam = 0;

function calcular() {
  tam = operaciones.length;
  //Se encuentra el operador para dividir el arreglo en dos
  for( i; i<tam; i++){
    if(operaciones[i] === "+" || operaciones[i] === "-"  || operaciones[i] === "*" || operaciones[i] === "/" ){
      operador = operaciones[i];
      aux = i;
      break;
    }
  }
  //Ciclo para la primer variable, se acumulan los números del lado izquierdo del operador
  for( let j=0; j<aux; j++){ varUno = varUno + String(operaciones[j]); }
  //Ciclo para la segunda variable,  se acumulan los números del lado derecho del operador
  for( let j=aux+1; j<tam; j++){ varDos = varDos + String(operaciones[j]); }
  //Se realiza la operación correspondiente al operador
  switch(operador){
    case "+": resultado = parseInt(varUno) + parseInt(varDos); break;
    case "-": resultado = parseInt(varUno) - parseInt(varDos); break;
    case "*": resultado = parseInt(varUno) * parseInt(varDos); break;
    case "/": if(varDos !== 0) resultado = parseInt(varUno) / parseInt(varDos);
              else{ resultado = nan; } 
              break;
  }
  //le enviamos la solución al display
  establacer(resultado);
  //limpiamos las variables y arreglos
  operaciones = [];
  varUno = varDos = operador = ""; 
  resultado = i = aux = tam = 0;
}

function agregarNumero(numero) {
  operaciones.push(numero);
  establacer(numero);
}

function operacion(operador) {
  operaciones.push(operador);
  establacer(operador);
}

function establacer(valor) {
  document.getElementById('resultado').value = valor;
}
//Se hace corrección del nombre de la función, ya que en la hoja HTML se tiene "limpiarInput()"
//mientras que se habia declarado como "limpiar()"
function limpiarInput(){
  document.getElementById('resultado').value = '';
}
