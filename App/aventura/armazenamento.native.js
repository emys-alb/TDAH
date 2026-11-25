import db from '../services/sqlite/sqliteDatabase';

function transacao(trabalho) {
  return new Promise((resolve, reject) => {
    let valor;
    db.transaction(tx => trabalho(tx, resultado => { valor = resultado; }), reject, () => resolve(valor));
  });
}
export function ler() {
  return transacao((tx, retorno) => {
    tx.executeSql('CREATE TABLE IF NOT EXISTS expedicao (id INTEGER PRIMARY KEY, dados TEXT NOT NULL)');
    tx.executeSql('SELECT dados FROM expedicao WHERE id = 1', [], (_, { rows }) =>
      retorno(rows.length ? rows.item(0).dados : null));
  });
}
export function gravar(valor) {
  return transacao(tx => tx.executeSql('INSERT OR REPLACE INTO expedicao (id, dados) VALUES (1, ?)', [valor]));
}
