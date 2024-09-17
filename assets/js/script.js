const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const toggleFormat = document.getElementById('toggleFormat');
const formatLabel = document.getElementById('formatLabel');

let is24HourFormat = true; // Variável para rastrear o formato atual

toggleFormat.addEventListener('change', () => {
    is24HourFormat = !is24HourFormat;
    formatLabel.textContent = is24HourFormat ? 'Formato de 24 horas' : 'Formato de 12 horas';
    updateClock(); // Atualiza o relógio imediatamente após a mudança de formato
});

function updateClock() {
    let dateToday = new Date();
    let hora = dateToday.getHours();
    let minuto = dateToday.getMinutes();
    let segundo = dateToday.getSeconds();
    let periodo = '';

    if (!is24HourFormat) {
        hora = hora % 12;
        hora = hora ? hora : 12; // '0' should be '12'
    }

    if (hora < 10) hora = '0' + hora;
    if (minuto < 10) minuto = '0' + minuto;
    if (segundo < 10) segundo = '0' + segundo;

    horas.textContent = hora;
    minutos.textContent = minuto;
    segundos.textContent = segundo;

}

const relogio = setInterval(updateClock, 1000); // Define o intervalo para 1 segundo (1000 milissegundos)
updateClock(); // Chama a função uma vez para inicializar o relógio
