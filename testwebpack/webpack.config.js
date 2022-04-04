/*
 * @Author: wandouni
 * @Date: 2022-04-04 19:19:23
 * @LastEditors: wandouni
 * @LastEditTime: 2022-04-04 22:46:26
 */
var path = require("path");
module.exports = {
  entry: path.join(__dirname, "es6es6", "index.js"),
  output: {
    path: path.join(__dirname, "dist", "es6es6-dist"),
    filename: "index.js",
  },
};
