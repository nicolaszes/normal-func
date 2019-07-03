// import resolve from 'rollup-plugin-node-resolve'
import typescript from "rollup-plugin-typescript2"
import json from "rollup-plugin-json"
import camelCase from "lodash.camelcase"

const pkg = require("./package.json")

const libraryName = "normal-func"

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      name: camelCase(libraryName),
      format: "umd",
      sourcemap: true
    },
    { file: pkg.module, format: "es", sourcemap: true }
  ],
  plugins: [
    // Allow json resolution
    json(),
    // Compile TypeScript files
    typescript({ useTsconfigDeclarationDir: true }),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    // resolve()
  ],
  watch: {
    include: "src/**",
    exclude: "node_modules/**"
  }
}
