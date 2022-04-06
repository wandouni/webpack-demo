/*
 * @Author: wandouni
 * @Date: 2022-04-04 22:46:44
 * @LastEditors: wandouni
 * @LastEditTime: 2022-04-06 11:16:28
 */
(() => {
  "use strict";
  var r,
    e = {
      66: (r) => {
        r.exports = { foo: () => 1 };
      },
    },
    o = {};
  function t(r) {
    // 1.1 r=66 判断是否有缓存
    var n = o[r];
    if (void 0 !== n) return n.exports;
    // 1.2 添加缓存，定义空exports对象
    var a = (o[r] = { exports: {} });
    // 1.e 从e中取出目标函数，返回a.exports，即{ foo: () => 1 }
    return e[r](a, a.exports, t), a.exports;
  }
  (t.n = (r) => {
    // 2.1 因为为commonjs模块，无__esModule e=()=>{ foo: () => 1 }
    var e = r && r.__esModule ? () => r.default : () => r;
    // 2.e 返回添加了enumerable和getter的e=()=>{ foo: () => 1 }
    return t.d(e, { a: e }), e;
  }),
    (t.d = (r, e) => {
      for (var o in e)
        t.o(e, o) &&
          !t.o(r, o) &&
          // 2.2 给()=>{ foo: () => 1 }添加a属性，get为()=>{ foo: () => 1 }
          Object.defineProperty(r, o, { enumerable: !0, get: e[o] });
    }),
    (t.o = (r, e) => Object.prototype.hasOwnProperty.call(r, e)),
    // 1、执行
    (r = t(66)),
    // 2、执行t.n(r)r={ foo: () => 1 }
    // 3、执行(),获得{ foo: () => 1 }
    // 4、将foo取出执行
    t.n(r)().foo();
})();
