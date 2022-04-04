/*
 * @Author: wandouni
 * @Date: 2022-04-04 22:35:24
 * @LastEditors: wandouni
 * @LastEditTime: 2022-04-04 22:46:39
 */

var path = require("path");
module.exports = {
  entry: path.join(__dirname, "requirerequire", "index.js"),
  output: {
    path: path.join(__dirname, "dist", "requirerequire-dist"),
    filename: "index.js",
  },
};
