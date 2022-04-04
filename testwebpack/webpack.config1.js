/*
 * @Author: wandouni
 * @Date: 2022-04-04 22:30:13
 * @LastEditors: wandouni
 * @LastEditTime: 2022-04-04 22:46:36
 */

var path = require("path");
module.exports = {
  entry: path.join(__dirname, "es6reqiure", "index.js"),
  output: {
    path: path.join(__dirname, "dist", "es6reqiure-dist"),
    filename: "index.js",
  },
};
