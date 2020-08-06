const path = require("path");
const { PROJECT_ROOT, SRC_ROOT } = require("./utils/getPath");

module.exports = (options) => {
  return {
    resolve: {
      extensions: [".js", ".less", ".jsx", ".ts", ".wasm"],
      modules: [PROJECT_ROOT, path.resolve(PROJECT_ROOT, "./node_modules")],
      alias: {
        _src: path.resolve(SRC_ROOT, "./"),
        _components: path.resolve(SRC_ROOT, "./components/"),
        _containers: path.resolve(SRC_ROOT, "./containers/"),
        _constants: path.resolve(SRC_ROOT, "./constants/"),
        _utils: path.resolve(SRC_ROOT, "./utils"),
        _pages: path.resolve(SRC_ROOT, "./pages"),
      },
    },
  };
};
