	
//ENTORNO
var g = 1.622;
var dt = 0.016683;
var timer=null;
var timerFuel=null;
//NAVE
var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var c = 100;
var a = g; //la aceleración cambia cuando se enciende el motor de a=g a a=-g (simplificado)
//MARCADORES
var velocidad = null;
var altura = null;
var combustible = null;

//al cargar por completo la página...
window.onload = function(){
	
	velocidad = document.getElementById("velocidad");
	altura = document.getElementById("altura");
	combustible = document.getElementById("fuel");


	function motorOn(){
	a=-g;
	if (timerFuel==null){
		document.getElementById("nave5").src = "img/nave2.png";	
		timerFuel=setInterval(function(){ actualizarFuel(); }, 10);
	}
	if (c == 0){ 
		motorOff();
	}

	if (aterrizado){
		motorOff();
	}
}
function motorOff(){
	document.getElementById("nave5").src = "img/nave1.png";
	a=g;
	clearInterval(timerFuel);
	timerFuel=null;
}
function actualizarFuel(){
	c-=0.1;
	if (c < 0 ) c = 0;
	combustible.innerHTML=c.toFixed(0);	
}
	
	//definición de eventos
	//mostrar menú móvil
    	document.getElementById("showm").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "block";
		stop();
	}
	//ocultar menú móvil
	document.getElementById("hidem").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "none";
		start();
	}
	//encender/apagar el motor al hacer click en la pantalla
	document.onclick = function () {
 	  if (a==g){
  		motorOn();
 	  } else {
  		motorOff();
 	  }
	}
	//encender/apagar al apretar/soltar una tecla
	document.onkeydown = motorOn;
	document.onkeyup = motorOff;
	
	//Empezar a mover la nave justo después de cargar la página
	start();
}

//Definición de funciones
function start(){
	//cada intervalo de tiempo mueve la nave
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

function stop(){
	clearInterval(timer);
}

function moverNave(){
	//cambiar velocidad y posicion
	v +=a*dt;
	y +=v*dt;
	//actualizar marcadores
	velocidad.innerHTML=v.toFixed(1);
	altura.innerHTML=y.toFixed(1);
	

	if (y<60){ 
		document.getElementById("nave").style.top = y+"%"; 
	} else { 
		stop(); drop();
	}
}


function drop() {
    if (v <= 5) {
        setTimeout(funci, 500);
        function funci() {
            confirm("Molt be,Has guanyat, Tornes a jugar?");
            document.onkeydown = null;
            document.onkeyup = null;
            if (r == true) {
                location.reload();
            }
        }
    }
    else {
        document.onkeydown = null;
        document.onkeyup = null;

        setTimeout(func, 2000);
        function func() {
           var r = confirm("Que dolent, tornes a probar?");
            document.onkeydown = null;
            document.onkeyup = null;
            if (r == true) {
                location.reload();
            }
            else
                ;
        }

    }
}
