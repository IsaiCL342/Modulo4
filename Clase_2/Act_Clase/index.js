function obtenerPokemonConPromesa(nombre){
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}
`)
.then((response) => {

    if(!response.ok){
        throw Error('Error en la respuesta del pokemon:', response.status)
    }    

    return response.json()
})
.then((data) => {
    console.log('Datos del pokemon', data);
})
.catch((error) => {
    console.log('Error en la respuesta', error);
})
}

const btnPromesa = document.getElementById('btn-promesa')

btnPromesa.addEventListener('click', () => {
    obtenerPokemonConPromesa('pikachu')
})


function crearCarta(nombre, peso, id, img){
    let article = document.createElement('article')
    article.innerHTML = `
    <img src=${img} alt="PokemonImage"/>
    <h2>${nombre}</h2>
    <p>Peso: ${peso}</p>
    <p>id: ${id}</p>
    `
    article.classList.add('carta')

    document.getElementById('render').appendChild(article)
}

async function obtenerPokemonAsync(){
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon`)

        if(!response.ok){
            throw Error('Error en la respuesta del pokemon:', response.status)
        }

        const data = await response.json()
        for(let index = 0; index < data.results.length; index++){
            const detalleReponse = await fetch(data.results[index].url)

            if(!detalleReponse.ok){
                throw Error('Error en la respuesta del detalle del pokemon:', detalleReponse.status)
            }

            const dataDetalle = await detalleReponse.json()

            crearCarta(dataDetalle.name, dataDetalle.weight, dataDetalle.id, dataDetalle.sprites.front_default)
            
        }
    } catch(error){
        console.log('Error en la respuesta ASYNC', error);
    }
}

const btnAsync = document.getElementById('btn-async')

btnAsync.addEventListener('click', () => {
    obtenerPokemonAsync()
})