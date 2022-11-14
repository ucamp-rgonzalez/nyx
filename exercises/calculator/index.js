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
let mostrar = varUno = varDos = operador = ""; 
let display = resultado = i = aux = tam = 0;

function calcular() {
  tam = operaciones.length;
  //Se encuentra el operador para dividir el arreglo en dos
  for( i; i<tam; i++){
    if(operaciones[i] === "+" || operaciones[i] === "-"  || operaciones[i] === "x" || operaciones[i] === "/" ){
      operador = operaciones[i];
      aux = i;
      break;
    }
  }
  //Ciclo para la primer variable, se acumulan los números del lado izquierdo del operador
  for( let j=0; j<aux; j++){ varUno = varUno + String(operaciones[j]); }
  //Ciclo para la segunda variable,  se acumulan los números del lado derecho del operador
  for( let j=aux+1; j<tam; j++){ varDos = varDos + String(operaciones[j]); }
  //Si solo se selecciona un operador y después el "igual" todas las variables serán por default: "cero"
  //Si solo se encuentra un operador y una de las dos variables entonces la variable faltante será por default: "cero"
  if(tam===1){ varUno = operaciones[0];}
  if(operaciones[0]===operador){ varUno = "0"; }
  if(aux+1 === tam){ varDos = "0";}
  //Se realiza la operación correspondiente al operador
  switch(operador){
    case "+": resultado = parseInt(varUno) + parseInt(varDos); break;
    case "-": resultado = parseInt(varUno) - parseInt(varDos); break;
    case "x": resultado = parseInt(varUno) * parseInt(varDos); break;
    case "/": if(varDos !== 0){ resultado = parseInt(varUno) / parseInt(varDos); }else{ resultado = nan; } break;
    default: resultado = parseInt(varUno); operador=""; varDos=""; break;
  }
  //le enviamos todas las variables, el operador y la solución al display.
  establacer(varUno +  operador + varDos + "=" + resultado );
  //limpiamos las variables y arreglos
  operaciones = [];
  mostrar = varUno = varDos = operador = ""; 
  display = resultado = i = aux = tam = 0;
}
//Hay dos variables auxiliares que ayudarán a acumular números de más de un dígito
function agregarNumero(numero) {
  operaciones.push(numero);
  mostrar = mostrar + String(numero);
  display = parseInt(mostrar);
  establacer(display);
}
//Si se detecta un operador se reinician las variables auxiliares para acumular la segunda variable
function operacion(operador) {
  operaciones.push(operador);
  establacer(operador);
  mostrar = "";
  display = 0;
}

function establacer(valor) {
  document.getElementById('resultado').value = valor;
}
//Se hace corrección del nombre de la función, ya que en la hoja HTML se tiene "limpiarInput()"
//mientras que se habia declarado como "limpiar()"
function limpiarInput(){
  operaciones = [];
  mostrar = varUno = varDos = operador = ""; 
  display = resultado = i = aux = tam = 0;
  document.getElementById('resultado').value = '';
}