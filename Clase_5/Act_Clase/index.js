const arr = [1, 4, 2, 10, 23, 3, 1, 0, 20]; //39

const valor = 4;

function subArray(arr, valor){

    if(arr.length < valor){
        return null 
    }

    let maxSum = 0;

    // Iniciamos el bucle para recorrer el arreglo, basados en la ventana (valor) que asignamos
    for(let index = 0; index < valor; index++){
        maxSum += arr[index];
    }

    let tempSum = maxSum;

    for(let i = valor; i < arr.length; i++){
        tempSum = tempSum - arr[i - valor] + arr[i];
        maxSum = Math.max(maxSum, tempSum); // = 39

        if(tempSum > maxSum){

        }
    }

    return maxSum

}

console.log(subArray(arr, valor));
