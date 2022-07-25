import { HotModuleReplacementPlugin } from "webpack";
import {merge} from 'webpack-merge'
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { Configuration } from "webpack";

const devServer: DevServerConfiguration = {
    historyApiFallback: true, //不跳转
    hot: true,
    // open: false,
    compress: true,
    port: 9800,
  };
import common from './common'
const devConf:Configuration= merge(common, {
  mode:"development",
  devtool: "inline-source-map",
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer,plugins: [ new  HotModuleReplacementPlugin(),]
});
export default devConf