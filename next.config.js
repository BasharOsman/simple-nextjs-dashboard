const path = require('path')
const aliases = require('./alias-config');

module.exports = {
    webpack(config) {
        const { alias } = config.resolve;
        const newConfig = config;
        newConfig.resolve.alias = {
          ...alias,
          ...aliases,
        };
        return newConfig;
      },
}
