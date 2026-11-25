import * as Font from 'expo-font';
export function carregarFontes() {
  return Font.loadAsync({
    NunitoBody: require('../assets/fonts/Nunito-SemiBold.ttf'),
    NunitoDisplay: require('../assets/fonts/Nunito-ExtraBold.ttf'),
    IconesDeBordo: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Feather.ttf'),
  });
}
