// ! Language: typescript
/*
! esto es un comentario multiple
? que cosas no
*aqui tamos de verde
TODO aqui naranja
*/

/**
 * Esto es un comentario documentacion de javascript
 */

import { type } from 'os';
import { setCookie, deleteCookie /* deleteAllCookies */ } from 'cookies-utils';

console.log('Hello TScript');
console.log('bye TScript');

//? variables

let nombre: string = 'Juan';

console.log('hola, ' + nombre);

const PI: number = 3.1416;

//tipo Any, acepta cualquier tipo de dato

var apellidos: any = 'San Jose';
apellidos = 3;

var error: boolean = true;
console.log(`¿Hay error? ${error}`);

//! instanciacion multiple de variables

let a: string, b: boolean, c: number; //declara 3 variables sin valor

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

let TODOlist: string[] = [
    'Hacer la compra',
    'Hacer la cama',
    'Hacer la comida',
];

//? combinacion de tipos en listas

//!(cuando no sepas que poner puedes usar la definicion de tipo que interpreta el intelisense haciendo hover sobre la variable)

let valores: (string | number | boolean)[] = [false, 'hola', true, 56];

//Enumerados
//! en los enumerados el valor esta definido en el orden en que se declara, por eso no se puede cambiar el orden

enum Estados {
    'completo' = 7,
    'incompleto',
    'pendiente',
}

enum PolePosition {
    'primero' = 1,
    'segundo',
    'tercero',
}

let estadoTareas: Estados = Estados.completo;
let puestoMaratones: PolePosition = PolePosition.primero;

//? interfaces

interface Tarea {
    nombre: string;
    estado: Estados;
    completado: boolean;
    prioridad: number;
}

//* Ahora podemos crear variables que sigan la interface tareas

let tarea1: Tarea = {
    nombre: 'Hacer la compra',
    estado: Estados.completo,
    completado: true,
    prioridad: 1,
};

//!Types de TypeScript

type Producto = {
    nombre: string;
    precio: number;
    year: number;
};

let car: Producto = {
    nombre: 'Audi',
    precio: 100,
    year: 2000,
};

//?generalmente se usa interface para todo excepto para las cosas que solo se puede hacer con type.
//*Interface es el equivalente a una clase en java.

//Operadores ternarios
console.log(
    car.year > 2020 ? `${car.nombre} es nuevo` : `${car.nombre} es antiguo`
);

//?if else

if (error) {
    console.log('Hay un error');
} else {
    console.log('No hay error');
}

//? else if

