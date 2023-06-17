var e = {
    d: (o, r) => {
      for (var l in r)
        e.o(r, l) &&
          !e.o(o, l) &&
          Object.defineProperty(o, l, { enumerable: !0, get: r[l] });
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
module.exports = o;
