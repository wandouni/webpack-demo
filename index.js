/*
 * @Author: wandouni
 * @Date: 2022-04-03 16:15:22
 * @LastEditors: wandouni
 * @LastEditTime: 2022-04-03 23:08:27
 */
const path = require("path");
const fs = require("fs");
const a = require("./a.js");
console.log(a.__esModule ? a.default : a);

// /Users/shenni/repository/nodejs-demo/package.json 路径的字符串
console.log(path.join(process.cwd(), "package.json"));
const sb = require(path.join(process.cwd(), "package.json"));

// {
//     name: 'y',
//     version: '1.0.0',
//     description: '',
//     main: 'index.js',
//     scripts: {
//       start: 'node index.js',
//       test: 'echo "Error: no test specified" && exit 1'
//     },
//     author: '',
//     license: 'ISC'
//   }
console.log(sb);
// object
console.log(typeof sb);

// 返回解析的路径名
// string
// /Users/shenni/repository/nodejs-demo
console.log(fs.realpathSync(process.cwd()));
console.log(typeof fs.realpathSync(process.cwd()));

const winPath = function (path) {
  // \\?\
  const isExtendedLengthPath = /^\\\\\?\\/.test(path);
  if (isExtendedLengthPath) {
    return path;
  }

  return path.replace(/\\/g, "/");
};
// “\\?\”
// console.log('/^\\\\?\\/.test("/a/b/c")', /^\\\\\?\\/.test("\\?\"));
