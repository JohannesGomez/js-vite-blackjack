
/**
 * 
 * @param   {String} carta arreglo de cartas 
 * @param   {Number} turno del jugador 0=Jugador1, 1=Computadora
 * @param   {HTMLDiv} divCartasJugadores Agregar div de imagenes de las cartas
 * @returns {HTMLImageElement} elemento HTML para mostrar las cartas
 */
export const crearCartaHTML = (carta, turno, divCartasJugadores) => {

    if( !carta ) throw new Error('La carta es un argumento obligatorio');
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta)
}