
var contador = 0;

const incrementaContador = () =>{
    contador = contador + 1;
}
const getContagem=()=>{
    return contador;
}
export default {
    incrementaContador,
    contador,
    getContagem
};