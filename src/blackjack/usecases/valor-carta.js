
/**
*  Obtener valor númerico de la carta
* @param   {String} carta valor de la carta Ejemplo : ['10H']
* @returns {Number} valor de la carta en número Ejemplo 10;
*/    
export const valorCarta = (carta) => {
     
    const valor = carta.substring(0, carta.length-1); // 2H o 10S solo tomar el número
    return (( isNaN( valor ) ) ?
            ( valor === 'A'  ) ? 11 : 10 
            : valor * 1);

}