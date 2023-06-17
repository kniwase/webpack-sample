var e = {
    d: (o, l) => {
      for (var r in l)
        e.o(l, r) &&
          !e.o(o, r) &&
          Object.defineProperty(o, r, { enumerable: !0, get: l[r] });
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
e.r(o), e.d(o, { sayHello: () => l });
const l = () => console.log("Hello World!");
(exports.sayHello = o.sayHello),
  Object.defineProperty(exports, "__esModule", { value: !0 });
