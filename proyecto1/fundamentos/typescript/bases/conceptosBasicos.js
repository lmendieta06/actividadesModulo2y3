// PRIMERO CREAR OBSERVADOR
console.log("Hola soy typescript");
// INFERENCIA DE TIPOS
let variable = "Laura";
// Declaracion explicita
let miVariable2;
let miNumero2;
miNumero2 = 2;
// Declaracion implicita
let miNumero = 20;
console.log(miNumero2);
// TIPOS DE DATOS
// PRIMITIVOS
let numero;
let texto;
let verificacion;
let indefinidio;
let nulo;
numero = 2;
texto = "hola";
verificacion = true;
indefinidio = undefined;
nulo = null;
// ESPECIALES
// ARREGLOS
// ------------forma 1----------------
// Declaracion implicita
let arreglo = [1, 2, 3, 4];
// Declaracion explicita
let arreglo2;
arreglo2 = ["Laura", "Luisa"];
// --------------- forma 2 -------------
let miArreglo;
miArreglo = ["Laura", "Luisa"];
// SE USAN CUANDO NO SE SABE QUE VA A GUARDAR LA VARIABLE
// unknown
// Recibe cualquier dato porque no sabe que va a llegar
let desconocido;
desconocido = 2;
desconocido = "laura";
desconocido = true;
// any
// No me importa lo que llegue, guardalo 
let cualquiera;
cualquiera = true;
cualquiera = 20;
cualquiera = undefined;
cualquiera = "sofia";
// OBJETOS
let miObjeto;
// Declaracion de un objeto literañ
let Carro;
Carro = {
    id: 1,
    marca: "chevrolet",
    caballosFuerza: 5000,
    color: "rojo",
    vendido: false
};
// FUNCIONES
// --------------PRIMERA FORMA-----------
// Existen funciones retornables y no retornables
let retorno;
// No retornable
function miFuncion() {
    console.log("Soy una funcion retornable");
}
// Ejecutar
miFuncion();
// Retornar
retorno = miFuncion();
console.log(retorno);
// -------------SEGUNDA FORMA-------------
// FUNCION FLECHA RETORNABLE
const miFuncion2 = (num1, num2) => {
    return num1 * num2;
};
let retornar2 = miFuncion2(2, 3);
console.log(retornar2);
// FUNCION NORMAL RETORNABLE - ESPECIFICA EL TIPO DE DATO QUE RETORNA
function miFuncion3(num1, num2) {
    return num1 * num2;
}
let retornar3 = miFuncion3(5, 3);
console.log(retornar3);
