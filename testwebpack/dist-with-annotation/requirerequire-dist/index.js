/*
 * @Author: wandouni
 * @Date: 2022-04-04 22:46:44
 * @LastEditors: wandouni
 * @LastEditTime: 2022-04-05 00:24:57
 */

(() => {
  "use strict";
  var r = {
      457: (r) => {
        // 4 将foo函数挂载在外层p.exports对象上
        r.exports = { foo: () => 1 };
      },
    },
    o = {};
  (function t(e) {
    // 1 判断是否有缓存
    var s = o[e];
    if (void 0 !== s) return s.exports;
    // 2 添加缓存，定义空exports对象
    var p = (o[e] = { exports: {} });
    // 3 执行r[457]
    // 5 返回p.exports 即{ foo: () => 1 }
    return r[e](p, p.exports, t), p.exports;
    // 6 执行foo 返回1
  })(457).foo();
})();
