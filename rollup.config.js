import summary from "rollup-plugin-summary";
import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import * as console from "console";

export default {
  input: "text-editor.component.js",
  output: {
    file: "text-editor.component.bundled.js",
    format: "esm"
  },
  onwarn(warning) {
    if (warning.code !== "THIS_IS_UNDEFINED") {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    replace({ "Reflect.decorate": "undefined" }),
    resolve(),
    terser({
      ecma: 2017,
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/
        }
      }
    }),
    summary()
  ]
};
