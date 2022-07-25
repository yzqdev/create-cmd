 

import {merge}  from 'webpack-merge'
import common from './common'
import TerserPlugin from"terser-webpack-plugin"
import { DefinePlugin } from 'webpack';
export default merge(common, {
  mode:`production`,
  devtool: 'inline-source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true,
          },
          sourceMap: false,
        },
      }),
    ],
  },
  plugins: [
    new  DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ]
});
