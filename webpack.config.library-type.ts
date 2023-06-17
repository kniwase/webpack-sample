import type { Configuration } from "webpack";
import * as path from "path";

const module: Configuration["module"] = {
  rules: [
    {
      test: /\.ts$/i,
      loader: "ts-loader",
      exclude: ['/node_modules/'],
      include: ["/src/hello.ts"],
    },
  ],
};

const configs: Configuration[] = [
  // ES module
  {
    mode: "production",
    entry: "./src/hello.ts",
    target: "web",
    experiments: {
      outputModule: true,
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "hello.esm.js",
      library: {
        type: "module",
      },
    },
    module,
  },
  // CommonJS
  {
    mode: "production",
    entry: "./src/hello.ts",
    target: "web",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "hello.cjs.js",
      library: {
        type: "commonjs",
      },
    },
    module,
  },
  // CommonJS module
  {
    mode: "production",
    entry: "./src/hello.ts",
    target: "web",
    experiments: {
      outputModule: true,
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "hello.cjs-module.js",
      library: {
        type: "commonjs-module",
      },
    },
    module,
  },
  // CommonJS static
  {
    mode: "production",
    entry: "./src/hello.ts",
    target: "web",
    experiments: {
      outputModule: true,
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "hello.cjs-static.js",
      library: {
        type: "commonjs-static",
      },
    },
    module,
  },
];
export default configs;
