const progreso = document.getElementById('progreso');
const cancion = document.getElementById('cancion');

const botonAtras = document.querySelector('.audio button.atras');
const botonAdelante = document.querySelector('.audio button.adelante');

const iconoPlayPause = document.getElementById('playpause');
const botonPlayPause = document.querySelector('.audio button.playpause')

botonPlayPause.addEventListener('click', PlayPause);

function PlayPause()
{
	if(cancion.paused)
	{
		reproducir();
	}
	else
	{
		pausar();
	}
}

function reproducir()
{
	cancion.play();
	iconoPlayPause.classList.add('fa-pause')
	iconoPlayPause.classList.remove('fa-play')
}

function pausar()
{
	cancion.pause();
	iconoPlayPause.classList.add('fa-play')
	iconoPlayPause.classList.remove('fa-pause')
}

cancion.addEventListener('timeupdate', function(){
	if (!cancion.paused)
	{
		progreso.value = cancion.currentTime
	}
})

progreso.addEventListener('input', function(){
	cancion.currentTime = progreso.value;
})

