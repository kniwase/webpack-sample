import type { Configuration } from "webpack";
import * as path from "path";

const config: Configuration = {
  mode: "production",
  entry: "./src/universe.ts",
  target: "web",
  experiments: {
    outputModule: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "universe.js",
    library: {
      type: "module",
    },
  },
  module: {
    rules: [
      { test: /\.json$/, type: "asset/inline" },
      {
        test: /\.ts$/i,
        loader: "ts-loader",
        include: ["/src/universe.ts"],
        exclude: ["/node_modules/"],
      },
    ],
  },
};

export default config;
