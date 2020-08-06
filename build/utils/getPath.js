/**
 * @ Author: Muniz
 * @ Create Time: 2020-06-12 11:51:22
 * @ Modified by: Muniz
 * @ Modified time: 2020-06-19 17:01:35
 * @ Description: 项目运行所需要的目录路径
 */
const path = require("path");

// 项目根目录
const PROJECT_ROOT = path.resolve(__dirname, "../");
const SRC_ROOT = path.resolve(PROJECT_ROOT, "./src");

// 项目下的 SRC / less , 全局注入 LESS 变量样式
const LESS_PATH_ROOT = path.resolve(SRC_ROOT, "./assets/less");

module.exports = {
  PROJECT_ROOT,
  SRC_ROOT,
  LESS_PATH_ROOT,
};
