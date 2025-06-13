//script.js

document.getElementById('btnSorprise').addEventListener('click', function() {

    const surprise = document.getElementById('surprise');
    surprise.classList.toggle('hidden');

    //Reproduce el sonido
    const audio = new Audio('click.mp3');
    audio.play();
});

//Función para crear corbatas
function crearCorbata() {
    const corbata = document.createElement('img');
    corbata.src = 'corbata.png';
    corbata.classList.add('corbata');

    //Posición horizontal aleatoria
    corbata.style.left = Math.random() * window.innerWidth + 'px';
    corbata.style.animationDuration = (3 + Math.random() * 3) + 's';

    document.getElementById('corbatas-container').appendChild(corbata);

    //Eliminar la corbata cuando termine su animación
    setTimeout(() => {
        corbata.remove();
    }, 6000);
}

//Generar corbatas cada cierto tiempo
setInterval(crearCorbata, 500);
