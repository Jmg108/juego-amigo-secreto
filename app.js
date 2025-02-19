// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let nombreAmigo;
let amigoSorteado;

function agregarAmigo() {
 
    nombreAmigo = document.getElementById("amigo").value;
    
    // ver includes para utilizar y chequear para que no haya duplicados
  
    if (nombreAmigo === "") {
      alert("escribi un nombre ya que el campo esta vacio.");
    } else if (amigos.includes(nombreAmigo)) {
      document.getElementById("amigo").value = "";
      alert(`El nombre ${nombreAmigo} ya existe en la lista, agregue otro por favor`);
    }
      else {
      amigos.push(nombreAmigo);
      console.log(amigos);
      document.getElementById("amigo").value = "";
      amigoSorteado = document.getElementById("resultado");
      amigoSorteado.innerHTML = "";
    
    }
    //console.log(nombreAmigo);
    
    recorrerListaAmigos(amigos);
  }
  
  function recorrerListaAmigos(amigos) {
    listaAmigos.innerHTML = "";
    for (i = 0; i < amigos.length; i++) {
      
      let = nuevoElementoLista = document.createElement("li");
      nuevoElementoLista.innerHTML = amigos[i];
      listaAmigos.appendChild(nuevoElementoLista);
      
    }
  }
  
  function sortearAmigo() {
    if  (amigos.length === 0) {
      alert("escribe los nombres de tus amigos para dar comienzo al juego");
    } else {
      let indiceAleatorio = Math.floor(Math.random() * amigos.length);
      nombreAmigoSorteado = amigos[indiceAleatorio];
      console.log(nombreAmigoSorteado);
      amigoSorteado = document.getElementById("resultado");
      amigoSorteado.innerHTML = `el amigo sorteado es ${nombreAmigoSorteado}`;
      listaAmigos.innerHTML = "";
      amigos = [];
      setTimeout(() => {
        resultado.innerHTML= 'Juego Finalizado';
      }, 10000);
   console.log(amigos);
   setTimeout(() => {
    resultado.innerHTML = 'Comenzar juego nuevamente escribiendo tus amigos';
  }, 15000);
    } 
    }