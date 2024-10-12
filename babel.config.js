// babel.config.js
export default {
    presets: [
      ['@babel/preset-env', { modules: false }] // Mantener módulos ES
    ],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }] // Asegúrate de que esto sea un array
    ],
  };
  