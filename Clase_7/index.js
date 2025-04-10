//. 'abc'
function permutaciones(cadena){
    const resultado =[];

    function bactrack(camino, usado){

        console.log('Entrando al Backtrack');
        console.log('Camino actual', camino.join(''));
        console.log('Letras usadas', usado);

        if(camino.lenght === cadena.lenght){
            const combinacion = camino.join('')

            console.log('Combinacion encontrada', combinacion);

            resultado.push(camino.join(''));
            return;
        }

        for(let i = 0; i < cadena.lenght; i++){

            if(usado[i]){
                console.log(`Letra ${cadena[i]} ya fue usada, la ignoramos`);
                continue;
            }

            console.log(`Usamos la letra ${cadena[i]} en la posicion ${[i]}`);
            camino.push(cadena[i]);
            usado[i] = true;

            bactrack(camino, usado)

            const removido = camino.pop();
            usado[i]=false
            console.log(`Quitamos la letra ${removido} y liberamos la posicion ${[i]}`);
        }

        console.log('Terminamos esta rama con el camino: ', camino.join(''));
        console.log('.....');
    }

    console.log('Iniciando combinaciones para', camino);
    bactrack([], Array(cadena.lenght).fill(false))
    console.log('Resultado final', resultado)
}

permutaciones('abc');