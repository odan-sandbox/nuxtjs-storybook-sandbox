const { buildDev } = require('@storybook/core/server')
const { getWebpackConfig } = require('nuxt')

async function main() {
  const webpack = await getWebpackConfig()
  await buildDev({
    frameworkPresets: [webpack],
    packageJson: {
      version: '1.0',
      name: "poyo"
    }
  })
}

main()
