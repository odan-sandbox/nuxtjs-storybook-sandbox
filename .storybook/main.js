const path = require('path');

module.exports = {
  stories: ['../components/**/*.stories.[tj]s'],
  addons: ['@storybook/addon-viewport/register', "@storybook/addon-docs"],
  presets: [/*path.resolve("./.storybook/nuxt-preset.js")*/ '@storybook/preset-typescript', '@storybook/preset-scss']
};
