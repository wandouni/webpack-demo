/*
 * @Author: wandouni
 * @Date: 2022-04-06 11:24:15
 * @LastEditors: wandouni
 * @LastEditTime: 2022-04-06 11:26:48
 */

var path = require("path");
module.exports = {
  entry: path.join(__dirname, "nestimport", "index.js"),
  output: {
    path: path.join(__dirname, "dist", "nestimport-dist"),
    filename: "index.js",
  },
};
