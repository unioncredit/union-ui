import babel from '@rollup/plugin-babel';
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import scss from 'rollup-plugin-scss'

const packageJson = require("./package.json");

const external = Object.keys(packageJson.devDependencies);
console.log("[*] External deps")
console.log(external);

export default {
  input: "src/index.js",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  external,
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: [ '.js', '.jsx' ]
    }),
    commonjs({
      exclude: 'src/**',
    }),
    scss(),
    babel({
      exclude: 'node_modules/**'
    }),
  ]
};
