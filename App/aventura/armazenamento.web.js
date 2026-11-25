const CHAVE = 'tripulantes.aventura.v1';
export async function ler() { return window.localStorage.getItem(CHAVE); }
export async function gravar(valor) { window.localStorage.setItem(CHAVE, valor); }
