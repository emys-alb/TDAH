
var contador = 0;

const incrementaContador = () => {
    contador = contador + 1;
}
const getContagem = () => {
    return contador;
}
const zeraContagem = () => {
    contador = 0;
}
export default {
    incrementaContador,
    contador,
    getContagem,
    zeraContagem
};