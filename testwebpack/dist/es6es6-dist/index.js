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
    var n = o[e];
    if (void 0 !== n) return n.exports;
    var s = (o[e] = { exports: {} });
    return r[e](s, s.exports, t), s.exports;
  })(54).foo();
})();
