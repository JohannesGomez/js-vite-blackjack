import {  pedirCarta, acumularPuntos, crearCartaHTML } from './index'; // buscar por defecto el archivo index

 export const turnoComputadora = (puntosJugadores, puntosMinimo,  deck, puntosHTML, divCartasJugadores) => {

      let puntosComputadora = 0;
      do  {
          const carta  = pedirCarta(deck);          
          puntosComputadora = puntosComputadora + acumularPuntos(carta,1, puntosJugadores, puntosHTML);
         crearCartaHTML(carta,1,divCartasJugadores);                
                

      } while ( (puntosComputadora < puntosMinimo) && (puntosMinimo<=21) )

      // Mensajes    
      setTimeout(() => {
          let [puntosMinimo, puntosComputadora] = puntosJugadores;
          if(puntosComputadora === puntosMinimo) {                          
              alert('Nadie Ganó!');   
            } else if(puntosMinimo > 21) {
                alert('Computadora Gana!');
            } else if (puntosMinimo > puntosComputadora ) {
                       alert('Jugador Gana!');
            } else if (puntosComputadora > 21)  {
                alert('Jugador Gana!!');
            } else if (puntosComputadora < puntosMinimo)  {
                alert('Jugador Gana!!!');
            } else {
                alert('Computadora Gana!!!!') 
          };
      },100 )          
      
  }