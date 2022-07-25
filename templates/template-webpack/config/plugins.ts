import _HtmlWebpackPlugin from "html-webpack-plugin" ;





const HtmlWebpackPlugin = new _HtmlWebpackPlugin(
  {
    minify: false,
    title: "webpackinit",
    filename: "index.html",
    template: "public/index.html"
  }
);

export {
  HtmlWebpackPlugin
};
