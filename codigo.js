$btnEmpezar=document.getElementById("btnEmpezar");
$btnCeleste=document.getElementById("celeste");
$btnVioleta=document.getElementById("violeta");
$btnNaranja=document.getElementById("naranja");
$btnVerde=document.getElementById("verde");


$btnCeleste.addEventListener('animationend',iluminacion_remover_celeste);
$btnVioleta.addEventListener('animationend',iluminacion_remover_violeta);
$btnNaranja.addEventListener('animationend',iluminacion_remover_naranja);
$btnVerde.addEventListener('animationend',iluminacion_remover_verde);


function iluminacion_remover_celeste(){
  $btnCeleste.classList.remove("iluminar");
}
function iluminacion_remover_violeta(){
  $btnVioleta.classList.remove("iluminar");
}
function iluminacion_remover_naranja(){
  $btnNaranja.classList.remove("iluminar");
}
function iluminacion_remover_verde(){
  $btnVerde.classList.remove("iluminar");
}


function empezarJuego(){
  $btnEmpezar.classList.add("hide");
  juego=new Juego();
}

class Juego{
  constructor(){
    this.inicializar(3); //inicaliza las variables
    this.jugar(); //loop donde el usuario juega
  }

  inicializar(valor_inicial){
    this.celeste=new Boton($btnCeleste);
    this.violeta=new Boton($btnVioleta);
    this.naranja=new Boton($btnNaranja);
    this.verde=new Boton($btnVerde);
    this.perdio=0; //flag que determina si el jugador perdio o no
    this.contador=valor_inicial; //el numero de suceciones con el que comienza la partida 1 (se autoincrementa una unidad por cada partida que pasa)
  }

  async jugar(){
    var j=0;

    // while(this.perdio==0){
      while(j<5){
        this.secuencia=this.generar_secuencia(); //genera la secuencia de numeros que indica que boton se va a iluminar
        console.log(this.secuencia);
        await this.iluminar(); //ilumina la secuencia de numeros. Relaciona this.secuencia con su respectivo boton
        this.contador++;
        j++;
      }
    // }
  }

  generar_secuencia(){
    var secuencia=[];
    var i;
    var aux;
    for (i = 0; i<this.contador ; i++) {
      aux=(Math.ceil(Math.random()*4)); //Math.random genera un numero entre [0,1). Math.ceil redondea hacia el entero mayor. El resultado es un numero comprendido entre [0,4]
      if(aux==0){
        aux=1; //en caso que Math.random=0, aux=0. No se desea eso
      }
      secuencia.push(aux);
    }
    return secuencia;
  }

  async iluminar(){
    var w;
    for (w = 0; w<this.contador ; w++) {
      await sleep(1000);
      // console.log("entre");
      if(this.secuencia[w]==1){
        this.celeste.iluminar();
      } else if(this.secuencia[w]==2){
        this.violeta.iluminar();
      } else if(this.secuencia[w]==3){
        this.naranja.iluminar();
      } else if(this.secuencia[w]==4){
        this.verde.iluminar();
      }
    }
  }

}



function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}




class Boton{
  constructor(boton){
    this.boton=boton;
  }

  iluminar(){
    this.boton.classList.add("iluminar");
  }

}
