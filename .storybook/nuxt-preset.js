const path = require("path")
const { Nuxt, Builder } = require("nuxt")

/**
 *
 * @param {string} nuxtConfig
 * @returns {import('webpack').Configuration}
 */
async function resolveWebpackConfig(nuxtConfig) {
  const config = require(nuxtConfig)
  const nuxt = new Nuxt(config)
  const builder = new Builder(nuxt)
  await nuxt.ready()
  const nuxtWebpackConfig = await builder.bundleBuilder.getWebpackConfig('Client')

  return {
    plugins: nuxtWebpackConfig.plugins,
    module: { ...nuxtWebpackConfig.module, rules: [nuxtWebpackConfig.module.rules[0]] },
    resolve: nuxtWebpackConfig.resolve,
    resolveLoader: nuxtWebpackConfig.resolveLoader
  }
}



module.exports = {
  webpack: async (config) => {
    console.log(Object.keys(config))
    // うまく動かない諦める
    // const webpackConfig = await resolveWebpackConfig("../nuxt.config.js")

    const webpackConfig = {
      module: {
        rules: [
          {
            test: /\.s?css$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../')
          }
        ]
      },
      resolve: {
        alias: {
          '@': path.dirname(path.resolve(__dirname))
        }
      }
    }
    // */
    return {
      ...config,
      plugins: [...config.plugins],
      module: {
        ...config.module,
        ...webpackConfig.module,
      },
      resolve: {
        ...webpackConfig.resolve,
      },
      resolveLoader: webpackConfig.resolveLoader,
    };
  },
  webpackFinal: (config) => {
    console.log("final", config.module.rules)
    return config
    return {
      ...config,
      module: {
        ...config.module,
        // Remove duplicate rules added by storybook
        // https://github.com/storybooks/storybook/blob/v5.2.0/lib/core/src/server/preview/base-webpack.config.js
        //rules: config.module.rules.slice(0, -3),
      },
    }
  }
}
