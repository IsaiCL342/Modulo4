function encontrarMaximo(arr) {
    // Caso base: si solo hay un elemento, ese es el máximo
    if (arr.length === 1) {
        return arr[0];
    }

    // Dividir el arreglo en dos mitades
    const mid = Math.floor(arr.length / 2);
    const izquierda = arr.slice(0, mid);
    const derecha = arr.slice(mid);

    // Llamadas recursivas para encontrar el máximo en ambas mitades
    const maxIzquierda = encontrarMaximo(izquierda);
    const maxDerecha = encontrarMaximo(derecha);

    // Comparar y devolver el mayor
    return Math.max(maxIzquierda, maxDerecha);
}

  // Ejemplo:
const numeros = [38, 27, 43, 3, 9, 82, 10];
const maximo = encontrarMaximo(numeros);
console.log("El número máximo es:", maximo); // El número máximo es: 82
