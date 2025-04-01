// 1. Añadir y quitar elementos
const frutas = ['manzana', 'banana', 'pera'];
frutas.push('naranja');
frutas.pop();
frutas.unshift('kiwi');
frutas.shift();

console.log('Frutas finales:', frutas);

// 2. Cortar y modificar secciones de un array
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'morado'];
const primerosTres = colores.slice(0, 3);
const ultimosDos = colores.slice(-2);
colores.splice(1, 1);
colores.splice(1, 0, 'negro', 'blanco');

console.log('Primeros tres colores:', primerosTres);
console.log('Últimos dos colores:', ultimosDos);
console.log('Colores modificados:', colores);

// 3. Recorrer y transformar arrays
const numeros = [2, 4, 6, 8, 10];
numeros.forEach(num => console.log(`Número: ${num}`));
const dobles = numeros.map(num => num * 2);
console.log('Dobles:', dobles);

// 4. Filtrar y encontrar elementos
const usuarios = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Juan', edad: 17 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Pedro', edad: 15 }
];

const mayoresEdad = usuarios.filter(user => user.edad >= 18);
const usuario17 = usuarios.find(user => user.edad === 17);
const indiceMaria = usuarios.findIndex(user => user.nombre === 'María');

console.log('Usuarios mayores de edad:', mayoresEdad);
console.log('Usuario con 17 años:', usuario17);
console.log('Índice de María:', indiceMaria);

// 5. Reducción de arrays
const calificaciones = [8, 9, 10, 7, 6, 10];
const sumaTotal = calificaciones.reduce((acc, cal) => acc + cal, 0);
const promedio = sumaTotal / calificaciones.length;

console.log('Promedio de calificaciones:', promedio);

// 6. Encadenar métodos
const numeros2 = [5, 12, 4, 22, 9, 10, 33, 2];
const resultado = numeros2.filter(num => num > 5).map(num => num * 3).reduce((acc, num) => acc + num, 0);

console.log('Resultado final:', resultado);

// 7. Ordenar elementos
const animales = ['perro', 'gato', 'elefante', 'abeja', 'delfín'];
animales.sort();
const numerosOrdenados = [10, 2, 33, 5, 12].sort((a, b) => a - b);

console.log('Animales ordenados:', animales);
console.log('Números ordenados:', numerosOrdenados);
