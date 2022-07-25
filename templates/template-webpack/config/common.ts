import * as path from 'path'
import { BannerPlugin, Configuration, HotModuleReplacementPlugin } from 'webpack';
import { CleanWebpackPlugin } from "clean-webpack-plugin" ; //这里必须这样写
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import    { fileLoader, jsLoader, lessLoader, tsLoader } from './loaders'
import{ HtmlWebpackPlugin} from './plugins';
const config: Configuration= {
  entry: "./src/index.tsx",
  output: {
    filename: "[name].[chunkhash].js",

    path: path.resolve(__dirname, "../build"),
    // 在script标签上添加crossOrigin,以便于支持跨域脚本的错误堆栈捕获
    crossOriginLoading: "anonymous",
  },
  plugins: [
    new  BannerPlugin("版权所有翻版必究"),
    new CleanWebpackPlugin(), //这里注意要大写啊
   HtmlWebpackPlugin,
   new MiniCssExtractPlugin(),
    new  HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
     
    alias: {
      components: path.resolve(__dirname, "../src/components"),
    },
  },
   
  module: {
    rules: [
      // loaders.csLoader,
       fileLoader,
      tsLoader,
       lessLoader,
      // loaders.xmlLoader,
       jsLoader,
    ],
  },
};
export default config