import { useCallback, useEffect, useState } from 'react';
import { BackHandler, Platform } from 'react-native';
const base = { tela: 'Base' };
const web = Platform.OS === 'web';
export default function useNavegacao() {
  const [pilha, setPilha] = useState([base]);
  useEffect(() => {
    if (!web) return;
    window.history.replaceState({ tripulantes: [base] }, '');
    const voltarWeb = e => setPilha(e.state?.tripulantes || [base]);
    window.addEventListener('popstate', voltarWeb);
    return () => window.removeEventListener('popstate', voltarWeb);
  }, []);
  const voltar = useCallback(() => {
    if (pilha.length < 2) return false;
    if (web) window.history.back();
    else setPilha(p => p.slice(0, -1));
    return true;
  }, [pilha.length]);
  useEffect(() => {
    if (web) return;
    BackHandler.addEventListener('hardwareBackPress', voltar);
    return () => BackHandler.removeEventListener('hardwareBackPress', voltar);
  }, [voltar]);
  function ir(tela, id, trocar = false) {
    const anterior = pilha[pilha.length - 1];
    if (tela === anterior.tela && id === anterior.id) return;
    const nova = [...(trocar ? pilha.slice(0, -1) : pilha), { tela, id }];
    if (web) window.history[trocar ? 'replaceState' : 'pushState']({ tripulantes: nova }, '');
    setPilha(nova);
  }
  return { rota: pilha[pilha.length - 1], ir, voltar };
}
