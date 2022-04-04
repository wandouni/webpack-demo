/*
 * @Author: wandouni
 * @Date: 2022-04-04 22:46:44
 * @LastEditors: wandouni
 * @LastEditTime: 2022-04-04 23:58:41
 */
(() => {
  "use strict";
  var r = {
      54: (r, o) => {
        o.foo = function () {
          return 1;
        };
      },
    },
    o = {};
  (function t(e) {
    // 判断是否有缓存
    var n = o[e];
    if (void 0 !== n) return n.exports;
    // 添加缓存，定义空exports对象
    var s = (o[e] = { exports: {} });
    // 执行
    return r[e](s, s.exports, t), s.exports;
  })(54).foo();
})();
