import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/"],
  splitting: false,
  sourcemap: false,
  minify: true,
  format:"esm",
  dts: true,
  clean: true,
});
