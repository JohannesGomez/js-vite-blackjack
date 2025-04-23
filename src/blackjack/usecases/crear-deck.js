import _ from 'underscore';

/**
 *  Esta función crea un nuevo Deck(Cubierta) o nuevas Barajas
 * @param   {Array<String>} tiposCartas Ejemplo : ['C','D','H','S']
 * @param   {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas o barajas ordenados
 */    
export const crearDeck = (tiposCartas, tiposEspeciales)=> {   
          
    if( !tiposCartas || tiposCartas.length === 0 )
        throw new Error('(tipoCartas es obligatorio, requiere un arrglo de string!')
    if( !tiposEspeciales || tiposEspeciales.length === 0 )
        throw new Error('tiposEspeciales es obligatorio, requiere un arrglo de string!')
 
      let deck = []; //* Arreglo de cartas
      for( let tipoCarta of tiposCartas ) {
          for( let i = 2; i <= 10; i++ ){
              deck.push(i + tipoCarta);    
          }    
      }
      // * Crear cartas especiales 
      for( let  tipoEspecial of  tiposEspeciales ) {
          for(  let tipoCarta of tiposCartas){
              deck.push( tipoEspecial + tipoCarta);    
          }              
      }                           //*  Descargar libreria see: https://underscorejs.org
      return _.shuffle( deck ) ; //* (_.shuffle)Devuelve el un arreglo Desordenado, se utilizó la libreria  https://underscorejs.org
}

//export default crearDeck;
