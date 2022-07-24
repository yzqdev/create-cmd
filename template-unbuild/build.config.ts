import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [  "src/index"],
  // entries: ["src/"],
  rollup: {
    inlineDependencies: true,
  },
  clean: true,
  declaration: true,
});