if (car.year < 2020) {
    console.log(`${car.nombre} es viejo`);
} else if (car.year === 2020) {
    console.log(`${car.nombre} es del 2020`);
} else {
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

let newTasklist: Tarea[] = [
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

newTasklist.forEach((tarea: Tarea, index: number) => {
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
    } else {
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
let mondayBuyList: string[] = ['leche', 'pan', 'azucar'];
let tuesdayBuyList: string[] = [...mondayBuyList, 'cereal'];
let thursdayBuyList: string[] = [...tuesdayBuyList, 'harina'];
let weekBuyList: string[] = [...mondayBuyList, ...thursdayBuyList];

//? spread en objetos

let estadoApp = {
    usuario: 'admin',
    session: 3,
    jwt: 'token',
};

//! cambiar un valor por propagacion

let newEstadoApp = {
    ...estadoApp,
    session: 4,
};

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

function saludarPersona(nombre: string, apellido: string) {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludarPersona('Sergio', 'Perez');

//? otras maneras (parametros opcionales)

/**
 *
 * @param nombre Nombre de la persona a saludar, por defecto sera Pepe
 */

function despedirPersona(nombre: string = 'Pepe') {
    console.log(`Adios ${nombre}`);
}

despedirPersona(); //Adios Pepe
despedirPersona('Sergio'); //Adios Sergio

function despedidaOpcional(nombre?: string) {
    if (nombre) {
        console.log(`Adios ${nombre}`);
    } else {
        console.log('Adios');
    }
}

despedidaOpcional(); //Adios
despedidaOpcional('Sergio'); //Adios Sergio

//? funcion de varios parametros

function manyParams(nombre: string, apellido?: string, edad: number = 18) {
    if (apellido) {
        console.log(`${nombre} ${apellido} tiene ${edad} años`);
    } else {
        console.log(`${nombre} tiene ${edad} años`);
    }
}

manyParams('Sergio', 'Perez', 20);

function ejemploVariosTipos(a: string | number) {
    if (typeof a === 'string') {
        console.log(`${a} es un string`);
    } else if (typeof a === 'number') {
        console.log(`${a} es un numero`);
    } else {
        console.log(`${a} no es ni string ni numero`);
        throw Error('Error: a no es ni string ni numero');
    }
}

//? funciones anonimas

function ejemploReturn(nombre: string, apellido: string): string {
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

function ejemploMultipleParams(...nombres: string[]) {
    nombres.forEach((nombre) => {
        console.log(`Hola ${nombre}`);
    });
}

ejemploMultipleParams('Sergio');
ejemploMultipleParams('Sergio', 'Miguel', 'Juan', 'Raquel');

//* sin propagacion hay que pasarle una lista

const lista = ['Javier', 'Mauricio'];
ejemploMultipleParams(...lista);

const ejemploParamslist = (nombres: string[]) => {
    nombres.forEach((nombre) => {
        console.log(`Hola ${nombre}`);
    });
};

ejemploParamslist(lista);

// ? objetos

type Empleado = {
    nombre: string;
    apellido: string;
    edad: number;
};

let empleadoSergio: Empleado = {
    nombre: 'Sergio',
    apellido: 'Perez',
    edad: 20,
};

//*Arrow functions

const showEmployee = (empleado: Empleado): string =>
    `${empleado.nombre} ${empleado.apellido} tiene ${empleado.edad} años`;

//llamar a la funcion

showEmployee(empleadoSergio);

const datosEmpleado = (empleado: Empleado): string => {
    if (empleado.edad > 70) {
        return `${empleado.nombre} ${empleado.apellido} esta en edad de jubilar`;
    } else {
        return `${empleado.nombre} ${empleado.apellido} esta en edad laboral`;
    }
};

datosEmpleado(empleadoSergio); //Sergio Perez esta en edad laboral

//? arrow function como callback

const getSalary = (empleado: Empleado, cobrar: () => string) => {
    if (empleado.edad > 70) {
        return;
    } else {
        cobrar(); //callback a ejecutar
    }
};

const cobrarEmpleado = (empleado: Empleado) => {
    console.log(`${empleado.nombre} ${empleado.apellido} cobra su salario`);
};

getSalary(empleadoSergio, () => 'Cobra Sergio');

//? Asyn function

async function ejemploAsync(): Promise<string> {
    await console.log('tarea a completar antes de continuar con la ejecucion');
    console.log('continuamos con la ejecucion');
    return 'tarea completada';
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

function* watcher(valor: number) {
    yield valor; //*emitimos el valor

    yield* worker(valor); //*Llamamos a las emisiones del worker para que emita otros valores

    yield valor + 4; //*emitimos el valor final
}

function* worker(valor: number) {
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

function showError(error: string | number) {
    if (typeof error === 'string') {
        console.log(error);
    } else {
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
    name: 'usuario', // string,
    value: 'Sergio', // string,
    maxAge: 10 * 60, // optional number (value in seconds),
    expires: new Date(2099, 10, 1), // optional Date,
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
    public terminar?: () => void;

    public empezar(): void {
        setTimeout(() => {
            //comprueba que existe la funcion terminar como callback
            if (!this.terminar) return;
            //cuando haya pasado el tiempo se ejecuta terminar
            this.terminar();
        }, 10000);
    }
}

const myTemporizador: Temporizador = new Temporizador();

//Definimos la funcion del callback a ejecutar cuando termine el tiempo

myTemporizador.terminar = () => {
    console.log('Termino el tiempo');
};

//empezamos el temporizador

myTemporizador.empezar(); // se inicia el timeout y cuando termine se ejecuta terminar

//? interval

setInterval(() => {
    console.log('hora');
}, 600000); //imprime el interval cada segundo por consola.

//eliminar la ejecucion de la funcion

delete myTemporizador.terminar;

//**************CLASES************************ */ */

class Curso {
    nombre: string;
    horas: number;

    constructor(nombre: string, horas: number) {
        this.nombre = nombre;
        this.horas = horas;
    }
}

class Estudiante {
    //propiedades de clase
    nombre: string;
    apellido?: string;
    cursos: Curso[];

    //constructor
    constructor(nombre: string, cursos: Curso[], apellido?: string) {
        //inicializamos las propiedades
        this.nombre = nombre;
        this.apellido = apellido ? apellido : undefined;
        this.cursos = cursos;
    }
}

//* Creamos un curso

const cursoTS: Curso = new Curso('TypeScript', 10);
const cursoJS: Curso = new Curso('JavaScript', 15);

const listaCursos: Curso[] = [];

listaCursos.push(cursoTS, cursoJS);

//* Creamos un estudiante

const sergio: Estudiante = new Estudiante('Sergio', listaCursos, 'Perez');
