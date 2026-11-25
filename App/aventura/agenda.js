const MESES = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const dois = valor => String(valor).padStart(2, '0');

function inicioDoMes(data, deslocamento = 0) {
  const [ano, mes] = data.split('-').map(Number);
  const primeira = new Date(ano, mes - 1 + deslocamento, 1, 12);
  return primeira.getFullYear() + '-' + dois(primeira.getMonth() + 1) + '-01';
}
function diasDoMes(data) {
  const [ano, mes] = data.split('-').map(Number);
  const total = new Date(ano, mes, 0, 12).getDate();
  return Array.from({ length: total }, (_, i) => data.slice(0, 7) + '-' + dois(i + 1));
}
function planoDoDia(estado, data) {
  const dia = estado.dias[data];
  let rotina = estado.rotina;
  if (estado.versoesRotina) {
    const inicio = Object.keys(estado.versoesRotina).sort().reverse().find(chave => chave <= data);
    rotina = inicio ? estado.versoesRotina[inicio] : [];
  }
  const itens = new Map(rotina.map(t => [t.id, t]));
  Object.values(dia?.ajustes || {}).forEach(t => itens.set(t.id, t));
  // Um resultado antigo continua no histórico, inclusive se a rotina foi pausada depois.
  Object.entries(dia?.resultados || {}).forEach(([id, r]) => {
    const t = itens.get(id);
    itens.set(id, { horario: '', arte: 'foguete', ...t, id, titulo: r.titulo, ativa: true });
  });
  return [...itens.values()].sort((a, b) => a.horario.localeCompare(b.horario));
}
module.exports = { MESES, inicioDoMes, diasDoMes, planoDoDia };
