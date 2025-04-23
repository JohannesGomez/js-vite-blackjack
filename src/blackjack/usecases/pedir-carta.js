



/**
 *  Esta función crea un nuevo Deck(Cubierta) o nuevas Barajas
 * @param   {Array<String>} deck es un arreglo de string Ejemplo : ['9D', 'KS', 'KC', '7C', '6D', 'AD', 'QH', '5S', '7H', 'KH', '9H', 'QC', '2D', 'AH', 'KD', '10S', '8S', 'JD', '5D', 'QD', '3C', '8H', '6S', '5H', 'JC', '9C', '6H', '4S', '3D', 'AS', '2H', 'QS', '8D', 'JS', '4D', '4H', '6C', '7D', '3S', '10D', '2C', '3H', '9S', '5C', '10C', '8C', 'AC', '4C', '2S', '7S', 'JH', '10H']
 * @returns {String} retorna la carta del deck Ejemplo '10H' ;
 */    
  export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {throw 'Ya no hay Cartas en el Deck!'};   
    return deck.pop(); // Remueve último elemento del arreglo y lo regresa;

}