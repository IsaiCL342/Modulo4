function pedirComida(plato){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(plato === 'pizza'){
                resolve(`Tu plato ${plato} esta listo!`)
            }
            else{
                reject(`Lo sentimos, no tenemos tu ${plato}`)
            }
        }, 5000)
    })
}

function pedirConPromesa(){
    console.log('Esperando el pedido (PROMESA)');
    pedirComida('pizza')
    .them((respuesta) => {
        console.log(respuesta)
        document.write(respuesta)
        alert(respuesta)
    })
    .catch((error) => {
        console.log(error)
    })
    
}

async function pedirConAsync(){
    try{
        console.log('Esperando el pedido (Async/Await');
        const resultado = await pedirComida('pizza')
        console.log(resultado);
    }catch(error){
        console.log(error);
    }
}

pedirConAsync()