function mergeSort(arr) {
    // Caso base: si el arreglo tiene 1 o 0 elementos, ya está ordenado
    if (arr.length <= 1) {
        return arr;
    }

    // Dividir el arreglo a la mitad
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Ordenar recursivamente y luego mezclar
    return merge(mergeSort(left), mergeSort(right));
}

// Función que mezcla dos arreglos ordenados
function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    // Comparar y mezclar
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
        } else {
        result.push(right[j]);
        j++;
        }
    }

    // Agregar los elementos restantes
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Ejemplo de uso
const arreglo = [5, 3, 8, 4, 2, 7, 1, 6];
const ordenado = mergeSort(arreglo);
console.log("Arreglo ordenado:", ordenado);
