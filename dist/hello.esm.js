var o = {
    d: (e, r) => {
      for (var l in r)
        o.o(r, l) &&
          !o.o(e, l) &&
          Object.defineProperty(e, l, { enumerable: !0, get: r[l] });
    },
    o: (o, e) => Object.prototype.hasOwnProperty.call(o, e),
  },
  e = {};
o.d(e, { D: () => r });
const r = () => console.log("Hello World!");
var l = e.D;
export { l as sayHello };
