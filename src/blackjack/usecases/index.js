//* Así se renombra a una función importada
//import { crearDeck as crearNuevoDeck} from './usecases/crear-deck';
//import { crearDeck } from './usecases/crear-deck'; con export
//import  crearNuevoDeck  from './usecases/crear-deck';
export { crearDeck } from './crear-deck';
export { pedirCarta } from './pedir-carta';
export { valorCarta } from './valor-carta';
export { turnoComputadora } from './turno-computadora';
export { acumularPuntos }  from './acumula-puntos';
export { crearCartaHTML } from './crear-carta';