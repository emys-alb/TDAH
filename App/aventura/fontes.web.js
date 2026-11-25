const familias = [
  ['NunitoBody', require('../assets/fonts/Nunito-SemiBold.ttf')],
  ['NunitoDisplay', require('../assets/fonts/Nunito-ExtraBold.ttf')],
  ['IconesDeBordo', require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Feather.ttf')],
];
export async function carregarFontes() {
  await Promise.all(familias.map(async ([familia, caminho]) => {
    const fonte = new FontFace(familia, 'url("' + caminho + '")');
    document.fonts.add(await fonte.load());
  }));
}
