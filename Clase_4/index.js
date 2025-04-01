/*function encontrarParDeNumeros(arreglo, target){
    
    //Definir punteros
    // let izquierda = 0;
    let derecha = arreglo.length - 1;

    while(izquierda < derecha){

        let suma = arreglo[izquierda] + arreglo[derecha];

        if(suma === target){
            console.log(`Encontrado: ${arreglo[izquierda]} + ${arreglo[derecha]} = ${target}`);
            return true;
        }

        if(suma < target){
            izquierda++;
        }
        else{
            derecha--;
        }
    }

    console.log('No se encontro el target');
    return false;
}


let arregloParaSumar = [1,2,3,4,5,6,7,8,9]

encontrarParDeNumeros(arregloParaSumar,10)*/

//2 punteros con strings

function esPalindromo(palabra){

    //Modificacion para leer frases
    let quitarEspacio = palabra.toLowerCase().split(" ").join("");

    let izquierda = 0;
    let derecha = quitarEspacio.length - 1;

    
    while(izquierda < derecha){
        if(quitarEspacio[izquierda] !== quitarEspacio[derecha]){
            console.log(`La palabra ${quitarEspacio} no es palindromo`);
            return false;
        }
        izquierda++
        derecha--
    }
    console.log(`La palabra ingresada "${quitarEspacio}", es palindromo`);
    return true;
}

esPalindromo('anita lava la tina')

