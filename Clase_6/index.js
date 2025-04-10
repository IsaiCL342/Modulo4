
function contar(numero){

    if(numero > 5){
        return;
    }

    console.log(numero);

    contar(numero + 1)
    
}

contar(1);
