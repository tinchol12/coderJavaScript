
let monto = document.getElementById('monto');
let tiempo = document.getElementById('tiempo');
let interes = document.getElementById('interes');
const btnCalcular = document.getElementById('btnCalcular');
const llenarTabla = document.querySelector('#lista-tabla tbody');




function calcularCuota(monto, interes, tiempo){   
    if(tiempo <= 8 && monto > 0){                      
        while(llenarTabla.firstChild){
            llenarTabla.removeChild(llenarTabla.firstChild);
        }
        let fechas = [];
        let fechaActual = Date.now();
        let mes_actual = moment(fechaActual);
        mes_actual.add(1, 'month');    

        let pagoInteres=0, pagoCapital = 0, cuota = 0;
        cuota = monto * (Math.pow(1 + interes / 100, tiempo) * interes / 100)/(Math.pow(1 + interes / 100, tiempo) - 1);

        for(let i = 1; i <= tiempo; i++) {
            pagoInteres = parseFloat(monto*(interes/100));
            pagoCapital = cuota - pagoInteres;
            monto = parseFloat(monto-pagoCapital);

            fechas[i] = mes_actual.format('DD-MM-YYYY');
            mes_actual.add(1, 'month');

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${fechas[i]}</td>
                <td>${cuota.toFixed(2)}</td>
                <td>${pagoCapital.toFixed(2)}</td>
                <td>${pagoInteres.toFixed(2)}</td>
                <td>${monto.toFixed(2)}</td>
            `;
            llenarTabla.appendChild(row)
         }
    }
    else
    {
            Swal.fire({ icon: 'info', title: 'Oops!', text: 'No otorgamos préstamos mayores a 8 meses, ni prestamos en $0', })
    }
}

monto.addEventListener('click', () => {   
    monto.value = '';
 });

 tiempo.addEventListener('click', () => {   
    tiempo.value = '';
 });

 btnCalcular.addEventListener('click', () => {       
    if(interes.value <= 0 || interes.value == null)
    {   
        interes.value = 1; 
        Swal.fire({ icon: 'info', title: 'Oops!', text: 'El interes debe ser mayor a 0', })
    }
 });
 
btnCalcular.addEventListener('click', () => {
    calcularCuota(monto.value, interes.value, tiempo.value);    
})

