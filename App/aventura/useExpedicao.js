import { useCallback, useEffect, useRef, useState } from 'react';
import { AppState } from 'react-native';
import { atualizar, chaveDoDia, estadoInicial } from './modelo';
import { ler, gravar } from './armazenamento';

export default function useExpedicao() {
  const [estado, setEstado] = useState(null);
  const atual = useRef(null);
  const fila = useRef(Promise.resolve());
  const escrita = useRef(false);
  const [erro, setErro] = useState('');
  const [data, setData] = useState(chaveDoDia);
  useEffect(() => {
    let vivo = true;
    async function abrir() {
      let inicial = estadoInicial();
      try {
        const bruto = await ler();
        if (bruto) {
          const salvo = JSON.parse(bruto);
          if (salvo.versao !== 1 || !Array.isArray(salvo.rotina) || !salvo.dias) throw Error('Formato desconhecido');
          inicial = salvo;
        }
        escrita.current = true;
      } catch {
        if (vivo) setErro('O progresso anterior não pôde ser aberto. Nesta sessão, o progresso fica só na tela.');
      }
      if (vivo) { atual.current = inicial; setEstado(inicial); }
    }
    abrir();
    const virarDia = () => setData(chaveDoDia());
    const intervalo = setInterval(virarDia, 30000);
    const mudou = s => { if (s === 'active') virarDia(); };
    AppState.addEventListener('change', mudou);
    return () => { vivo = false; clearInterval(intervalo); AppState.removeEventListener('change', mudou); };
  }, []);
  const agir = useCallback(acao => {
    const anterior = atual.current;
    if (!anterior) return;
    const novo = atualizar(anterior, { ...acao, data });
    if (novo === anterior) return;
    atual.current = novo;
    setEstado(novo);
    if (escrita.current) {
      fila.current = fila.current.then(() => gravar(JSON.stringify(novo)))
        .then(() => setErro(''), () => setErro('Não foi possível salvar no aparelho. A próxima alteração tentará de novo.'));
    }
  }, [data]);
  useEffect(() => {
    if (estado && !estado.versoesRotina) agir({ tipo: 'iniciarAgenda' });
  }, [estado, agir]);
  return { estado, data, agir, erro };
}
