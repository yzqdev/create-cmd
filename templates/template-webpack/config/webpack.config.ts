import * as path from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { HtmlWebpackPlugin } from './plugins';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { Configuration } from "webpack";

const devServer: DevServerConfiguration = {};
import { BannerPlugin,   HotModuleReplacementPlugin } from 'webpack';
import { csLoader, fileLoader, jsLoader, jsxLoader, tsLoader, xmlLoader } from './loaders';
 
const config:Configuration= {
  mode: "development",
  entry: {
    index: `../src/index.js`,
    app: "../src/app.jsx"
  },
  output: {
    filename: `[name].[hash].js`,
    path: path.resolve(__dirname, `../build`),
    // 在script标签上添加crossOrigin,以便于支持跨域脚本的错误堆栈捕获
    crossOriginLoading: `anonymous`
  },
  plugins: [
    new  BannerPlugin(`版权所有翻版必究`),
    HtmlWebpackPlugin,
    
    // 拆分后会把css文件放到dist目录下的css/style.css
    new MiniCssExtractPlugin(),
    new  HotModuleReplacementPlugin(),
    
  ],
  resolve: {
    extensions: [".js", ".jsx",'.ts','.tsx'],
    modules: [
      path.resolve(__dirname, `../src`),
      path.resolve(__dirname, `../node_modules`)
    ],
    alias: {
      components: path.resolve(__dirname, `/src/components`)
    }
  },
   
  module: {
    rules: [
       csLoader,
       fileLoader,
       xmlLoader,
       tsLoader,
       jsLoader,
       jsxLoader
    ]
  },
  devtool: `inline-source-map`,

  devServer: {
    hot: true,
    
    historyApiFallback: true, //不跳转
    port: 7230,
    host: '0.0.0.0'
  }
};
