// Función para encontrar el promedio más alto de 'x' notas consecutivas
function maxAverage(notas, x) {
    // Validación: Si hay menos notas que 'x', no se puede calcular
    if (notas.length < x) {
        console.log("No hay suficientes notas para calcular un promedio.");
        return null;
    }

    let maxSum = 0;         // Aquí se guarda la suma más alta encontrada
    let currentSum = 0;     // Aquí se guarda la suma del grupo actual
    let maxStartIndex = 0;  // Índice de inicio del grupo que tiene la suma más alta

    for (let i = 0; i < x; i++) {
        currentSum += notas[i];
    }

maxSum = currentSum; // La suma más alta inicialmente es la primera suma

    for (let i = x; i < notas.length; i++) {
        
        // Restamos el valor que sale de la ventana y sumamos el nuevo que entra
        currentSum = currentSum - notas[i - x] + notas[i];
        // Si la nueva suma es mayor que la anterior, actualizamos los valores
        if (currentSum > maxSum) {
            maxSum = currentSum;
            maxStartIndex = i - x + 1; // Guardamos el nuevo inicio de ventana
        }
    }

    // Obtenemos el grupo de notas que generó el mejor promedio
    const grupo = notas.slice(maxStartIndex, maxStartIndex + x);
    const promedio = maxSum / x; // Calculamos el promedio más alto

    // Mostramos los resultados en la consola
    console.log(`Promedio más alto: ${promedio}`);
    console.log(`Grupo de notas: [${grupo.join(', ')}]`);

    // Retornamos los datos por si se quieren usar después
    return {
    promedio,
    grupo
    };
}


// Arreglo de notas
const notas = [70, 85, 90, 75, 60, 95, 88];

// Cantidad de notas consecutivas a considerar
const x = 3;

maxAverage(notas, x);
