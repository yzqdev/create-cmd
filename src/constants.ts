import { Framework } from "./interfaces/cli";
import { blue, cyan, green, lightRed, magenta, yellow } from "kolorist";
export const FRAMEWORKS: Framework[] = [
  {
    name: "Node命令行",
    color: yellow,
    variants: [
      {
        name: "ts",
        display: "use tsc",
        color: yellow,
      },
      {
        name: "tsup",
        display: "use tsup",
        color: blue,
      },
      {
        name: "rollup",
        display: "use rollup",
        color: green,
      },
      {
        name: "esbuild",
        display: "use esbuild",
        color: magenta,
      },
      {
        name: "unbuild",
        display: "use unbuild",
        color: cyan,
      },
    ],
  },
  {
    name: "ssg项目",
    color: green,
    variants: [
      {
        name: "vitepress",
        display: "vitepress项目",
        color: blue,
      },
      {
        name: "vuepress",
        display: "vuepress项目",
        color: cyan,
      },
      {
        name: "hope",
        display: "hope主题项目",
        color: green,
      },
      {
        name: "vite-ssg",
        display: "vite-ssg项目",
        color: magenta,
      },
      {
        name: "docsify",
        display: "docsify项目",
        color: lightRed,
      },
    ],
  },
  {
    name: "web项目",
    color: cyan,
    variants: [
      {
        name: "vue",
        display: "vue-ts项目",
        color: yellow,
      },
      {
        name: "react",
        display: "react-ts项目",
        color: green,
      },

      {
        name: "webpack",
        display: "webpack项目",
        color: lightRed,
      },
      {
        name: "parcel",
        display: "parcel项目",
        color: magenta,
      },
    ],
  },
];
