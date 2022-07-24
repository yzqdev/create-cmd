import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { navbar } from "./navbar";
import { sidebar } from "./sidebar";
export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "VuePress",
      description: "Vue 驱动的静态网站生成器",
    },
  },
  theme: defaultTheme({
   
    docsDir: "docs",
    locales: {
      "/": {
        sidebar: sidebar,
        navbar: navbar,
      },
    },
  }),
 
  plugins: [
    
  ],
});
