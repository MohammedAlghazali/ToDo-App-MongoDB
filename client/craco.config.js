const CracoLessPlugin = require('craco-less');
const lessVariables = require('./lessVariables');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: lessVariables,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
