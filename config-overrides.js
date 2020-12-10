const rewireSass = require('react-app-rewire-scss');

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  config = rewireSass(config, env);
  // config = rewireSass.withLoaderOptions(someLoaderOptions)(config, env);
  return config;
};
