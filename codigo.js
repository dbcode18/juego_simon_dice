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
    this.inicializar(3);
    this.jugar();
  }

  inicializar(varlor_inicial){
    this.celeste=new Boton($btnCeleste);
    this.violeta=new Boton($btnVioleta);
    this.naranja=new Boton($btnNaranja);
    this.verde=new Boton($btnVerde);
    this.perdio=0;
    this.contador=varlor_inicial;
  }

  jugar(){
    var j=0;

    // while(this.perdio==0){
    // while(j<5){
      this.secuencia=this.generar_secuencia();
      this.iluminar();
      this.contador++;
      console.log(this.secuencia);
      j++;
    // }
  }

  generar_secuencia(){
    var secuencia=[];
    var i;
    for (i = 0; i<this.contador ; i++) {
      secuencia.push(Math.ceil(Math.random()*4));
    }
    return secuencia;
  }

  async iluminar(){
    var w;
    for (w = 0; w<this.contador ; w++) {
      await sleep(1000);
      console.log("entre");
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
