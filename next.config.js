const merge = require("webpack-merge");
const withPlugins = require("next-compose-plugins");
const webpackConfigBase = require("./build/webpack.config");
const less = require("@zeit/next-less");
const css = require("@zeit/next-css");
const path = require("path");
const isProd = process.env.NODE_ENV === "production";

const config = require("./build/config");
const { PROJECT_ROOT, SRC_ROOT } = require("./build/utils/getPath");

const nextConfig = {
  distDir: "next-build",
  target: "server",
  env: {
    customKey: "my-value", // 在代码中 这样去使用 process.env.customKey
  },
  pageExtensions: ["js"],
  assetPrefix: isProd ? "" : "", // cdn 环境配置,
  devIndicators: {
    autoPrerender: false, // 静态优化指标
  },
  // publicRuntimeConfig: {
  //   staticFolder: "/static", // 静态文件 , 存放图片
  // },
  sassOptions: {
    includePaths: [path.join(SRC_ROOT, "./less-var.less")],
  },
  webpack: (config, options) => {
    return merge(config, webpackConfigBase(options));
  },
};

module.exports = withPlugins(
  [
    [css],
    [
      less,
      {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: config.theme,
          },
        },
        postcssLoaderOptions: {
          // parser: 'sugarss',
          config: {},
        },
      },
    ],
  ],
  nextConfig
);
