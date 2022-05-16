"use strict";
// ! Language: typescript
/*
! esto es un comentario multiple
? que cosas no
*aqui tamos de verde
TODO aqui naranja
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Hello TScript');
console.log('bye TScript');
//? variables
let nombre = 'Juan';
console.log('hola, ' + nombre);
const PI = 3.1416;
//tipo Any, acepta cualquier tipo de dato
var apellidos = 'San Jose';
apellidos = 3;
var error = true;
console.log(`¿Hay error? ${error}`);
//! instanciacion multiple de variables
let a, b, c; //declara 3 variables sin valor
a = 'TS';
b = true;
c = 3.1416;
/*
 * tipos de datos basicos
 * string
 * number
 * boolean
 * void
 * any
 * null
 * undefined
 */
//? tipos mas complejos
let TODOlist = [
    'Hacer la compra',
    'Hacer la cama',
    'Hacer la comida',
];
//? combinacion de tipos en listas
//!(cuando no sepas que poner puedes usar la definicion de tipo que interpreta el intelisense haciendo hover sobre la variable)
let valores = [false, 'hola', true, 56];
//Enumerados
//! en los enumerados el valor esta definido en el orden en que se declara, por eso no se puede cambiar el orden
var Estados;
(function (Estados) {
    Estados[Estados["completo"] = 7] = "completo";
    Estados[Estados["incompleto"] = 8] = "incompleto";
    Estados[Estados["pendiente"] = 9] = "pendiente";
})(Estados || (Estados = {}));
var PolePosition;
(function (PolePosition) {
    PolePosition[PolePosition["primero"] = 1] = "primero";
    PolePosition[PolePosition["segundo"] = 2] = "segundo";
    PolePosition[PolePosition["tercero"] = 3] = "tercero";
})(PolePosition || (PolePosition = {}));
let estadoTareas = Estados.completo;
let puestoMaratones = PolePosition.primero;
//* Ahora podemos crear variables que sigan la interface tareas
let tarea1 = {
    nombre: 'Hacer la compra',
    estado: Estados.completo,
    completado: true,
    prioridad: 1,
};
let car = {
    nombre: 'Audi',
    precio: 100,
    year: 2000,
};
//?generalmente se usa interface para todo excepto para las cosas que solo se puede hacer con type.
//*Interface es el equivalente a una clase en java.
//Operadores ternarios
console.log(car.year > 2020 ? `${car.nombre} es nuevo` : `${car.nombre} es antiguo`);
//?if else
if (error) {
    console.log('Hay un error');
}
else {
    console.log('No hay error');
}
//? else if
if (car.year < 2020) {
    console.log(`${car.nombre} es viejo`);
}
else if (car.year === 2020) {
    console.log(`${car.nombre} es del 2020`);
}
else {
    console.log(`${car.nombre} es nuevo`);
}
//? switch
switch (tarea1.estado) {
    case Estados.completo:
        console.log(`${tarea1.nombre} esta completada`);
        break;
    case Estados.incompleto:
        console.log(`${tarea1.nombre} esta incompleta`);
        break;
    case Estados.pendiente:
        console.log(`${tarea1.nombre} esta pendiente`);
    default:
        break;
}
//? Bucles
let newTasklist = [
    {
        nombre: 'Hacer la compra',
        estado: Estados.completo,
        completado: true,
        prioridad: 1,
    },
    {
        nombre: 'Hacer la cama',
        estado: Estados.incompleto,
        completado: false,
        prioridad: 2,
    },
    {
        nombre: 'Hacer la comida',
        estado: Estados.pendiente,
        completado: false,
        prioridad: 3,
    },
];
//? for Each, para cada elemento del array haz la siguiente funcion.
newTasklist.forEach((tarea, index) => {
    console.log(`${index} - ${tarea.nombre}`);
});
//? for in: suele ser para objetos y strings
// for (const key in tarea1) {
//     if (Object.prototype.hasOwnProperty.call(tarea1, key)) {
//         const element = tarea1[key];
//     }
// }
//? for classic
for (let i = 0; i < newTasklist.length; i++) {
    const tarea = newTasklist[i];
    console.log(`${i} - ${tarea.nombre}`);
}
//? while
while (tarea1.estado !== Estados.completo) {
    if (tarea1.prioridad > 3) {
        tarea1.estado = Estados.completo;
    }
    else {
        tarea1.prioridad++;
    }
}
//? do while: se ejecuta al menos una vez
do {
    tarea1.prioridad++;
} while (tarea1.prioridad < 3);
//? ASIGNACION MULTIPLE DE variables
let tar = {
    nombre: 'Hacer la compra',
    estado: Estados.completo,
    completado: true,
    prioridad: 1,
};
//? spread en asignacion de variables let{}=tar
let { estado: Estado, completado: boolean, prioridad: number } = tar;
//? propagacion (spread)
//? spread en listas
let mondayBuyList = ['leche', 'pan', 'azucar'];
let tuesdayBuyList = [...mondayBuyList, 'cereal'];
let thursdayBuyList = [...tuesdayBuyList, 'harina'];
let weekBuyList = [...mondayBuyList, ...thursdayBuyList];
//? spread en objetos
let estadoApp = {
    usuario: 'admin',
    session: 3,
    jwt: 'token',
};
//! cambiar un valor por propagacion
let newEstadoApp = Object.assign(Object.assign({}, estadoApp), { session: 4 });
//? FUNCIONES
/**
 * *Funcion que muestra un saludo por consola
 */
