// Establece la fecha de inicio
const fechaInicio = new Date('2024-09-18T00:00:00'); // Cambia la fecha aquí
const contadorElement = document.getElementById('contador');

function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio; // Calcula el tiempo transcurrido

    // Calcula los días, horas, minutos y segundos transcurridos
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Actualiza el contenido en el HTML
    contadorElement.textContent = `${dias} Días, ${horas} Horas, ${minutos} Minutos y ${segundos} Segundos transcurridos desde el 18 de septeimbre 2024`;
}

// Actualiza el contador cada segundo
setInterval(actualizarContador, 1000); 
// Llama a la función al cargar la página
actualizarContador();
