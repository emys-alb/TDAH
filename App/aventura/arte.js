export const artes = {
  tripulacao: require('../assets/img/tripulacao.jpg'),
  foguete: require('../assets/img/rocket-ship.png'), lua: require('../assets/img/moon.png'),
  terra: require('../assets/img/planet-earth.png'), saturno: require('../assets/img/planet.png'),
  medalha: require('../assets/img/medalha.png'),
  feliz: require('../assets/img/happy-astronaut.png'), tranquilo: require('../assets/img/normal-astronaut.png'),
  chateado: require('../assets/img/sad-astronaut.png'),
  1: require('../assets/img/escovando-os-dentes.png'), 2: require('../assets/img/cafe.png'),
  3: require('../assets/img/relatorio-de-noticias.png'), 4: require('../assets/img/lavando.png'),
  5: require('../assets/img/game.png'), 6: require('../assets/img/comendo.png'),
  7: require('../assets/img/cat.png'), 8: require('../assets/img/lanche.png'),
  9: require('../assets/img/slider.png'), 10: require('../assets/img/computer.png'),
};
export function origem(nome) {
  const valor = artes[nome] || artes.foguete;
  return typeof valor === 'string' ? { uri: valor } : valor;
}
