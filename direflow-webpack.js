const { webpackConfig } = require('direflow-scripts');
const path = require("path");

/**
 * Webpack configuration for Direflow Component
 * Additional webpack plugins / overrides can be provided here
 */
module.exports = (config, env) => ({
  ...webpackConfig(config, env),
 ...{
   resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      "Components": path.resolve(__dirname, 'src/components/'),
      "Utils": path.resolve(__dirname, 'src/utils/'),
      "Types": path.resolve(__dirname, 'src/types/'),
      "Stores": path.resolve(__dirname, 'src/stores/'),
      "Services": path.resolve(__dirname, 'src/services/'),
      "Models": path.resolve(__dirname, 'src/models/'),
      "I18N": path.resolve(__dirname, 'src/i18n/')
    }
   }
 }
});
