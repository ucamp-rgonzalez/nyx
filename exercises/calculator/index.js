let inputNumeros1 = '';
let inputNumeros2 = '';
let actualOperador = '';

function calcular() {
  let resultado = resolverOperacion(inputNumeros2, actualOperador, inputNumeros1);

  establacer(resultado);
  limipiarVariables();

  logger();
}

function resolverOperacion(primero, operador, segundo) {
  let resultado;
  switch (operador) {
    case '+':
      resultado = Number(primero) + Number(segundo);
      break;
    case '-':
      resultado = Number(primero) - Number(segundo);
      break;
    case '*':
      resultado = Number(primero) * Number(segundo);
      break;
    case '/':
      resultado = Number(primero) / Number(segundo);
      break;
    default:
      break;
  }
  return resultado;
}

function limipiarVariables() {
  inputNumeros1 = '';
  inputNumeros2 = '';
}

function agregarNumero(numero) {
  inputNumeros1 += numero;
  establacer(inputNumeros1);

  logger();
}

function operacion(operador) {
  if (actualOperador !== '') {
    let resultado = resolverOperacion(inputNumeros1, actualOperador, inputNumeros2);
    inputNumeros2 = resultado;
  } else {
    inputNumeros2 = inputNumeros1;
  }

  inputNumeros1 = '';
  actualOperador = operador;

  logger();
}

function establacer(valor) {
  document.getElementById('resultado').value = valor;
}

function limpiar() {
  document.getElementById('resultado').value = '';
  limipiarVariables();
}

function logger() {
  console.log(
    JSON.stringify(
      {
        inputNumeros1,
        inputNumeros2,
        actualOperador,
        ...arguments,
      },
      null,
      2,
    ),
  );
}
