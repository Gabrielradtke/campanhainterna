const pegarData = document.querySelector('#start')
const button = document.querySelector('button')
const span = document.querySelector('span.teste')


function calcularData() {
    let start = pegarData.value
    novostart = new Date(start)

    let ndt = novostart
    resultado = ndt.setDate(novostart.getDate() + 10)

    resultadoData = new Date(resultado)

    return resultadoData
}

const dataFormatada = calcularData();

const formatter = Intl.DateTimeFormat('pt-BR', {
    dataStyle: 'short',
});

button.addEventListener('click', () => {
    span.innerHTML = formatter.format(calcularData());
});

// Pagina FAQ

/**
 * Created by kgugec on 15-Sep-17.
 */