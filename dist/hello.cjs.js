(() => {
  "use strict";
  var e = {
      d: (o, r) => {
        for (var t in r)
          e.o(r, t) &&
            !e.o(o, t) &&
            Object.defineProperty(o, t, { enumerable: !0, get: r[t] });
      },
      o: (e, o) => Object.prototype.hasOwnProperty.call(e, o),
      r: (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      },
    },
    o = {};
  e.r(o), e.d(o, { sayHello: () => r });
  const r = () => console.log("Hello World!");
  var t = exports;
  for (var l in o) t[l] = o[l];
  o.__esModule && Object.defineProperty(t, "__esModule", { value: !0 });
})();