function saludar() {
    let nombre = 'Sergio';
    console.log(`Hola ${nombre}`);
}
//*Invocacion de la funcion
saludar();
/**
 * Funcion que recibe un parametro y muestra un saludo por consola
 * @param nombre
 * @param apellido
 * @returns retorna un saludo
 */
function saludarPersona(nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}`);
}
saludarPersona('Sergio', 'Perez');
//? otras maneras (parametros opcionales)
/**
 *
 * @param nombre Nombre de la persona a saludar, por defecto sera Pepe
 */
function despedirPersona(nombre = 'Pepe') {
    console.log(`Adios ${nombre}`);
}
despedirPersona(); //Adios Pepe
despedirPersona('Sergio'); //Adios Sergio
function despedidaOpcional(nombre) {
    if (nombre) {
        console.log(`Adios ${nombre}`);
    }
    else {
        console.log('Adios');
    }
}
despedidaOpcional(); //Adios
despedidaOpcional('Sergio'); //Adios Sergio
//? funcion de varios parametros
function manyParams(nombre, apellido, edad = 18) {
    if (apellido) {
        console.log(`${nombre} ${apellido} tiene ${edad} años`);
    }
    else {
        console.log(`${nombre} tiene ${edad} años`);
    }
}
manyParams('Sergio', 'Perez', 20);
function ejemploVariosTipos(a) {
    if (typeof a === 'string') {
        console.log(`${a} es un string`);
    }
    else if (typeof a === 'number') {
        console.log(`${a} es un numero`);
    }
    else {
        console.log(`${a} no es ni string ni numero`);
        throw Error('Error: a no es ni string ni numero');
    }
}
//? funciones anonimas
function ejemploReturn(nombre, apellido) {
    return ` ${nombre} ${apellido}`;
}
const nombreCompleto = ejemploReturn('Sergio', 'Perez');
console.log(nombreCompleto); //Sergio Perez
console.log(ejemploReturn('Sergio', 'Perez')); //Sergio Perez
//? factor de propagacion
/**
 *
 * @param nombres es una lista de nombres de string
 */
//* esto toma todos los datos que le pasemos y los pone en una lista
function ejemploMultipleParams(...nombres) {
    nombres.forEach((nombre) => {
        console.log(`Hola ${nombre}`);
    });
}
ejemploMultipleParams('Sergio');
ejemploMultipleParams('Sergio', 'Miguel', 'Juan', 'Raquel');
//* sin propagacion hay que pasarle una lista
const lista = ['Javier', 'Mauricio'];
ejemploMultipleParams(...lista);
const ejemploParamslist = (nombres) => {
    nombres.forEach((nombre) => {
        console.log(`Hola ${nombre}`);
    });
};
ejemploParamslist(lista);
let empleadoSergio = {
    nombre: 'Sergio',
    apellido: 'Perez',
    edad: 20,
};
//*Arrow functions
const showEmployee = (empleado) => `${empleado.nombre} ${empleado.apellido} tiene ${empleado.edad} años`;
//llamar a la funcion
showEmployee(empleadoSergio);
const datosEmpleado = (empleado) => {
    if (empleado.edad > 70) {
        return `${empleado.nombre} ${empleado.apellido} esta en edad de jubilar`;
    }
    else {
        return `${empleado.nombre} ${empleado.apellido} esta en edad laboral`;
    }
};
datosEmpleado(empleadoSergio); //Sergio Perez esta en edad laboral
//? arrow function como callback
const getSalary = (empleado, cobrar) => {
    if (empleado.edad > 70) {
        return;
    }
    else {
        cobrar(); //callback a ejecutar
    }
};
const cobrarEmpleado = (empleado) => {
    console.log(`${empleado.nombre} ${empleado.apellido} cobra su salario`);
};
getSalary(empleadoSergio, () => 'Cobra Sergio');
//? Asyn function
function ejemploAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log('tarea a completar antes de continuar con la ejecucion');
        console.log('continuamos con la ejecucion');
        return 'tarea completada';
    });
}
ejemploAsync()
    .then((response) => {
    console.log('Respuesta', response);
})
    .catch((error) => {
    console.log('Error', error);
})
    .finally(() => {
    console.log('Finalizado');
});
//? generators
function* ejemploGenerator() {
    //yield --> emite un valor
    let index = 0;
    while (index < 10) {
        //emitimos un valor incrementado
        yield index++;
    }
}
//guardamos la funcion generadora en una variables
let generadora = ejemploGenerator();
// accedemos a los valores emitidos
console.log(generadora.next().value); //0
console.log(generadora.next().value); //1
console.log(generadora.next().value); //2
console.log(generadora.next().value); //3
console.log(generadora.next().value); //4
console.log(generadora.next().value); //5
//worker y sagas.
function* watcher(valor) {
    yield valor; //*emitimos el valor
    yield* worker(valor); //*Llamamos a las emisiones del worker para que emita otros valores
    yield valor + 4; //*emitimos el valor final
}
function* worker(valor) {
    yield valor + 1; //*emitimos el valor
    yield valor + 2; //*emitimos el valor
    yield valor + 3; //*emitimos el valor
}
let generatorSaga = watcher(10);
console.log(generatorSaga.next().value); //10
console.log(generatorSaga.next().value); //11(emitido por el worker)
console.log(generatorSaga.next().value); //12(emitido por el worker)
console.log(generatorSaga.next().value); //13(emitido por el worker)
//! sobrecarga de funciones
function showError(error) {
    if (typeof error === 'string') {
        console.log(error);
    }
    else {
        console.log(`Error ${error}`);
    }
}
//************PERSISTENCIA DE DATOS ****************** */
//? 1.- LocalStorage --> almacena los datos en el navegador ( no se eliminan automaticamente)
//? 2.- SessionStorage --> Los datos persisten durante la sesion del navegador
//? 3.- Cookie --> tienen una fecha de caducidad y ambito de URL
//*LocalStorage y SessionStorage
// function save(): void {
//     localStorage.set('nombre', 'Sergio');
// }
// function read(): void {
//     let nombre = localStorage.get('nombre');
// }
//* Cookies
const cookieOptions = {
    name: 'usuario',
    value: 'Sergio',
    maxAge: 10 * 60,
    expires: new Date(2099, 10, 1),
    path: '/', // optional string,
};
//! todo esta comentado porque me rompio el codigo, probablemente el cookie-utils no sirva.
//? set cookies
// setCookie(cookieOptions);
//?read cookies
// let cookieLeida= getCookieValue("usuario");
//?delete cookies
// deleteCookie(cookieOptions.name);
//?delete all cookies
// deleteAllCookies();
//***********Eventos*************************** */
//clase temporizador
class Temporizador {
    empezar() {
        setTimeout(() => {
            //comprueba que existe la funcion terminar como callback
            if (!this.terminar)
                return;
            //cuando haya pasado el tiempo se ejecuta terminar
            this.terminar();
        }, 10000);
    }
}
const myTemporizador = new Temporizador();
//Definimos la funcion del callback a ejecutar cuando termine el tiempo
myTemporizador.terminar = () => {
    console.log('Termino el tiempo');
};
//empezamos el temporizador
myTemporizador.empezar(); // se inicia el timeout y cuando termine se ejecuta terminar
