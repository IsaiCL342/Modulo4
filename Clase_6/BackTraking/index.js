function logPaso(camino, usado, accion){
    const contenedor = document.getElementById('pasos');
    const fila = document.createElement('div');
    fila.className = 'paso';
    const usadoTexto = usado.map((b, i)=>`${b ? '✔️' : '❌'}`).join('')
    fila.innerHTML = `
    <strong>CAMINO:<strong> [${camino.join(', ')}] |
    <strong>USADO:<strong> ${usadoTexto} |
    <strong>ACCION:<strong> ${accion}
    `;

    contenedor.appendChild(fila);
}

// 'abc'
function permutaciones(cadena){
    const resultado = [];

    function backtrack(camino, usado){

        if (camino.length === cadena.length){
            const  combinacion = camino.join('')
            logPaso([...camino], [...usado], `COMBINACION GUARDADA: '${combinacion}'`)
            resultado.push(combinacion);
            return;
        }

        for(let i = 0; i < cadena.length; i++){
            logPaso([...camino], [...usado], `Agrega '${cadena[i]}'`)
            if(usado[i]) {
                continue;
            };

            camino.push(cadena[i]);
            usado[i] = true;

            backtrack(camino, usado)

            const removido = camino.pop();
            usado[i] = false
            logPaso([...camino], [...usado], `Quiza la letra '${removido}'`)
        }

    }

    
    backtrack([], Array(cadena.length).fill(false))
}

permutaciones('abc')