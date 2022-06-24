const monedaUno = document.getElementById('moneda-uno');
const monedaDos = document.getElementById('moneda-dos');
const cantMonedaUno = document.getElementById('cantidad-uno');
const cantMonedaDos = document.getElementById('cantidad-dos');
const cambioEl = document.getElementById('cambio');


function calculate(){
    const moneda_one = monedaUno.value;
    const moneda_two = monedaDos.value;

   fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_one}`)
   .then(res => res.json() )
   .then(data => {
       const rate = data.rates[moneda_two];       
       cambioEl.innerText = `1 ${moneda_one} = ${rate} ${moneda_two}`;
       cantMonedaDos.value = (cantMonedaUno.value * rate).toFixed(2);
    } );
    
}

monedaUno.addEventListener('change', calculate);
cantMonedaUno.addEventListener('input', calculate);
monedaDos.addEventListener('change', calculate);
cantMonedaDos.addEventListener('input', calculate);

calculate();