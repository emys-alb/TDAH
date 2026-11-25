import React from 'react';
import { AccessibilityInfo } from 'react-native';
import renderer, { act } from 'react-test-renderer';
import App from '../App';

jest.mock('../aventura/fontes', () => ({ carregarFontes: () => Promise.resolve() }));
jest.mock('../aventura/armazenamento', () => ({ ler: () => Promise.resolve(null), gravar: () => Promise.resolve() }));
it('abre a base e apresenta a primeira missão da rotina', async () => {
  jest.spyOn(AccessibilityInfo, 'isReduceMotionEnabled').mockResolvedValue(true);
  let arvore;
  await act(async () => { arvore = renderer.create(<App />); });
  try {
    expect(arvore.root.findAllByProps({ accessibilityLabel: 'Começar missão' }).length).toBeGreaterThan(0);
    expect(arvore.root.findAllByProps({ accessibilityLabel: 'Escovar os dentes, 08:10' }).length).toBeGreaterThan(0);
  } finally { act(() => arvore.unmount()); }
});
