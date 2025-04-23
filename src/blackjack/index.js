import _ from 'underscore';
import { crearDeck, pedirCarta, valorCarta, 
         acumularPuntos, turnoComputadora, crearCartaHTML } from './usecases'; // buscar por defecto el archivo index

  // Variables definidas de manera global
  let deck,
      puntosJugador   = 0,
      puntosJugadores =[];

  const tipos      = ['C','D','H','S'], // Barajas
        especiales = ['A','J','Q','K']; // Barajas especiales

       //* Referencia del HTML
       const btnPedir   = document.querySelector('#btnPedir'),
       btnDetener = document.querySelector('#btnDetener'),
       btnNuevo   = document.querySelector("#btnNuevo"),
       divCartasJugadores = document.querySelectorAll('.divCartas'),
       puntosHTML = document.querySelectorAll('small');
      //* Esta función inicializa el juego       
    const inicializarJuego = (numJugadores = 2) => { // por defecto un jugador
        puntosJugadores =[];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0); // inicializar puntuación de los jugadores
        }
        //* forEach Permite ejecutar el callback por cada elemento
        //* que se encuentre en puntosHTML
        puntosHTML.forEach( elem => elem.innerText = 0 ); // Inicializar sumador de puntos
        divCartasJugadores.forEach( elem => elem.innerHTML = '' ); // Inicilizar las carta imagenes

        btnDetener.disabled = false;
        btnPedir.disabled   = false;
    }        
  
  //   //*  Crea el Deck(Cubierta) o nuevas Barajas
  deck = crearDeck( tipos, especiales ); 
  inicializarJuego(2);
  //*

  
  // Eventos

  // ? se inicializa cuando carga el index.html
   btnNuevo.addEventListener('click', ()=>{      
        inicializarJuego(2);
        deck = crearDeck( tipos, especiales );
   });

  btnPedir.addEventListener('click', ()=>{    
      const carta  = pedirCarta(deck);        
      puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);

      crearCartaHTML(carta,0,divCartasJugadores);      

      //* Controlar el puntaje        
      if( puntosJugador >= 21){
          btnPedir.disabled = true;
          btnDetener.disabled = true;         
          turnoComputadora(puntosJugadores, puntosJugador, deck, puntosHTML, divCartasJugadores);   
      }
  });

  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      btnDetener.disabled = true;         
      turnoComputadora(puntosJugadores, puntosJugador, deck, puntosHTML, divCartasJugadores);   
  })    
