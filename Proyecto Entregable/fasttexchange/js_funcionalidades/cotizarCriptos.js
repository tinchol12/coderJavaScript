const form = document.querySelector("#form-search");
const moneda = document.querySelector("#moneda");
const criptomoneda = document.querySelector("#criptomonedas");
const formContainer = document.querySelector(".form-side");
const containerAnswer = document.querySelector(".container-answer");

const objBusqueda = {
    moneda: '',
    criptomoneda: ''
}

document.addEventListener('DOMContentLoaded', () => {
    consultarCriptos();

    form.addEventListener('submit', submitForm);
    moneda.addEventListener('change', getValue);
    criptomoneda.addEventListener('change', getValue);
})

function submitForm(e){
    e.preventDefault();
    const {moneda, criptomoneda} = objBusqueda;
    if (moneda === '' || criptomoneda === '') {
        Swal.fire('Validación', 'Seleccione ambas monedas por favor', 'error')
        return;
    }
    consultarAPI(moneda, criptomoneda);
}

function consultarAPI(moneda, criptomoneda){
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    fetch(url)
        .then(resultado => resultado.json())
        .then(resultadoJson => {            
            Swal.fire('OK!', 'Cotización de Crpto en el acto exitosa', 'success')
            mostrarCotizacion(resultadoJson.DISPLAY[criptomoneda][moneda]);

        })
        .catch(error => console.log(error));
}

function mostrarCotizacion(data){
    clearHTML();
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR} = data;
    const answer = document.createElement('div');
    answer.classList.add('display-info');
    answer.innerHTML = `
        <p class="main-price">Precio ahora: <span>${PRICE}</span></p>
        <p>Precio más alto del día:: <span>${HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${CHANGEPCT24HOUR}%</span></p>
    `;
    containerAnswer.appendChild(answer);
}

function showError(mensage){
    const error = document.createElement('p');
    error.classList.add("error");
    error.textContent = mensage;
    formContainer.appendChild(error);
    setTimeout(() => error.remove(), 3000);
}

function getValue(e){
    objBusqueda[e.target.name] = e.target.value; 
}

function consultarCriptos(){
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
    
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(respuestaJson => {
            selectCriptos(respuestaJson.Data);
        })
        .catch(error => console.log(error));
}

function selectCriptos(criptos){
    criptos.forEach(cripto => {
        const {FullName, Name} = cripto.CoinInfo;
        const option = document.createElement("option");
        option.value = Name;
        option.textContent = FullName;
        criptomoneda.appendChild(option);
    });
}

function clearHTML(){
    containerAnswer.innerHTML = '';
}