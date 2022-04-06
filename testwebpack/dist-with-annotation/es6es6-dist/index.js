/*
 * @Author: wandouni
 * @Date: 2022-04-04 22:46:44
 * @LastEditors: wandouni
 * @LastEditTime: 2022-04-05 00:06:08
 */
(() => {
  "use strict";
  var r = {
      54: (r, o) => {
        // 4 将foo函数挂载在外层s.exports对象上
        o.foo = function () {
          return 1;
        };
      },
    },
    o = {};
  (function t(e) {
    // 1 判断是否有缓存
    var n = o[e];
    if (void 0 !== n) return n.exports;
    // 2 添加缓存，定义空exports对象
    var s = (o[e] = { exports: {} });
    // 3 执行r[54]
    // 5 返回s.exports 即{foo:function(){return 1}}
    return r[e](s, s.exports, t), s.exports;
    // 6 执行s.exports.foo 返回1
  })(54).foo();
})();
