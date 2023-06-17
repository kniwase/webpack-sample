var e = {
    d: (t, o) => {
      for (var a in o)
        e.o(o, a) &&
          !e.o(t, a) &&
          Object.defineProperty(t, a, { enumerable: !0, get: o[a] });
    },
    o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
  },
  t = {};
e.d(t, { E: () => o });
const o = fetch("data:application/json;base64,ewogICAgImFuc3dlciI6IDQyCn0=")
  .then((e) => e.json())
  .then(({ answer: e }) => `人生、宇宙、すべての答えは ${e} です`);
var a = t.E;
export { a as getAnswer };
