const pegarData = document.querySelector('#start')
const button = document.querySelector('button')
const divAnt = document.querySelector('#resAnt')

// DATA ANTERIOR
function calcularDataAnterior() {
    let start = pegarData.value
    novostart = new Date(start)

    let ndt = novostart
    resultado = ndt.setDate(novostart.getDate() - 310)

    resultadoData = new Date(resultado)

    return resultadoData
}

const dataFormatadaAnterior = calcularDataAnterior();
const formatter = Intl.DateTimeFormat('pt-BR', {
    dataStyle: 'short',
});

button.addEventListener('click', () => {
    divAnt.innerHTML = formatter.format(calcularDataAnterior());
});

// DATA POSTERIOR 
const pegarDataPosterior = document.querySelector('#startPosterior')
const button2 = document.querySelector('#button2')
const divPos = document.querySelector('#resPos')

function calcularDataPosterior() {
    let startPosterior = pegarDataPosterior.value
    novostartPosterior = new Date(startPosterior)

    let ndtPosterior = novostartPosterior
    resultado2 = ndtPosterior.setDate(novostartPosterior.getDate() + 312)

    resultadoDataPosterior = new Date(resultado2)

    return resultadoDataPosterior
}

const dataFormatadaPosterior = calcularDataPosterior();
const formatter2 = Intl.DateTimeFormat('pt-BR', {
    dataStyle: 'short',
});

button2.addEventListener('click', () => {
    divPos.innerHTML = formatter2.format(calcularDataPosterior());
});

// Pagina FAQ
