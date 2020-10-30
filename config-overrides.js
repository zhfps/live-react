const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addWebpackModuleRule,
  overrideDevServer,
  addLessLoader,
} = require('customize-cra')
const path = require('path')
const addProxy = () => (configFunction) => {
  configFunction.proxy = {
    '/': {
      target: 'http://127.0.0.1:8089',
      changeOrigin: true,
      // pathRewrite: { '^/api': '/' },
    },
  }
  configFunction.port = 8080

  return configFunction
}
// 打包配置
const addCustomize = () => config => {
  
  // 关闭sourceMap
  config.devtool = false;
  // 配置打包后的文件位置
  config.output.path = __dirname + '/dist';
  config.output.publicPath = './';
  //配置favicon公共文件打包目录
  const paths = require('react-scripts/config/paths');
  paths.appBuild = path.join(path.dirname(paths.appBuild), 'dist');

  
  return config;
}

module.exports = {
  webpack: override(
    addCustomize(),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css',
    }),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: { '@primary-color': '#1DA57A' },
    }),
    addWebpackAlias({
      ['@']: path.resolve(__dirname, 'src'),
    }),
    addWebpackModuleRule({
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'babel-loader',
        },
        {
          loader: '@svgr/webpack',
          // options: {
          //     babel: false,
          //     icon: true,
          // },
        },
        {
          loader: 'url-loader',
        },
      ],
    })
  ),
  devServer: overrideDevServer(),
  // addProxy()
}
