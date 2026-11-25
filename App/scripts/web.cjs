const path = require('path');
const fs = require('fs');
const esbuild = require('esbuild');

const raiz = path.resolve(__dirname, '..');
const destino = path.join(raiz, 'web-build');
const produzir = process.argv.includes('--build');
const porta = Number(process.env.PORT || 8082);
async function iniciar() {
  fs.mkdirSync(destino, { recursive: true });
  fs.copyFileSync(path.join(raiz, 'web', 'index.html'), path.join(destino, 'index.html'));
  const opcoes = {
    absWorkingDir: raiz, entryPoints: { app: 'index.web.js' }, outdir: destino, bundle: true,
    platform: 'browser', alias: { 'react-native': 'react-native-web' },
    resolveExtensions: ['.web.js', '.web.jsx', '.js', '.jsx', '.json'],
    loader: { '.js': 'jsx', '.png': 'file', '.jpg': 'file', '.ttf': 'file' }, assetNames: 'assets/[name]-[hash]',
    // O Animated do React Native Web usa global.cancelAnimationFrame ao sair da tela.
    define: { global: 'globalThis', __DEV__: 'false', 'process.env.NODE_ENV': '"production"' }, minify: produzir, logLevel: 'info',
  };
  if (produzir) return esbuild.build(opcoes);
  const ctx = await esbuild.context(opcoes);
  await ctx.watch();
  await ctx.serve({ servedir: destino, host: '127.0.0.1', port: porta });
  console.log('Tripulantes da Aventura em http://127.0.0.1:' + porta);
}
iniciar().catch(e => { console.error(e); process.exitCode = 1; });
