const { getWebpackConfig } = require("nuxt")

/**
 *
 * @param {import('webpack').Configuration} webpackConfig
 * @returns {Promise<import('webpack').Configuration>}
 */
async function processConfig(webpackConfig = {}) {
  /**
   * @type {import('webpack').Configuration}
   */
  const nuxtWebpackConfig = await getWebpackConfig();

  const { resolve = {}, plugins = [], module } = webpackConfig;

  return {
    ...webpackConfig,
    module: {
      ...module,
      rules: nuxtWebpackConfig.module.rules,
    },
    plugins: [
      ...plugins,
      ...nuxtWebpackConfig.plugins
    ],
    resolve: {
      ...resolve,
      ...nuxtWebpackConfig.resolve
    },
  }
}


module.exports = {
  webpackFinal: async (webpackConfig = {}) => {
    const config = await processConfig(webpackConfig)
    return config;
  }
}
